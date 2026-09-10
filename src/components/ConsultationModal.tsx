import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { ConsultationForm } from './ConsultationForm';
import { X, ShieldCheck, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ConsultationModal: React.FC = () => {
  const { isConsultationModalOpen, closeConsultationModal, consultationServicePrefill } = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isConsultationModalOpen) {
        closeConsultationModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConsultationModalOpen, closeConsultationModal]);

  if (!isConsultationModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl my-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black/90 p-6 sm:p-8 overflow-hidden text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background blueprint technical grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

        {/* Close Button */}
        <button
          id="close-consultation-modal-btn"
          onClick={closeConsultationModal}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="relative mb-6 pr-8">
          <div className="flex items-center space-x-2 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CONFIDENTIAL CLIENT CONSULTATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            Let's Discuss Your IP Requirements
          </h2>
          <p className="text-sm text-slate-400 mt-1.5">
            Connect directly with xyz IP technical analysts to structure your patent filing, search clearance, or portfolio strategy.
          </p>
        </div>

        {/* Form */}
        <div className="relative z-10">
          <ConsultationForm
            defaultService={consultationServicePrefill}
            onSuccess={() => {
              // keep open for user to review summary or close
            }}
          />
        </div>

        {/* Quick Contact Footer */}
        <div className="relative mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 font-mono">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phone}</span>
            </span>
            <span className="flex items-center space-x-1 font-mono">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.email}</span>
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Bengaluru, Karnataka, India
          </div>
        </div>
      </div>
    </div>
  );
};
