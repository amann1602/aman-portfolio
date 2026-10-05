import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'replied' | 'archived';
}

const DATA_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'contact-requests.json');

// In-memory fallback in case filesystem is read-only
let memoryRequests: ContactRequest[] = [
  {
    id: "req-1728151200000",
    name: "Sarah Jenkins",
    email: "sarah.jenkins@techrecruiting.io",
    phone: "+1-415-555-0199",
    subject: "AI Engineer & Research Role Opportunity",
    message: "Hi Aman, we reviewed your published papers in smart traffic IoT and your CrowdFlow YOLOv5 repository. We have an opening for an AI Engineer in our computer vision group and would love to discuss your graduation timeline.",
    createdAt: "2026-10-05T14:30:00.000Z",
    status: "new"
  }
];

function getStoredRequests(): ContactRequest[] {
  try {
    if (fs.existsSync(DATA_FILE_PATH)) {
      const data = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        memoryRequests = parsed;
        return parsed;
      }
    }
  } catch (err) {
    console.warn('[Contact API] Using memory store fallback:', err);
  }
  return memoryRequests;
}

function saveStoredRequests(requests: ContactRequest[]): boolean {
  memoryRequests = requests;
  try {
    const dir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(requests, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.warn('[Contact API] Failed to write to disk, using in-memory store:', err);
    return false;
  }
}

// --------------------------------------------------------------------------
// GET /api/contact -> List all contact requests (sorted newest first)
// --------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const statusFilter = searchParams.get('status');

    let list = getStoredRequests();
    if (statusFilter && ['new', 'read', 'replied', 'archived'].includes(statusFilter)) {
      list = list.filter((r) => r.status === statusFilter);
    }

    // Sort newest first
    list = [...list].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    const stats = {
      total: memoryRequests.length,
      new: memoryRequests.filter((r) => r.status === 'new').length,
      read: memoryRequests.filter((r) => r.status === 'read').length,
      replied: memoryRequests.filter((r) => r.status === 'replied').length,
      archived: memoryRequests.filter((r) => r.status === 'archived').length,
    };

    return NextResponse.json({
      success: true,
      requests: list,
      stats,
    });
  } catch (error) {
    console.error('[Contact API GET Error]:', error);
    return NextResponse.json({ error: 'Unable to retrieve contact requests' }, { status: 500 });
  }
}

// --------------------------------------------------------------------------
// POST /api/contact -> Submit new contact request
// --------------------------------------------------------------------------
export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  try {
    const { name, email, phone, subject, message } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must contain at least 10 characters.' },
        { status: 400 }
      );
    }

    const newRequest: ContactRequest = {
      id: `req-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone && typeof phone === 'string' ? phone.trim() : undefined,
      subject: subject && typeof subject === 'string' && subject.trim().length > 0 ? subject.trim() : 'General Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    const currentList = getStoredRequests();
    const updatedList = [newRequest, ...currentList];
    saveStoredRequests(updatedList);

    // Optional email dispatch integration hook
    const emailServiceApiKey = process.env.EMAIL_SERVICE_API_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'amaninamdar7775@gmail.com';

    if (emailServiceApiKey) {
      console.log(`[Contact API] Forwarding request from ${email} to ${recipientEmail}`);
    } else {
      console.log('[Contact API] New Contact Request Saved:', {
        id: newRequest.id,
        name: newRequest.name,
        email: newRequest.email,
        subject: newRequest.subject,
        timestamp: newRequest.createdAt,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Your request has been successfully submitted.',
      data: newRequest,
    });
  } catch (error) {
    console.error('[Contact API POST Error]:', error);
    return NextResponse.json(
      { error: 'Unable to send your request right now. Please try again.' },
      { status: 500 }
    );
  }
}

// --------------------------------------------------------------------------
// PATCH /api/contact -> Update request status (new | read | replied | archived)
// --------------------------------------------------------------------------
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status || !['new', 'read', 'replied', 'archived'].includes(status)) {
      return NextResponse.json({ error: 'Valid ID and status are required' }, { status: 400 });
    }

    const currentList = getStoredRequests();
    const targetIndex = currentList.findIndex((r) => r.id === id);

    if (targetIndex === -1) {
      return NextResponse.json({ error: 'Request not found' }, { status: 404 });
    }

    currentList[targetIndex].status = status;
    saveStoredRequests(currentList);

    return NextResponse.json({
      success: true,
      message: `Status updated to ${status}`,
      request: currentList[targetIndex],
    });
  } catch (error) {
    console.error('[Contact API PATCH Error]:', error);
    return NextResponse.json({ error: 'Unable to update request status' }, { status: 500 });
  }
}

// --------------------------------------------------------------------------
// DELETE /api/contact -> Remove a request by id
// --------------------------------------------------------------------------
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Request ID is required' }, { status: 400 });
    }

    const currentList = getStoredRequests();
    const filtered = currentList.filter((r) => r.id !== id);

    if (filtered.length === currentList.length) {
      return NextResponse.json({ error: 'Request not found' }, { status: 404 });
    }

    saveStoredRequests(filtered);

    return NextResponse.json({
      success: true,
      message: 'Request deleted successfully',
    });
  } catch (error) {
    console.error('[Contact API DELETE Error]:', error);
    return NextResponse.json({ error: 'Unable to delete contact request' }, { status: 500 });
  }
}
