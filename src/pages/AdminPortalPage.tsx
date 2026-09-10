import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import {
  getStoredEnquiries,
  subscribeToEnquiries,
  updateEnquiryStatus,
  updateEnquiryNotes,
  deleteEnquiry,
  resetEnquiriesToDefault,
  exportEnquiriesToCSV,
  isAdminAuthenticated,
  loginAdmin,
  logoutAdmin,
  ADMIN_CREDENTIALS,
} from '../data/enquiriesStore';
import { EnquiryRecord, EnquiryStatus } from '../types';
import { SeoMeta } from '../components/SeoMeta';
import {
  ShieldAlert,
  Lock,
  Mail,
  KeyRound,
  Eye,
  EyeOff,
  LogOut,
  Download,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  MessageSquare,
  Building2,
  Phone,
  Calendar,
  Trash2,
  RefreshCw,
  FileText,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
  UserCheck,
  X,
  Copy,
  Check,
} from 'lucide-react';

export const AdminPortalPage: React.FC = () => {
  const { navigate } = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);

  // Enquiries list state
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | EnquiryStatus>('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [notesSavedSuccess, setNotesSavedSuccess] = useState(false);
  const [copiedEnquiryId, setCopiedEnquiryId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [isFirestoreSynced, setIsFirestoreSynced] = useState<boolean>(true);

  // Check auth on mount and connect real-time Firebase listener
  useEffect(() => {
    const authStatus = isAdminAuthenticated();
    setIsAuthenticated(authStatus);
    setIsLoadingAuth(false);

    if (authStatus) {
      // Subscribe to real-time Firebase Firestore updates
      const unsubscribe = subscribeToEnquiries(
        (records) => {
          setEnquiries(records);
          setIsFirestoreSynced(true);
        },
        () => {
          setIsFirestoreSynced(false);
        }
      );
      return () => unsubscribe();
    }
  }, [isAuthenticated]);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoginError('');
    setIsSubmittingLogin(true);

    setTimeout(() => {
      const success = loginAdmin(loginEmail, loginPassword);
      if (success) {
        setIsAuthenticated(true);
        setEnquiries(getStoredEnquiries());
        setLoginError('');
      } else {
        setLoginError('Invalid administrative credentials. Use admin@xyz.com / admin123 or click Quick Login.');
      }
      setIsSubmittingLogin(false);
    }, 400);
  };

  const handleQuickLogin = () => {
    setLoginEmail(ADMIN_CREDENTIALS.email);
    setLoginPassword(ADMIN_CREDENTIALS.password);
    const success = loginAdmin(ADMIN_CREDENTIALS.email, ADMIN_CREDENTIALS.password);
    if (success) {
      setIsAuthenticated(true);
      setEnquiries(getStoredEnquiries());
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setIsAuthenticated(false);
    setSelectedEnquiry(null);
  };

  const handleStatusChange = (id: string, newStatus: EnquiryStatus) => {
    const updated = updateEnquiryStatus(id, newStatus);
    setEnquiries(updated);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
  };

  const handleSaveNotes = (id: string) => {
    const updated = updateEnquiryNotes(id, editingNotes);
    setEnquiries(updated);
    if (selectedEnquiry) {
      setSelectedEnquiry({ ...selectedEnquiry, notes: editingNotes });
    }
    setNotesSavedSuccess(true);
    setTimeout(() => setNotesSavedSuccess(false), 2000);
  };

  const handleDeleteEnquiry = (id: string) => {
    const updated = deleteEnquiry(id);
    setEnquiries(updated);
    setDeleteConfirmId(null);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry(null);
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all enquiries to default seed records?')) {
      const reset = resetEnquiriesToDefault();
      setEnquiries(reset);
      setSelectedEnquiry(null);
    }
  };

  const handleCopyClientDetails = (item: EnquiryRecord) => {
    const text = `Enquiry Ref: ${item.id}
Client: ${item.firstName} ${item.lastName}
Company: ${item.company || 'N/A'}
Email: ${item.email}
Phone: ${item.phone}
Service: ${item.serviceRequired}
Date: ${new Date(item.createdAt).toLocaleString()}
Requirements:
${item.message}`;
    navigator.clipboard.writeText(text);
    setCopiedEnquiryId(item.id);
    setTimeout(() => setCopiedEnquiryId(null), 2000);
  };

  // Filtered and sorted enquiries
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.id.toLowerCase().includes(q) ||
        `${item.firstName} ${item.lastName}`.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        item.phone.toLowerCase().includes(q) ||
        (item.company && item.company.toLowerCase().includes(q)) ||
        item.serviceRequired.toLowerCase().includes(q) ||
        (item.message && item.message.toLowerCase().includes(q));

      return matchesStatus && matchesSearch;
    });
  }, [enquiries, statusFilter, searchQuery]);

  // Status counts for badges
  const counts = useMemo(() => {
    return {
      all: enquiries.length,
      new: enquiries.filter((e) => e.status === 'new').length,
      'in-progress': enquiries.filter((e) => e.status === 'in-progress').length,
      contacted: enquiries.filter((e) => e.status === 'contacted').length,
      closed: enquiries.filter((e) => e.status === 'closed').length,
    };
  }, [enquiries]);

  if (isLoadingAuth) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-charcoal-950">
        <div className="flex items-center space-x-3 text-gold-400">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span className="font-mono text-sm tracking-widest uppercase">Verifying Security Credentials...</span>
        </div>
      </div>
    );
  }

  // LOGIN SCREEN (If not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] bg-charcoal-950 text-charcoal-100 flex items-center justify-center px-4 py-16">
        <SeoMeta
          title="Admin Portal Login | XYZ IP Services"
          description="Authorized administrative access for XYZ IP Services client enquiry management."
          canonical="/admin"
        />

        <div className="w-full max-w-md">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-gold-500/5">
              <Lock className="w-7 h-7 text-gold-500" />
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-mono uppercase tracking-widest mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Restricted Access</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Administrative Portal
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-400 mt-1">
              Sign in to view, manage, and dispatch client patent & legal enquiries.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Quick Demo Credentials Tip */}
            <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-gold-400 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  <span>Administrative Access</span>
                </div>
                <div className="text-charcoal-300 font-mono text-[11px] mt-0.5">
                  admin@xyz.com / admin123
                </div>
              </div>
              <button
                type="button"
                onClick={handleQuickLogin}
                className="px-3 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold uppercase tracking-wider text-[10px] transition-colors shadow-sm"
              >
                Quick Login
              </button>
            </div>

            {loginError && (
              <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800 text-red-300 text-xs flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-300 mb-1.5">
                  Admin Email / ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-charcoal-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="admin@xyz.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-charcoal-600 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-charcoal-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-charcoal-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-charcoal-600 text-sm focus:outline-none focus:border-gold-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal-500 hover:text-charcoal-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmittingLogin}
                className="w-full py-3.5 rounded-xl bg-gold-500 hover:bg-gold-600 disabled:opacity-50 text-charcoal-950 font-bold uppercase tracking-[0.15em] text-xs transition-all shadow-lg shadow-gold-500/20 flex items-center justify-center space-x-2"
              >
                {isSubmittingLogin ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying Access...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Authenticate & Enter Portal</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-4 border-t border-white/10 text-center">
              <button
                onClick={() => navigate('/')}
                className="text-xs text-charcoal-400 hover:text-gold-400 transition-colors"
              >
                Return to Public Website
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-charcoal-950 text-charcoal-100 py-8 px-4 sm:px-6 lg:px-8">
      <SeoMeta
        title="Enquiry Management Portal | XYZ IP Services Admin"
        description="Administrative panel for reviewing client consultation requests and IP patent enquiries."
        canonical="/admin"
      />

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Header Bar */}
        <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-gold-500" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  IP Inquiries & Consultation Operations
                </h1>
                <span className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase font-bold">
                  <span className={`w-1.5 h-1.5 rounded-full ${isFirestoreSynced ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span>{isFirestoreSynced ? 'Cloud Synced (Firebase)' : 'Local Cache Mode'}</span>
                </span>
              </div>
              <p className="text-xs text-charcoal-400 mt-0.5">
                Logged in as <span className="text-gold-400 font-semibold">{ADMIN_CREDENTIALS.displayName}</span> ({ADMIN_CREDENTIALS.email})
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={exportEnquiriesToCSV}
              className="px-3.5 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-200 border border-white/10 text-xs font-semibold flex items-center space-x-2 transition-colors"
              title="Download all enquiries in CSV spreadsheet"
            >
              <Download className="w-3.5 h-3.5 text-gold-400" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={handleResetDefaults}
              className="px-3 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-400 hover:text-charcoal-200 border border-white/10 text-xs font-semibold flex items-center space-x-1.5 transition-colors"
              title="Reload initial seed enquiries"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Seed</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-300 border border-red-800/60 text-xs font-semibold flex items-center space-x-2 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Metrics Counter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          <button
            onClick={() => setStatusFilter('all')}
            className={`p-4 rounded-xl border text-left transition-all ${
              statusFilter === 'all'
                ? 'bg-charcoal-900 border-gold-500 shadow-md shadow-gold-500/10'
                : 'bg-charcoal-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="text-[11px] font-mono text-charcoal-400 uppercase tracking-wider">Total Enquiries</div>
            <div className="text-2xl font-serif font-bold text-white mt-1">{counts.all}</div>
          </button>

          <button
            onClick={() => setStatusFilter('new')}
            className={`p-4 rounded-xl border text-left transition-all ${
              statusFilter === 'new'
                ? 'bg-amber-950/40 border-amber-500 shadow-md shadow-amber-500/10'
                : 'bg-charcoal-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider flex items-center justify-between">
              <span>New / Unread</span>
              {counts.new > 0 && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
            </div>
            <div className="text-2xl font-serif font-bold text-amber-300 mt-1">{counts.new}</div>
          </button>

          <button
            onClick={() => setStatusFilter('in-progress')}
            className={`p-4 rounded-xl border text-left transition-all ${
              statusFilter === 'in-progress'
                ? 'bg-blue-950/40 border-blue-500 shadow-md shadow-blue-500/10'
                : 'bg-charcoal-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">In Progress</div>
            <div className="text-2xl font-serif font-bold text-blue-300 mt-1">{counts['in-progress']}</div>
          </button>

          <button
            onClick={() => setStatusFilter('contacted')}
            className={`p-4 rounded-xl border text-left transition-all ${
              statusFilter === 'contacted'
                ? 'bg-purple-950/40 border-purple-500 shadow-md shadow-purple-500/10'
                : 'bg-charcoal-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">Contacted</div>
            <div className="text-2xl font-serif font-bold text-purple-300 mt-1">{counts.contacted}</div>
          </button>

          <button
            onClick={() => setStatusFilter('closed')}
            className={`p-4 rounded-xl border text-left transition-all ${
              statusFilter === 'closed'
                ? 'bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-500/10'
                : 'bg-charcoal-900/60 border-white/10 hover:border-white/20'
            }`}
          >
            <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Closed / Retained</div>
            <div className="text-2xl font-serif font-bold text-emerald-300 mt-1">{counts.closed}</div>
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-charcoal-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by client, company, email, service or ID..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-charcoal-500 text-xs focus:outline-none focus:border-gold-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Quick status tabs */}
          <div className="flex items-center space-x-1 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {(['all', 'new', 'in-progress', 'contacted', 'closed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors ${
                  statusFilter === status
                    ? 'bg-gold-500 text-charcoal-950 font-bold'
                    : 'text-charcoal-400 hover:text-white hover:bg-charcoal-800'
                }`}
              >
                {status === 'all' ? 'All' : status.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Enquiries Grid / Cards */}
        {filteredEnquiries.length === 0 ? (
          <div className="bg-charcoal-900 border border-white/10 rounded-2xl p-12 text-center space-y-3">
            <MessageSquare className="w-10 h-10 text-charcoal-600 mx-auto" />
            <h3 className="text-base font-serif font-bold text-white">No enquiries match your filter</h3>
            <p className="text-xs text-charcoal-400 max-w-sm mx-auto">
              Try adjusting your search terms or clearing the status filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setStatusFilter('all');
              }}
              className="px-4 py-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-gold-400 text-xs font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredEnquiries.map((item) => {
              const statusColors: Record<EnquiryStatus, { bg: string; text: string; border: string }> = {
                new: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
                'in-progress': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
                contacted: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
                closed: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30' },
              };
              const color = statusColors[item.status] || statusColors.new;

              return (
                <div
                  key={item.id}
                  className="bg-charcoal-900 border border-white/10 hover:border-gold-500/40 rounded-2xl p-5 transition-all space-y-4 shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-white/5 pb-4">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                      <span className="font-mono text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded border border-gold-500/20">
                        #{item.id}
                      </span>
                      <h3 className="text-base font-serif font-bold text-white">
                        {item.firstName} {item.lastName}
                      </h3>
                      {item.company && (
                        <span className="flex items-center space-x-1 text-xs text-charcoal-400 bg-charcoal-950 px-2.5 py-1 rounded border border-white/5">
                          <Building2 className="w-3 h-3 text-charcoal-500" />
                          <span>{item.company}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-3">
                      <span className="text-[11px] font-mono text-charcoal-400 flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-charcoal-500" />
                        <span>{new Date(item.createdAt).toLocaleDateString()} at {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </span>

                      {/* Interactive Status Selector */}
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value as EnquiryStatus)}
                        className={`text-xs font-mono uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg border focus:outline-none cursor-pointer ${color.bg} ${color.text} ${color.border}`}
                      >
                        <option value="new" className="bg-charcoal-950 text-amber-400">NEW</option>
                        <option value="in-progress" className="bg-charcoal-950 text-blue-400">IN PROGRESS</option>
                        <option value="contacted" className="bg-charcoal-950 text-purple-400">CONTACTED</option>
                        <option value="closed" className="bg-charcoal-950 text-emerald-400">CLOSED</option>
                      </select>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-4 space-y-2 text-xs">
                      <div>
                        <span className="text-charcoal-500 font-mono text-[10px] uppercase block">Practice Area</span>
                        <span className="text-gold-300 font-semibold">{item.serviceRequired}</span>
                      </div>

                      <div className="space-y-1 pt-1">
                        <div className="flex items-center space-x-2 text-charcoal-300">
                          <Mail className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                          <a href={`mailto:${item.email}`} className="hover:text-gold-400 underline decoration-dotted truncate">
                            {item.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2 text-charcoal-300">
                          <Phone className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                          <a href={`tel:${item.phone}`} className="hover:text-gold-400 font-mono">
                            {item.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-8 bg-charcoal-950/70 border border-white/5 rounded-xl p-3.5 space-y-2">
                      <span className="text-charcoal-500 font-mono text-[10px] uppercase block">
                        Technical Scope / Requirements
                      </span>
                      <p className="text-xs text-charcoal-300 line-clamp-2 leading-relaxed">
                        {item.message}
                      </p>
                      {item.notes && (
                        <div className="pt-2 border-t border-white/5 text-[11px] text-amber-300/90 font-mono flex items-start space-x-1.5">
                          <span className="text-amber-500 font-bold uppercase tracking-wider flex-shrink-0">Internal Note:</span>
                          <span className="truncate">{item.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-xs">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedEnquiry(item);
                          setEditingNotes(item.notes || '');
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View Full Record & Notes</span>
                      </button>

                      <button
                        onClick={() => handleCopyClientDetails(item)}
                        className="px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-300 text-xs flex items-center space-x-1 transition-colors"
                        title="Copy client info to clipboard"
                      >
                        {copiedEnquiryId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-charcoal-400" />
                            <span>Copy Details</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center space-x-2">
                      {deleteConfirmId === item.id ? (
                        <div className="flex items-center space-x-1.5">
                          <span className="text-[11px] text-red-400 font-mono">Confirm?</span>
                          <button
                            onClick={() => handleDeleteEnquiry(item.id)}
                            className="px-2.5 py-1 rounded bg-red-600 text-white font-bold text-[11px]"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(null)}
                            className="px-2.5 py-1 rounded bg-charcoal-800 text-charcoal-400 text-[11px]"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirmId(item.id)}
                          className="p-1.5 text-charcoal-500 hover:text-red-400 transition-colors"
                          title="Delete enquiry record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FULL ENQUIRY DETAIL MODAL */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-charcoal-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative text-left">
            <button
              onClick={() => setSelectedEnquiry(null)}
              className="absolute right-4 top-4 text-charcoal-400 hover:text-white p-1 rounded-lg bg-charcoal-950 border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded border border-gold-500/20">
                  #{selectedEnquiry.id}
                </span>
                <span className="text-xs font-mono text-charcoal-400">
                  {new Date(selectedEnquiry.createdAt).toLocaleString()}
                </span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mt-2">
                {selectedEnquiry.firstName} {selectedEnquiry.lastName}
              </h2>
              {selectedEnquiry.company && (
                <p className="text-sm text-gold-400 font-medium mt-0.5">
                  {selectedEnquiry.company}
                </p>
              )}
            </div>

            {/* Client Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-charcoal-950 border border-white/10 text-xs">
              <div>
                <span className="text-charcoal-500 font-mono text-[10px] uppercase block">Email Address</span>
                <a href={`mailto:${selectedEnquiry.email}`} className="text-gold-300 font-semibold hover:underline block mt-0.5">
                  {selectedEnquiry.email}
                </a>
              </div>
              <div>
                <span className="text-charcoal-500 font-mono text-[10px] uppercase block">Direct Contact Phone</span>
                <a href={`tel:${selectedEnquiry.phone}`} className="text-gold-300 font-mono font-semibold hover:underline block mt-0.5">
                  {selectedEnquiry.phone}
                </a>
              </div>
              <div>
                <span className="text-charcoal-500 font-mono text-[10px] uppercase block">Target Practice Area</span>
                <span className="text-white font-semibold block mt-0.5">{selectedEnquiry.serviceRequired}</span>
              </div>
              <div>
                <span className="text-charcoal-500 font-mono text-[10px] uppercase block">Engagement Status</span>
                <select
                  value={selectedEnquiry.status}
                  onChange={(e) => handleStatusChange(selectedEnquiry.id, e.target.value as EnquiryStatus)}
                  className="mt-1 text-xs font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded bg-charcoal-900 border border-white/20 text-gold-400 focus:outline-none"
                >
                  <option value="new">NEW</option>
                  <option value="in-progress">IN PROGRESS</option>
                  <option value="contacted">CONTACTED</option>
                  <option value="closed">CLOSED</option>
                </select>
              </div>
            </div>

            {/* Message / Technical Requirements */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-wider font-bold block">
                Technical Disclosure & Scope Request:
              </span>
              <div className="p-4 rounded-xl bg-charcoal-950 border border-white/5 text-charcoal-200 text-sm leading-relaxed whitespace-pre-line">
                {selectedEnquiry.message}
              </div>
            </div>

            {/* Internal Notes Editor */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-charcoal-300 uppercase tracking-wider font-bold">
                  Internal Case Notes (Admin & Analyst Team):
                </span>
                {notesSavedSuccess && (
                  <span className="text-xs text-emerald-400 font-mono flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved</span>
                  </span>
                )}
              </div>
              <textarea
                rows={3}
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                placeholder="Add confidential notes on patentability, scheduled call times, assigned attorney..."
                className="w-full p-3 rounded-xl bg-charcoal-950 border border-white/10 text-white placeholder-charcoal-600 text-xs focus:outline-none focus:border-gold-500"
              />
              <button
                onClick={() => handleSaveNotes(selectedEnquiry.id)}
                className="px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-600 text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Save Internal Notes
              </button>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => handleCopyClientDetails(selectedEnquiry)}
                className="px-4 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-charcoal-300 text-xs font-semibold flex items-center space-x-2"
              >
                <Copy className="w-4 h-4 text-gold-400" />
                <span>Copy Summary</span>
              </button>

              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
