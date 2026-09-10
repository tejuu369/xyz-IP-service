import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CareerPage } from './pages/CareerPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AdminPortalPage } from './pages/AdminPortalPage';
import { ALL_SERVICES_PAGES } from './data/companyData';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Normalize path without leading or trailing slashes
  const cleanPath = currentPath.replace(/^\/+|\/+$/g, '');

  let PageComponent = <HomePage />;

  if (cleanPath === '' || cleanPath === 'home') {
    PageComponent = <HomePage />;
  } else if (cleanPath === 'about-us' || cleanPath === 'about') {
    PageComponent = <AboutPage />;
  } else if (cleanPath === 'career' || cleanPath === 'careers') {
    PageComponent = <CareerPage />;
  } else if (cleanPath === 'contact' || cleanPath === 'contact-us') {
    PageComponent = <ContactPage />;
  } else if (cleanPath === 'admin' || cleanPath === 'admin-portal') {
    PageComponent = <AdminPortalPage />;
  } else if (ALL_SERVICES_PAGES[cleanPath]) {
    PageComponent = <ServiceDetailPage slug={cleanPath} />;
  } else {
    // Fallback default
    PageComponent = <HomePage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-charcoal-950 text-charcoal-100 selection:bg-gold-500 selection:text-charcoal-950">
      {/* Top sticky navigation bar */}
      <Navbar />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        {PageComponent}
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Fixed global widgets */}
      <FloatingWhatsApp />
      <BackToTop />
      <ConsultationModal />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
