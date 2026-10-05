import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const ADMIN_USER_ID = process.env.ADMIN_USER_ID || 'amaninamdar7775@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Inamdar@77';

function verifyAuth(request: NextRequest): boolean {
  const user = request.headers.get('x-admin-user');
  const token = request.headers.get('x-admin-token');
  return user === ADMIN_USER_ID && token === ADMIN_PASSWORD;
}

function getDataFilePath(section: string): { ts: string; js: string } {
  const dataDir = path.join(process.cwd(), 'src', 'data');
  return {
    ts: path.join(dataDir, `${section}.ts`),
    js: path.join(dataDir, `${section}.js`),
  };
}

// Extract parsed data from TypeScript file
function extractSectionData(section: string, content: string): any {
  try {
    switch (section) {
      case 'education': {
        const match = content.match(/export const educationList[:\s\w\[\]]*=\s*(\[[\s\S]*\]);/);
        return match ? new Function(`return ${match[1]}`)() : null;
      }
      case 'certifications': {
        const match = content.match(/export const certifications[:\s\w\[\]]*=\s*(\[[\s\S]*\]);/);
        return match ? new Function(`return ${match[1]}`)() : null;
      }
      case 'skills': {
        const match = content.match(/export const skillCategories[:\s\w\[\]]*=\s*(\[[\s\S]*\]);/);
        return match ? new Function(`return ${match[1]}`)() : null;
      }
      case 'profile': {
        const match = content.match(/export const profile[:\s\w\[\]]*=\s*(\{[\s\S]*\});\s*$/);
        return match ? new Function(`return ${match[1]}`)() : null;
      }
      case 'socials': {
        const contactMatch = content.match(/export const contactDetails\s*=\s*(\{[\s\S]*?\});/);
        const socialMatch = content.match(/export const socialLinks[:\s\w\[\]]*=\s*(\[[\s\S]*\]);/);
        return {
          contactDetails: contactMatch ? new Function(`return ${contactMatch[1]}`)() : null,
          socialLinks: socialMatch ? new Function(`return ${socialMatch[1]}`)() : null,
        };
      }
      case 'experience': {
        const match = content.match(/export const experiences[:\s\w\[\]]*=\s*(\[[\s\S]*\]);/);
        return match ? new Function(`return ${match[1]}`)() : null;
      }
      case 'publications': {
        const headingMatch = content.match(/export const publicationHeading\s*=\s*(\{[\s\S]*?\});/);
        const pubMatch = content.match(/export const publications[:\s\w\[\]]*=\s*(\[[\s\S]*\]);/);
        return {
          heading: headingMatch ? new Function(`return ${headingMatch[1]}`)() : null,
          publications: pubMatch ? new Function(`return ${pubMatch[1]}`)() : null,
        };
      }
      case 'achievements': {
        const match = content.match(/export const achievements[:\s\w\[\]]*=\s*(\[[\s\S]*\]);/);
        return match ? new Function(`return ${match[1]}`)() : null;
      }
      case 'projects': {
        const projMatch = content.match(/export const projects[:\s\w\[\]]*=\s*(\[[\s\S]*\]);[\s\S]*export const projectFilterTabs/);
        const tabsMatch = content.match(/export const projectFilterTabs\s*=\s*(\[[\s\S]*\]);/);
        return {
          projects: projMatch ? new Function(`return ${projMatch[1]}`)() : null,
          filterTabs: tabsMatch ? new Function(`return ${tabsMatch[1]}`)() : null,
        };
      }
      default:
        return null;
    }
  } catch (err) {
    console.error(`Error parsing ${section}:`, err);
    return null;
  }
}

// Generate valid TypeScript from visual form data
function generateTypeScript(section: string, data: any, originalContent: string): string {
  switch (section) {
    case 'education':
      return `export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  grade: string;
  gradeLabel: string;
  location: string;
  isCurrent: boolean;
}

export const educationList: EducationItem[] = ${JSON.stringify(data, null, 2)};
`;

    case 'certifications':
      return `export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year?: string;
  domain: string;
  url: string | null;
}

export const certifications: Certification[] = ${JSON.stringify(data, null, 2)};
`;

    case 'skills':
      return `export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = ${JSON.stringify(data, null, 2)};
`;

    case 'profile':
      return `export interface ProfileInfo {
  fullName: string;
  shortName: string;
  role: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  rotatingTitles: string[];
  aboutBio: string[];
  education: {
    degree: string;
    field: string;
    university: string;
    duration: string;
    cgpa: string;
    location: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  focusAreas: {
    id: string;
    title: string;
    description: string;
    icon: string;
    tags: string[];
  }[];
}

export const profile: ProfileInfo = ${JSON.stringify(data, null, 2)};
`;

    case 'socials':
      return `export interface SocialLink {
  id: string;
  name: string;
  username: string;
  url: string;
  isPlaceholder: boolean;
  icon: string;
}

export const contactDetails = ${JSON.stringify(data.contactDetails || data, null, 2)};

export const socialLinks: SocialLink[] = ${JSON.stringify(data.socialLinks || [], null, 2)};
`;

    case 'experience':
      return `export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = ${JSON.stringify(data, null, 2)};
`;

    case 'publications':
      return `export interface Publication {
  id: string;
  number: string;
  title: string;
  year: string;
  description: string;
  topics: string[];
  url: string | null;
}

export const publicationHeading = ${JSON.stringify(
  data.heading || {
    title: "Research & Publications",
    intro: "Exploring AI, IoT, predictive analytics and intelligent technology systems through research-oriented work."
  },
  null,
  2
)};

export const publications: Publication[] = ${JSON.stringify(data.publications || data, null, 2)};
`;

    case 'achievements':
      return `export interface Achievement {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  details?: string[];
  icon: string;
}

export const achievements: Achievement[] = ${JSON.stringify(data, null, 2)};
`;

    case 'projects':
      if (data && data.projects) {
        return `export interface ProjectDetailSection {
  title: string;
  content: string;
  points?: string[];
  placeholderNote?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  filterCategories: string[];
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  isLive: boolean;
  image?: string;
  sections: Record<string, ProjectDetailSection>;
}

export const projects: Project[] = ${JSON.stringify(data.projects, null, 2)};

export const projectFilterTabs = ${JSON.stringify(
  data.filterTabs || [
    { id: "all", label: "All Projects" },
    { id: "ai-ml", label: "AI / ML" },
    { id: "analytics", label: "Analytics" },
    { id: "software", label: "Software" },
    { id: "research", label: "Research" }
  ],
  null,
  2
)};
`;
      }
      return originalContent;

    default:
      return originalContent;
  }
}

// Generate companion JS content
function generateCompanionJs(section: string, tsContent: string): string {
  // Strip TypeScript interfaces and type annotations
  let js = tsContent
    .replace(/export interface[\s\S]*?\n}\n/g, '')
    .replace(/:\s*[A-Z]\w*(\[\])?/g, '');
  return js;
}

// GET - Read a section file and parsed data
export async function GET(request: NextRequest) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized. Invalid User ID or Password.' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section');

  if (!section) {
    return NextResponse.json({ error: 'Section parameter required' }, { status: 400 });
  }

  const { ts } = getDataFilePath(section);
  if (!fs.existsSync(ts)) {
    return NextResponse.json({ error: `Section ${section} not found` }, { status: 404 });
  }

  const rawContent = fs.readFileSync(ts, 'utf-8');
  const parsedData = extractSectionData(section, rawContent);

  return NextResponse.json({
    section,
    raw: rawContent,
    data: parsedData,
    success: true,
  });
}

// POST - Update a section file (from visual form or code editor) or handle login
export async function POST(request: NextRequest) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  // Handle Login Check Action
  if (body.action === 'login') {
    const { userId, password } = body;
    if (userId === ADMIN_USER_ID && password === ADMIN_PASSWORD) {
      return NextResponse.json({
        success: true,
        message: 'Authentication successful',
        user: ADMIN_USER_ID,
      });
    }
    return NextResponse.json(
      { error: 'Invalid user ID or password. Please verify your credentials.' },
      { status: 401 }
    );
  }

  // Verify auth for data updates
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized. Invalid User ID or Password.' }, { status: 401 });
  }

  const { section, data, content } = body;

  if (!section) {
    return NextResponse.json({ error: 'Section identifier required' }, { status: 400 });
  }

  const { ts, js } = getDataFilePath(section);
  if (!fs.existsSync(ts)) {
    return NextResponse.json({ error: `Section file not found for ${section}` }, { status: 404 });
  }

  const originalContent = fs.readFileSync(ts, 'utf-8');

  // Determine final TypeScript content: either direct raw content or generated from visual data
  let finalTsContent: string;
  if (content !== undefined && typeof content === 'string') {
    finalTsContent = content;
  } else if (data !== undefined) {
    finalTsContent = generateTypeScript(section, data, originalContent);
  } else {
    return NextResponse.json({ error: 'Either visual data or raw content required' }, { status: 400 });
  }

  // Create timestamped backup of previous file
  try {
    const backupDir = path.join(process.cwd(), 'src', 'data', '.backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    const backupPath = path.join(backupDir, `${section}.${Date.now()}.backup.ts`);
    fs.copyFileSync(ts, backupPath);
  } catch (backupErr) {
    console.warn('Backup creation failed:', backupErr);
  }

  // Write new TypeScript file
  fs.writeFileSync(ts, finalTsContent, 'utf-8');

  // Also sync companion JS file if it exists
  try {
    if (fs.existsSync(js)) {
      const jsContent = generateCompanionJs(section, finalTsContent);
      fs.writeFileSync(js, jsContent, 'utf-8');
    }
  } catch (jsErr) {
    console.warn('JS sync warning:', jsErr);
  }

  // Return updated parsed data and raw content
  const updatedParsed = extractSectionData(section, finalTsContent);

  return NextResponse.json({
    success: true,
    message: `${section.charAt(0).toUpperCase() + section.slice(1)} updated successfully! Portfolio live site hot-reloaded.`,
    data: updatedParsed,
    raw: finalTsContent,
  });
}
