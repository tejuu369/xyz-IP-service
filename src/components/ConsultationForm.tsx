import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import {
  Send,
  CheckCircle2,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  Download,
  AlertCircle,
} from 'lucide-react';

interface ConsultationFormProps {
  defaultService?: string;
  onSuccess?: () => void;
  standalone?: boolean;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  defaultService = '',
  onSuccess,
  standalone = true,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: defaultService || 'Patentability / Prior Art Search',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SERVICE_OPTIONS = [
    'Patentability / Prior Art Search',
    'Patent Drafting',
    'Patent Filing (India / PCT)',
    'Freedom to Operate (FTO) & Clearance',
    'Patent Invalidation Search & Claim Charts',
    'Office Action (FER) Response & Prosecution',
    'Landscape Study & White Space Analysis',
    'Infringement & Evidence-of-Use Claim Charts',
    'Patent Portfolio Analysis & Pruning',
    'Patent Licensing & Monetization Support',
    'Patent Illustrations & Formal Drawings',
    'Design Patent Registration',
    'Patent Watch & Competitor Monitoring',
    'Trademark Search & Registration',
    'Copyright Protection for Software',
    'Other Specialized IP Inquiry',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your technical requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 900);
  };

  const handleDownloadSummary = () => {
    const text = `XYZ IP SERVICES - CONSULTATION ENQUIRY SUMMARY
Reference ID: NERO-${Date.now().toString().slice(-6)}
Date: ${new Date().toLocaleDateString()}
Client Name: ${formData.firstName} ${formData.lastName}
Company: ${formData.company || 'Not Specified'}
Email: ${formData.email}
Phone: ${formData.phone}
Service Required: ${formData.serviceRequired}
Requirements: ${formData.message}

Corporate Office:
${COMPANY_INFO.address}
Direct Line: ${COMPANY_INFO.phone}
Email: ${COMPANY_INFO.email}
Status: Received - A dedicated technical analyst will contact you within 1 business day under strict NDA.`;

    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `xyz_IP_Consultation_Ref_${Date.now().toString().slice(-6)}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`w-full ${standalone ? '' : 'p-2'}`}>
      {isSubmitted ? (
        <div className="p-8 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white font-heading">
              Enquiry Successfully Submitted
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-white">{formData.firstName}</span>. A senior patent analyst at xyz IP will review your inquiry and connect with you within 1 business day under our standard non-disclosure protocol.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-400 max-w-md mx-auto space-y-1.5 font-mono">
            <div className="text-slate-300 font-bold border-b border-slate-800 pb-1 flex justify-between">
              <span>REFERENCE SUMMARY</span>
              <span className="text-blue-400">STATUS: CONFIRMED</span>
            </div>
            <div>Service: <span className="text-slate-200">{formData.serviceRequired}</span></div>
            <div>Email: <span className="text-slate-200">{formData.email}</span></div>
            <div>Phone: <span className="text-slate-200">{formData.phone}</span></div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={handleDownloadSummary}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Download Reference Copy</span>
            </button>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  company: '',
                  serviceRequired: 'Patentability / Prior Art Search',
                  message: '',
                });
              }}
              className="inline-flex items-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                First Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                id="consultation-first-name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="e.g. Rajesh"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.firstName ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.firstName && <p className="text-[11px] text-rose-400 mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Last Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                id="consultation-last-name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="e.g. Verma"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.lastName ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.lastName && <p className="text-[11px] text-rose-400 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                id="consultation-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Phone Number <span className="text-rose-400">*</span>
              </label>
              <input
                type="tel"
                id="consultation-phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91-XXXXXXXXXX"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
              {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Company / Organization */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Company / Organization
            </label>
            <input
              type="text"
              id="consultation-company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. TechCorp Innovations / University / Law Firm"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Service Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Service Required <span className="text-rose-400">*</span>
            </label>
            <select
              id="consultation-service-select"
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-slate-200">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Message / Project Requirements <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="consultation-message"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Briefly describe your invention, target jurisdictions, impending filing deadlines, or analytical search goals..."
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                errors.message ? 'border-rose-500 focus:ring-rose-500/30' : 'border-slate-800 focus:border-blue-500 focus:ring-blue-500/20'
              }`}
            />
            {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
          </div>

          {/* Confidentiality notice */}
          <div className="flex items-center space-x-2 text-[11px] text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
            <Shield className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span>Confidentiality guaranteed. All technical disclosures protected under strict NDA.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            id="consultation-submit-btn"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide uppercase transition-all duration-200 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white hover:from-blue-500 hover:to-indigo-600 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing Submission...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
