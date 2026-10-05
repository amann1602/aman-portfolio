'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Mail,
  Search,
  RefreshCw,
  CheckCircle2,
  Trash2,
  Archive,
  Reply,
  Eye,
  X,
  Phone,
  Calendar,
  AlertCircle,
  Inbox,
  Send,
  Loader2,
  Check
} from 'lucide-react';
import { ContactRequest } from '@/app/api/contact/route';

interface Stats {
  total: number;
  new: number;
  read: number;
  replied: number;
  archived: number;
}

export default function ContactRequestsManager() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, read: 0, replied: 0, archived: 0 });
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<'all' | 'new' | 'read' | 'replied' | 'archived'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact');
      const data = await res.json();
      if (res.ok && data.success) {
        setRequests(data.requests || []);
        if (data.stats) setStats(data.stats);
      }
    } catch {
      showToast('Error loading requests');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const updateStatus = async (id: string, status: 'new' | 'read' | 'replied' | 'archived') => {
    setActionLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
        setStats(prev => {
          const current = requests.find(r => r.id === id);
          if (!current || current.status === status) return prev;
          return {
            ...prev,
            [current.status]: Math.max(0, prev[current.status] - 1),
            [status]: prev[status] + 1
          };
        });
        if (selectedRequest && selectedRequest.id === id) {
          setSelectedRequest(prev => prev ? { ...prev, status } : null);
        }
        showToast(`Request marked as ${status}.`);
      }
    } catch {
      showToast('Failed to update status.');
    } finally {
      setActionLoading(false);
    }
  };

  const deleteRequest = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact request?')) return;
    setActionLoading(true);
    try {
      const res = await fetch(`/api/contact?id=${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setRequests(prev => prev.filter(r => r.id !== id));
        if (selectedRequest?.id === id) setSelectedRequest(null);
        showToast('Request deleted successfully.');
        fetchRequests();
      }
    } catch {
      showToast('Failed to delete request.');
    } finally {
      setActionLoading(false);
    }
  };

  const openDetail = (req: ContactRequest) => {
    setSelectedRequest(req);
    // Auto mark as READ if it was NEW
    if (req.status === 'new') {
      updateStatus(req.id, 'read');
    }
  };

  // Filter & Search logic
  const filteredRequests = requests.filter(req => {
    const matchesStatus = statusFilter === 'all' || req.status === statusFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      req.name.toLowerCase().includes(query) ||
      req.email.toLowerCase().includes(query) ||
      (req.subject && req.subject.toLowerCase().includes(query)) ||
      req.message.toLowerCase().includes(query);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-xl flex items-center gap-2 text-xs font-medium border border-slate-700 animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Total Inquiries</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 block">
            {stats.total}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            New Requests
          </span>
          <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1 block">
            {stats.new}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">Read</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-slate-700 dark:text-slate-300 mt-1 block">
            {stats.read}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
          <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">Replied</span>
          <span className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mt-1 block">
            {stats.replied}
          </span>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Status Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl text-xs font-mono">
            {(['all', 'new', 'read', 'replied', 'archived'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                  statusFilter === tab
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {tab} {tab !== 'all' && `(${stats[tab] || 0})`}
              </button>
            ))}
          </div>

          {/* Search & Refresh */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, email, query..."
                className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans"
              />
            </div>

            <button
              onClick={fetchRequests}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              title="Refresh inbox"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Requests Table / Cards */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-2xs overflow-hidden">
        {loading ? (
          <div className="py-16 text-center text-slate-400 text-xs font-mono flex flex-col items-center justify-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-indigo-500" />
            <span>Loading contact inquiries...</span>
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="py-16 text-center text-slate-400 space-y-2">
            <Inbox className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700 stroke-[1.5]" />
            <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">No contact requests yet</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              New inquiries submitted through the contact form on your portfolio will be listed here.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredRequests.map((req) => {
              const isNew = req.status === 'new';
              return (
                <div
                  key={req.id}
                  onClick={() => openDetail(req)}
                  className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-850/60 ${
                    isNew ? 'bg-indigo-50/20 dark:bg-indigo-950/20' : ''
                  }`}
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    {/* Status Badge */}
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase shrink-0 mt-0.5 ${
                        req.status === 'new'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                          : req.status === 'replied'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300'
                          : req.status === 'archived'
                          ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                          : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                    >
                      {req.status}
                    </span>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white truncate">
                          {req.name}
                        </span>
                        <span className="text-xs text-slate-500 font-mono truncate hidden sm:inline">
                          &lt;{req.email}&gt;
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium truncate mt-0.5">
                        {req.subject || 'General Inquiry'}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {req.message}
                      </p>
                    </div>
                  </div>

                  {/* Date & Actions */}
                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0 text-xs font-mono text-slate-400">
                    <span>
                      {new Date(req.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openDetail(req);
                      }}
                      className="px-2.5 py-1 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/60 font-semibold"
                    >
                      View →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedRequest(null)}
          />

          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {selectedRequest.name}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {selectedRequest.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono mt-1">
                  Received on {new Date(selectedRequest.createdAt).toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => setSelectedRequest(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Info Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-mono block">Email</span>
                  <a href={`mailto:${selectedRequest.email}`} className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline truncate block">
                    {selectedRequest.email}
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 font-mono block">Phone</span>
                  {selectedRequest.phone ? (
                    <a href={`tel:${selectedRequest.phone}`} className="font-semibold text-slate-900 dark:text-white hover:underline truncate block">
                      {selectedRequest.phone}
                    </a>
                  ) : (
                    <span className="text-slate-400 italic">Not provided</span>
                  )}
                </div>
              </div>
            </div>

            {/* Subject & Full Message */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                Subject
              </span>
              <p className="text-sm font-bold text-slate-900 dark:text-white p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                {selectedRequest.subject || 'General Inquiry'}
              </p>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold pt-2">
                Message Content
              </span>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-200 leading-relaxed whitespace-pre-wrap">
                {selectedRequest.message}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => updateStatus(selectedRequest.id, 'read')}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Mark as Read
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => updateStatus(selectedRequest.id, 'replied')}
                  className="px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold hover:bg-indigo-100"
                >
                  Mark as Replied
                </button>
                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => updateStatus(selectedRequest.id, 'archived')}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500"
                >
                  Archive
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedRequest.email}?subject=Re: ${encodeURIComponent(selectedRequest.subject || 'Portfolio Inquiry')}`}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-semibold transition-colors"
                >
                  <Reply className="w-3.5 h-3.5" />
                  <span>Reply via Email</span>
                </a>

                <button
                  type="button"
                  disabled={actionLoading}
                  onClick={() => deleteRequest(selectedRequest.id)}
                  className="p-2 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                  title="Delete request"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
