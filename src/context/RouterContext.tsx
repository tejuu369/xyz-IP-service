import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isConsultationModalOpen: boolean;
  openConsultationModal: (servicePrefill?: string) => void;
  closeConsultationModal: () => void;
  consultationServicePrefill: string;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function normalizePath(rawPath: string): string {
  if (!rawPath || rawPath === '') return '/';
  // If path starts with /#, strip it
  if (rawPath.startsWith('#')) rawPath = rawPath.slice(1);
  if (rawPath.startsWith('/#')) rawPath = rawPath.slice(2);
  // Ensure starts with '/'
  if (!rawPath.startsWith('/')) rawPath = '/' + rawPath;
  // Remove trailing slash if longer than 1
  if (rawPath.length > 1 && rawPath.endsWith('/')) {
    rawPath = rawPath.slice(0, -1);
  }
  return rawPath;
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Check hash first if present (for iframe/subpath resiliency) or pathname
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      return normalizePath(hash.slice(1));
    }
    return normalizePath(window.location.pathname);
  });

  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationServicePrefill, setConsultationServicePrefill] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#/')) {
        setCurrentPath(normalizePath(hash.slice(1)));
      } else {
        setCurrentPath(normalizePath(window.location.pathname));
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    const normalized = normalizePath(path);
    if (normalized === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setCurrentPath(normalized);
    try {
      window.history.pushState({}, '', normalized);
    } catch {
      // Fallback to hash if pushState fails in restricted iframe
      window.location.hash = '#' + normalized;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openConsultationModal = (servicePrefill = '') => {
    setConsultationServicePrefill(servicePrefill);
    setIsConsultationModalOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationModalOpen(false);
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        isConsultationModalOpen,
        openConsultationModal,
        closeConsultationModal,
        consultationServicePrefill,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
