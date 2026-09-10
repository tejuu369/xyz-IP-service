import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { Logo } from './Logo';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Shield,
  Search,
  BarChart3,
  FileCheck2,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentPath, navigate, openConsultationModal } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 15);

      if (mobileMenuOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 15) {
        // At the very top - always visible
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 30) {
        // Scrolling down - disappear
        setIsVisible(false);
        setOpenDropdown(null);
      } else if (currentScrollY < lastScrollY.current - 4) {
        // Scrolling up - reappear
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [currentPath]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <div
      className={`sticky top-0 z-40 w-full transition-all duration-300 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 text-xs text-slate-400 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-slate-300 font-medium">Global Patent & IP Support</span>
            </span>
            <span className="text-slate-600">|</span>
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="tel:12345678790"
              className="flex items-center space-x-1 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-500" />
              <span className="font-mono">12345678790</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:info@xyz.com"
              className="hover:text-blue-400 transition-colors font-mono"
            >
              info@xyz.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800/90 shadow-xl shadow-slate-950/40'
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              id="navbar-logo-btn"
              onClick={() => navigate('/')}
              className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {/* Home */}
              <button
                onClick={() => navigate('/')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === '/'
                    ? 'text-blue-400 font-semibold bg-blue-950/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                Home
              </button>

              {/* About Us */}
              <button
                onClick={() => navigate('/about-us')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === '/about-us'
                    ? 'text-blue-400 font-semibold bg-blue-950/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                About Us
              </button>

              {/* IP Services Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => navigate('/ip-services')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPath.startsWith('/patent') || currentPath === '/ip-services' || currentPath === '/trademarks' || currentPath === '/copyrights'
                      ? 'text-blue-400 font-semibold bg-blue-950/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <span>IP Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                </button>

                {openDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-[580px] mt-1 p-4 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Left: Patents Sub-Services */}
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 px-2.5 py-1.5 text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800/80 mb-1">
                          <Shield className="w-3.5 h-3.5" />
                          <span>Patents</span>
                        </div>
                        <button
                          onClick={() => navigate('/patent-filing')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Filing</div>
                          <div className="text-[11px] text-slate-400 leading-tight">Provisional, complete & PCT national phase</div>
                        </button>
                        <button
                          onClick={() => navigate('/patent-drafting')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Drafting</div>
                          <div className="text-[11px] text-slate-400 leading-tight">Claim-level precision and techno-legal drafting</div>
                        </button>
                        <button
                          onClick={() => navigate('/patent-illustrations')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Illustrations</div>
                          <div className="text-[11px] text-slate-400 leading-tight">USPTO, EPO & IPO compliant formal drawings</div>
                        </button>
                        <button
                          onClick={() => navigate('/design-patent')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Design Patent</div>
                          <div className="text-[11px] text-slate-400 leading-tight">Industrial design filings & visual aesthetics</div>
                        </button>
                        <button
                          onClick={() => navigate('/patent-prosecution')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Prosecution</div>
                          <div className="text-[11px] text-slate-400 leading-tight">Examination handling & controller hearings</div>
                        </button>
                        <button
                          onClick={() => navigate('/office-action-response')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-900/90 transition-colors group"
                        >
                          <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Office Action Response</div>
                          <div className="text-[11px] text-slate-400 leading-tight">FER & global OA rebuttal arguments</div>
                        </button>
                      </div>

                      {/* Right: Trademarks & Copyrights + All Services Overview */}
                      <div className="space-y-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800/60 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="text-xs font-bold text-slate-300 tracking-wider uppercase px-1">
                            Additional Rights
                          </div>
                          <button
                            onClick={() => navigate('/trademarks')}
                            className="w-full text-left p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-colors group"
                          >
                            <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Trademarks</div>
                            <div className="text-[11px] text-slate-400">Brand clearance searches, registration & opposition</div>
                          </button>
                          <button
                            onClick={() => navigate('/copyrights')}
                            className="w-full text-left p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-colors group"
                          >
                            <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Copyrights</div>
                            <div className="text-[11px] text-slate-400">Software source code & corporate asset protection</div>
                          </button>
                        </div>

                        <button
                          onClick={() => navigate('/ip-services')}
                          className="w-full flex items-center justify-between p-2 rounded-lg bg-blue-950/50 hover:bg-blue-900/50 border border-blue-800/60 text-xs font-semibold text-blue-300 transition-colors"
                        >
                          <span>Explore All IP Services</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Searches Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('searches')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => navigate('/searches')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPath === '/searches' ||
                    currentPath === '/patentability-prior-art-search' ||
                    currentPath === '/patent-invalidation' ||
                    currentPath === '/freedom-to-operate'
                      ? 'text-blue-400 font-semibold bg-blue-950/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <span>Searches</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'searches' ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                </button>

                {openDropdown === 'searches' && (
                  <div className="absolute top-full left-0 w-80 mt-1 p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center space-x-2 px-2 py-1 text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800/80 mb-2">
                      <Search className="w-3.5 h-3.5" />
                      <span>Patent Searches</span>
                    </div>
                    <div className="space-y-1">
                      <button
                        onClick={() => navigate('/patentability-prior-art-search')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patentability / Prior Art Search</div>
                        <div className="text-[11px] text-slate-400">Novelty & inventive step assessment</div>
                      </button>
                      <button
                        onClick={() => navigate('/patent-invalidation')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Invalidation</div>
                        <div className="text-[11px] text-slate-400">Prior art retrieval & 102/103 claim charts</div>
                      </button>
                      <button
                        onClick={() => navigate('/freedom-to-operate')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Freedom to Operate (FTO)</div>
                        <div className="text-[11px] text-slate-400">Product-to-patent clearance & risk review</div>
                      </button>
                    </div>
                    <div className="pt-2 mt-2 border-t border-slate-800/70">
                      <button
                        onClick={() => navigate('/searches')}
                        className="w-full text-left text-[11px] font-medium text-blue-400 hover:underline px-2 py-1 flex items-center justify-between"
                      >
                        <span>View All Search Methodologies</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Business Intelligence Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('bi')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => navigate('/business-intelligence')}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPath === '/business-intelligence' ||
                    currentPath === '/landscape-white-space-analysis' ||
                    currentPath === '/infringement-claim-chart-analysis' ||
                    currentPath === '/patent-portfolio-analysis' ||
                    currentPath === '/patent-licensing' ||
                    currentPath === '/patent-monetization' ||
                    currentPath === '/patent-watch'
                      ? 'text-blue-400 font-semibold bg-blue-950/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
                >
                  <span>Business Intelligence</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'bi' ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                </button>

                {openDropdown === 'bi' && (
                  <div className="absolute top-full right-0 w-[420px] mt-1 p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center space-x-2 px-2 py-1 text-xs font-bold text-blue-400 tracking-wider uppercase border-b border-slate-800/80 mb-2">
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>IP Analytics & Monetization</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      <button
                        onClick={() => navigate('/landscape-white-space-analysis')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Landscape Study & White Space Analysis</div>
                        <div className="text-[11px] text-slate-400">Technology mapping and unexploited innovation gaps</div>
                      </button>
                      <button
                        onClick={() => navigate('/infringement-claim-chart-analysis')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Infringement / Claim Chart Analysis</div>
                        <div className="text-[11px] text-slate-400">Element-by-element product evidence mapping</div>
                      </button>
                      <button
                        onClick={() => navigate('/patent-portfolio-analysis')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Portfolio Analysis</div>
                        <div className="text-[11px] text-slate-400">Scoring, clustering, and annuity optimization</div>
                      </button>
                      <button
                        onClick={() => navigate('/patent-licensing')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Licensing</div>
                        <div className="text-[11px] text-slate-400">Target licensee discovery and pitch packages</div>
                      </button>
                      <button
                        onClick={() => navigate('/patent-monetization')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Monetization</div>
                        <div className="text-[11px] text-slate-400">Commercial valuation and transfer readiness</div>
                      </button>
                      <button
                        onClick={() => navigate('/patent-watch')}
                        className="w-full text-left p-2 rounded-lg hover:bg-slate-900 transition-colors group"
                      >
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">Patent Watch</div>
                        <div className="text-[11px] text-slate-400">Competitor monitoring & weekly gazette alerts</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Career */}
              <button
                onClick={() => navigate('/career')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === '/career'
                    ? 'text-blue-400 font-semibold bg-blue-950/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                Career
              </button>

              {/* Contact */}
              <button
                onClick={() => navigate('/contact')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPath === '/contact'
                    ? 'text-blue-400 font-semibold bg-blue-950/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Desktop Consultation CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                id="book-consultation-nav-btn"
                onClick={() => openConsultationModal()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wide uppercase transition-all duration-200 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 border border-blue-400/30"
              >
                <FileCheck2 className="w-4 h-4 mr-2" />
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={() => openConsultationModal()}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold tracking-wide"
              >
                Consult
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-800 bg-slate-950 max-h-[85vh] overflow-y-auto px-4 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => navigate('/')}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/about-us')}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                About Us
              </button>

              {/* IP Services Accordion */}
              <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/30">
                <button
                  onClick={() =>
                    setMobileExpandedSection(
                      mobileExpandedSection === 'services' ? null : 'services'
                    )
                  }
                  className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-blue-400"
                >
                  <span>IP Services & Patents</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpandedSection === 'services' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'services' && (
                  <div className="p-2 space-y-1 bg-slate-950/60 border-t border-slate-800 text-xs">
                    <button onClick={() => navigate('/ip-services')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-blue-300 font-medium">Overview of IP Services</button>
                    <button onClick={() => navigate('/patent-filing')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Filing</button>
                    <button onClick={() => navigate('/patent-drafting')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Drafting</button>
                    <button onClick={() => navigate('/patent-illustrations')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Illustrations</button>
                    <button onClick={() => navigate('/design-patent')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Design Patent</button>
                    <button onClick={() => navigate('/patent-prosecution')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Prosecution</button>
                    <button onClick={() => navigate('/office-action-response')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Office Action Response</button>
                    <button onClick={() => navigate('/trademarks')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Trademarks</button>
                    <button onClick={() => navigate('/copyrights')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Copyrights</button>
                  </div>
                )}
              </div>

              {/* Searches Accordion */}
              <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/30">
                <button
                  onClick={() =>
                    setMobileExpandedSection(
                      mobileExpandedSection === 'searches' ? null : 'searches'
                    )
                  }
                  className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-blue-400"
                >
                  <span>Patent Searches</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpandedSection === 'searches' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'searches' && (
                  <div className="p-2 space-y-1 bg-slate-950/60 border-t border-slate-800 text-xs">
                    <button onClick={() => navigate('/searches')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-blue-300 font-medium">All Search Services</button>
                    <button onClick={() => navigate('/patentability-prior-art-search')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patentability / Prior Art Search</button>
                    <button onClick={() => navigate('/patent-invalidation')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Invalidation</button>
                    <button onClick={() => navigate('/freedom-to-operate')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Freedom to Operate (FTO)</button>
                  </div>
                )}
              </div>

              {/* Business Intelligence Accordion */}
              <div className="border border-slate-800/80 rounded-xl overflow-hidden bg-slate-900/30">
                <button
                  onClick={() =>
                    setMobileExpandedSection(
                      mobileExpandedSection === 'bi' ? null : 'bi'
                    )
                  }
                  className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-blue-400"
                >
                  <span>Business Intelligence</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileExpandedSection === 'bi' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileExpandedSection === 'bi' && (
                  <div className="p-2 space-y-1 bg-slate-950/60 border-t border-slate-800 text-xs">
                    <button onClick={() => navigate('/business-intelligence')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-blue-300 font-medium">Overview & Analytics</button>
                    <button onClick={() => navigate('/landscape-white-space-analysis')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Landscape & White Space Analysis</button>
                    <button onClick={() => navigate('/infringement-claim-chart-analysis')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Infringement / Claim Chart Analysis</button>
                    <button onClick={() => navigate('/patent-portfolio-analysis')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Portfolio Analysis</button>
                    <button onClick={() => navigate('/patent-licensing')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Licensing</button>
                    <button onClick={() => navigate('/patent-monetization')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Monetization</button>
                    <button onClick={() => navigate('/patent-watch')} className="w-full text-left p-2 rounded hover:bg-slate-900 text-slate-300">Patent Watch</button>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate('/career')}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                Career
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
              >
                Contact
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={() => openConsultationModal()}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <div className="text-center text-xs text-slate-400 space-y-1">
                <div>Bengaluru, Karnataka, India</div>
                <div className="text-blue-400 font-mono">12345678790 | info@xyz.com</div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
