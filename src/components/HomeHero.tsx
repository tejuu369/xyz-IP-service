import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from '../context/RouterContext';
import { AbstractPatentGraphic } from './AbstractPatentGraphic';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Globe2,
  Lock,
  Clock,
  CheckCircle2,
  ChevronRight,
  Phone,
  Sliders,
  Image as ImageIcon,
  Upload,
  Link2,
  X,
  RotateCcw,
  Check,
  Eye,
} from 'lucide-react';

export const HERO_BACKGROUND_PRESETS = [
  {
    id: 'modern-arch',
    label: 'Architecture',
    description: 'Modern glass innovation tower',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'law-heritage',
    label: 'Legal Heritage',
    description: 'Classic law library & stately columns',
    url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'tech-rnd',
    label: 'Technology R&D',
    description: 'Cleanroom innovation laboratory',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'blueprints',
    label: 'Drafting Studio',
    description: 'Precision patent schematics',
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 'corporate-skyline',
    label: 'Metropolitan',
    description: 'Global financial district skyline',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80',
  },
];

export interface HomeHeroProps {
  /**
   * Custom background image URL or asset path.
   * Can be set to any URL or local path (e.g. '/hero.jpg').
   */
  backgroundImage?: string;
  /**
   * Background image opacity percentage (0-100). Default is 60 for vivid visibility.
   */
  imageOpacity?: number;
  className?: string;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  backgroundImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
  imageOpacity = 60,
  className = '',
}) => {
  const { navigate, openConsultationModal } = useRouter();

  // Manage dynamic background state with localStorage persistence
  const [activeBg, setActiveBg] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('xyzip_hero_bg');
      if (saved) return saved;
    }
    return backgroundImage;
  });

  const [opacity, setOpacity] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('xyzip_hero_opacity');
      if (saved) return Number(saved);
    }
    return imageOpacity;
  });

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [urlError, setUrlError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleSelectPreset = (url: string) => {
    setActiveBg(url);
    setUrlError('');
    if (typeof window !== 'undefined') {
      localStorage.setItem('xyzip_hero_bg', url);
    }
  };

  const handleApplyCustomUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrlInput.trim()) return;
    if (!customUrlInput.startsWith('http://') && !customUrlInput.startsWith('https://') && !customUrlInput.startsWith('/')) {
      setUrlError('Please enter a valid image URL starting with http://, https://, or /');
      return;
    }
    setActiveBg(customUrlInput.trim());
    setUrlError('');
    if (typeof window !== 'undefined') {
      localStorage.setItem('xyzip_hero_bg', customUrlInput.trim());
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUrlError('Please upload an image file (PNG, JPG, WebP, etc.)');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setActiveBg(result);
        setUrlError('');
        try {
          localStorage.setItem('xyzip_hero_bg', result);
        } catch {
          // In case image exceeds localStorage quota, still keep in session state
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleOpacityChange = (newVal: number) => {
    setOpacity(newVal);
    if (typeof window !== 'undefined') {
      localStorage.setItem('xyzip_hero_opacity', String(newVal));
    }
  };

  const handleReset = () => {
    setActiveBg(backgroundImage);
    setOpacity(imageOpacity);
    setCustomUrlInput('');
    setUrlError('');
    if (typeof window !== 'undefined') {
      localStorage.removeItem('xyzip_hero_bg');
      localStorage.removeItem('xyzip_hero_opacity');
    }
  };

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setIsPickerOpen(false);
      }
    };
    if (isPickerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPickerOpen]);

  return (
    <section
      id="hero-section"
      className={`relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-charcoal-950 border-b border-white/10 ${className}`}
    >
      {/* Background Image Layer with prominent visibility and smooth transition */}
      {activeBg && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-all duration-700 ease-out"
          style={{
            backgroundImage: `url(${activeBg})`,
            opacity: opacity / 100,
          }}
        />
      )}

      {/* Balanced Cinematic Scrim Overlays - calibrated so background is vivid while maintaining text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/85 via-charcoal-950/65 to-charcoal-950/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/50 pointer-events-none" />

      {/* Classical Architectural Background: Ambient Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(212,175,55,0.18),rgba(15,15,16,0.6),transparent_70%)] pointer-events-none" />
      
      {/* Fine Classical Guilloche & Precision Drafting Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Decorative Technical Blueprint Registration Crosshairs */}
      <div className="hidden xl:block absolute top-10 left-10 text-charcoal-600 font-mono text-xs select-none pointer-events-none">
        + REG-01 / JUR-GLOBAL
      </div>
      <div className="hidden xl:block absolute top-10 right-28 text-charcoal-600 font-mono text-xs select-none pointer-events-none">
        + LAT: 12.97°N / LON: 77.59°E // BLR
      </div>

      {/* Interactive Hero Background Customizer Button & Drawer */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30" ref={pickerRef}>
        <button
          id="customize-hero-bg-btn"
          onClick={() => setIsPickerOpen(!isPickerOpen)}
          className={`inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all shadow-lg backdrop-blur-md ${
            isPickerOpen
              ? 'bg-gold-500 text-charcoal-950 font-semibold shadow-gold-500/25 ring-2 ring-gold-400'
              : 'bg-charcoal-900/90 hover:bg-charcoal-900 text-charcoal-200 hover:text-gold-400 border border-white/20 hover:border-gold-500/50 shadow-black/40'
          }`}
          title="Change Hero Background Image & Adjust Visibility"
        >
          <Sliders className="w-3.5 h-3.5 text-gold-400" />
          <span>Change Background</span>
          <span className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-gold-300 font-mono">
            {opacity}%
          </span>
        </button>

        {/* Floating Customizer Dropdown Panel */}
        {isPickerOpen && (
          <div
            id="hero-bg-picker-panel"
            className="absolute right-0 mt-2.5 w-[330px] sm:w-[380px] p-4 sm:p-5 rounded-2xl bg-charcoal-900/95 border border-gold-500/40 shadow-2xl shadow-black/80 backdrop-blur-xl z-50 text-left space-y-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-2">
                <ImageIcon className="w-4 h-4 text-gold-500" />
                <h3 className="text-sm font-semibold text-white tracking-tight">
                  Hero Background Image
                </h3>
              </div>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="p-1 rounded-md text-charcoal-400 hover:text-white hover:bg-charcoal-800 transition-colors"
                aria-label="Close customizer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Visibility / Opacity Slider */}
            <div className="space-y-2 bg-charcoal-950/60 p-3 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-charcoal-300 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-gold-400" />
                  Image Visibility
                </span>
                <span className="font-mono text-gold-400 font-semibold text-xs">
                  {opacity}% (More Visible)
                </span>
              </div>
              <input
                id="hero-bg-opacity-slider"
                type="range"
                min="20"
                max="100"
                step="5"
                value={opacity}
                onChange={(e) => handleOpacityChange(Number(e.target.value))}
                className="w-full accent-gold-500 h-1.5 bg-charcoal-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-charcoal-500 font-mono">
                <span>Subtle (20%)</span>
                <span>Balanced (60%)</span>
                <span>Vivid (100%)</span>
              </div>
            </div>

            {/* Presets Gallery */}
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold font-mono">
                Select Curated Image
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {HERO_BACKGROUND_PRESETS.map((preset) => {
                  const isSelected = activeBg === preset.url;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset.url)}
                      className={`group relative h-16 rounded-xl overflow-hidden border text-left transition-all ${
                        isSelected
                          ? 'border-gold-500 ring-2 ring-gold-500/50 scale-[1.02]'
                          : 'border-white/10 hover:border-gold-500/40 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.label}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-1.5 flex flex-col justify-end">
                        <span className="text-[10px] text-white font-medium truncate">
                          {preset.label}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="absolute top-1 right-1 bg-gold-500 rounded-full p-0.5 text-charcoal-950 shadow">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom URL or Upload File */}
            <div className="space-y-2 pt-1 border-t border-white/10">
              <label className="text-[11px] uppercase tracking-wider text-charcoal-400 font-semibold font-mono flex items-center justify-between">
                <span>Custom Image or Upload</span>
              </label>

              <form onSubmit={handleApplyCustomUrl} className="flex gap-1.5">
                <div className="relative flex-1">
                  <Link2 className="w-3.5 h-3.5 text-charcoal-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    placeholder="Paste image URL..."
                    className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-charcoal-950 rounded-lg border border-white/10 focus:border-gold-500 focus:outline-none text-white placeholder:text-charcoal-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 text-xs font-semibold bg-gold-500 hover:bg-gold-600 text-charcoal-950 rounded-lg transition-colors whitespace-nowrap"
                >
                  Apply
                </button>
              </form>

              {urlError && <p className="text-[11px] text-rose-400">{urlError}</p>}

              <div className="flex items-center gap-2 pt-1">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 border border-white/10 text-charcoal-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-gold-400" />
                  <span>Upload from Device</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="py-1.5 px-2.5 rounded-lg bg-charcoal-800/80 hover:bg-charcoal-800 text-charcoal-400 hover:text-charcoal-200 text-xs font-mono flex items-center gap-1 transition-colors"
                  title="Reset to default architecture background"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Col (7 cols on lg) */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Classic Heritage Crest Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-charcoal-900 border border-gold-500/30 shadow-sm">
              <Award className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span className="text-[11px] font-mono font-semibold tracking-widest text-gold-400 uppercase">
                TECHNO-LEGAL PATENT COUNSEL & IP STRATEGY
              </span>
            </div>

            {/* Display Headline with Inter + Playfair Display Italic Pairing */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[58px] text-white font-bold leading-[1.12] font-inter tracking-tight">
                Patent Support for{' '}
                <span className="font-playfair italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-amber-400 to-gold-500 drop-shadow-[0_2px_18px_rgba(212,175,55,0.35)]">
                  Every Stakeholder
                </span>
              </h1>
              <p className="text-sm sm:text-base font-serif italic text-gold-300/85 font-normal tracking-wide">
                Where technical invention meets enforceable legal precision.
              </p>
            </div>

            {/* Supporting Classic Overview */}
            <p className="text-[17px] sm:text-[19px] text-charcoal-200/90 leading-[1.75] max-w-2xl font-normal font-sans tracking-[-0.01em]">
              <strong className="text-white font-semibold">xyz IP</strong> provides structured, high-caliber intellectual property counsel across the full innovation lifecycle — from exhaustive novelty searches and claim engineering to global patent prosecution, freedom-to-operate clearances, and commercial portfolio monetization.
            </p>

            {/* Classical CTAs Row */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                id="hero-book-consultation-btn"
                onClick={() => openConsultationModal()}
                className="group px-7 py-4 rounded-xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 bg-gold-500 hover:bg-gold-600 text-charcoal-950 shadow-xl shadow-gold-500/20 flex items-center justify-center space-x-2.5 hover:-translate-y-0.5"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-charcoal-950 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                id="hero-explore-services-btn"
                onClick={() => {
                  const el = document.getElementById('services-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else navigate('/ip-services');
                }}
                className="px-7 py-4 rounded-xl font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 bg-charcoal-900 hover:bg-charcoal-800 text-charcoal-200 hover:text-white border border-white/10 hover:border-gold-500/40 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Explore Practice Areas</span>
                <ChevronRight className="w-4 h-4 text-charcoal-400" />
              </button>

              <a
                href="tel:12345678790"
                className="inline-flex items-center justify-center space-x-2 text-xs text-charcoal-400 hover:text-gold-400 transition-colors py-2 px-3 rounded-lg hover:bg-charcoal-900/60 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>12345678790</span>
              </a>
            </div>

            {/* Classic Stately Accreditation Metrics Strip */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>35</span>
                  <span className="text-gold-400 text-base font-sans">+</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <Globe2 className="w-3 h-3 text-gold-500 flex-shrink-0" />
                  <span>Global Jurisdictions (USPTO, EPO, IPO)</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>99.4</span>
                  <span className="text-gold-400 text-base font-sans">%</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-gold-500 flex-shrink-0" />
                  <span>Claim Specification Integrity</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>100</span>
                  <span className="text-gold-400 text-base font-sans">%</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-gold-500 flex-shrink-0" />
                  <span>Strict Invention Non-Disclosure</span>
                </div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-white/10 sm:pl-4">
                <div className="text-xl sm:text-2xl font-extrabold text-white font-serif tracking-tight flex items-baseline gap-1">
                  <span>24</span>
                  <span className="text-gold-400 text-base font-sans">h</span>
                </div>
                <div className="text-[11px] text-charcoal-400 font-medium leading-tight flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-gold-500 flex-shrink-0" />
                  <span>Rapid Matter Triage & Scoping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual (5 cols on lg) */}
          <div className="lg:col-span-5 w-full">
            <AbstractPatentGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
