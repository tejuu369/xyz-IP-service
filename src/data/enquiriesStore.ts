import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { ConsultationFormData, EnquiryRecord, EnquiryStatus } from '../types';

const STORAGE_KEY = 'xyz_ip_consultation_enquiries';
const ADMIN_SESSION_KEY = 'xyz_ip_admin_auth_session';
const FIRESTORE_COLLECTION = 'enquiries';

export const ADMIN_CREDENTIALS = {
  email: 'admin@xyz.com',
  password: 'admin123',
  displayName: 'IP Practice Director',
  role: 'Super Administrator',
};

export const SEED_ENQUIRIES: EnquiryRecord[] = [
  {
    id: 'NERO-948201',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    firstName: 'Dr. Aris',
    lastName: 'Thorne',
    email: 'a.thorne@neurosyn-tech.com',
    phone: '+91 98450 12894',
    company: 'NeuroSyn Systems Pvt Ltd',
    serviceRequired: 'Patent Drafting & Filing',
    budget: '$5,000 - $15,000',
    message:
      'We have engineered a closed-loop neuromodulation ASIC with sub-5ms spike-wave prediction latency. We require comprehensive provisional and PCT complete drafting with claim-level isolation of our analog front-end filter and edge DSP microarchitecture.',
    status: 'new',
    notes: 'Urgent priority. Client has an upcoming IEEE neuro-engineering conference presentation in 3 weeks.',
  },
  {
    id: 'NERO-948184',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // 4 hours ago
    firstName: 'Priya',
    lastName: 'Venkatesh',
    email: 'priya.v@quantumscale.ai',
    phone: '+91 99012 44321',
    company: 'QuantumScale AI Corp',
    serviceRequired: 'Freedom to Operate (FTO)',
    budget: '$10,000 - $25,000',
    message:
      'Preparing Series-A commercial deployment of our sparse tensor compression runtime in the US, EU, and Japanese jurisdictions. Seeking comprehensive FTO clearance search covering active claims held by semiconductor majors in quantized neural acceleration.',
    status: 'in-progress',
    notes: 'Preliminary patent search matrix shared with senior patent counsel. Evaluating 14 flagged patent families.',
  },
  {
    id: 'NERO-948120',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 22).toISOString(), // 22 hours ago
    firstName: 'Marcus',
    lastName: 'Sterling',
    email: 'm.sterling@sterling-ip.co.uk',
    phone: '+44 20 7946 0912',
    company: 'Sterling & Associates LLP',
    serviceRequired: 'Patent Invalidation Search',
    budget: '$15,000+',
    message:
      'Foreign associate request: Need an exhaustive novelty and inventive step prior-art invalidation search targeting US Patent 10,892,110 (claims 1-18) ahead of a USPTO PTAB Inter Partes Review (IPR) filing deadline next month.',
    status: 'contacted',
    notes: 'Introductory video conference completed. Scope of non-patent literature (NPL) search across IEEE & Chinese repositories agreed upon.',
  },
  {
    id: 'NERO-947980',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    firstName: 'Rajesh',
    lastName: 'Gupta',
    email: 'r.gupta@cleanvolt-energy.in',
    phone: '+91 98860 77123',
    company: 'CleanVolt Energy Technologies',
    serviceRequired: 'Landscape & White Space Analysis',
    budget: '$5,000 - $10,000',
    message:
      'Conducting an R&D pivot toward polymer-ceramic composite solid-state battery electrolytes. We require a competitive patent landscape analysis identifying white spaces not preempted by Toyota, CATL, or QuantumScape.',
    status: 'new',
    notes: 'Assigned to chemical & materials IP analyst. Initial report outline drafted.',
  },
  {
    id: 'NERO-947650',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), // 4 days ago
    firstName: 'Elena',
    lastName: 'Rostova',
    email: 'elena.rostova@biogene-rx.ch',
    phone: '+41 22 555 0199',
    company: 'BioGene Therapeutics SA',
    serviceRequired: 'Patent Portfolio Analysis',
    budget: '$25,000+',
    message:
      'Portfolio audit of 42 granted patent families covering monoclonal antibody conjugation formulations across 11 national registries. Seeking valuation metrics and recommendations on non-core patent abandonment or licensing targets.',
    status: 'closed',
    notes: 'Final executive audit report delivered and approved by board IP committee.',
  },
];

// Local cache helper
export function getStoredEnquiries(): EnquiryRecord[] {
  if (typeof window === 'undefined') return SEED_ENQUIRIES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ENQUIRIES));
    return SEED_ENQUIRIES;
  } catch (err) {
    console.error('Error accessing local enquiries:', err);
    return SEED_ENQUIRIES;
  }
}

function updateLocalCache(records: EnquiryRecord[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to update local cache:', err);
  }
}

/**
 * Real-time subscription to Firebase Firestore
 * Syncs cloud Firestore documents directly to subscribers
 */
export function subscribeToEnquiries(
  onData: (enquiries: EnquiryRecord[]) => void,
  onError?: (error: Error) => void
): () => void {
  try {
    const colRef = collection(db, FIRESTORE_COLLECTION);
    const q = query(colRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        if (snapshot.empty) {
          // If Firestore collection is empty, seed initial records to Firebase
          seedInitialEnquiriesToFirestore().then((seeded) => {
            if (seeded) {
              onData(seeded);
              updateLocalCache(seeded);
            } else {
              const local = getStoredEnquiries();
              onData(local);
            }
          });
          return;
        }

        const items: EnquiryRecord[] = [];
        snapshot.forEach((docSnap) => {
          items.push(docSnap.data() as EnquiryRecord);
        });

        updateLocalCache(items);
        onData(items);
      },
      (error) => {
        console.warn('Firestore subscription fallback to local cache:', error);
        onData(getStoredEnquiries());
        if (onError) onError(error);
      }
    );

    return unsubscribe;
  } catch (err) {
    console.warn('Could not establish Firestore listener, using local storage:', err);
    onData(getStoredEnquiries());
    return () => {};
  }
}

/**
 * Seeds initial sample enquiries to Firestore
 */
export async function seedInitialEnquiriesToFirestore(): Promise<EnquiryRecord[]> {
  try {
    const promises = SEED_ENQUIRIES.map((item) =>
      setDoc(doc(db, FIRESTORE_COLLECTION, item.id), item, { merge: true })
    );
    await Promise.all(promises);
    return SEED_ENQUIRIES;
  } catch (err) {
    console.error('Failed to seed Firebase Firestore:', err);
    return SEED_ENQUIRIES;
  }
}

/**
 * Saves a new enquiry to Firebase Firestore and updates local cache
 */
export async function saveEnquiry(formData: ConsultationFormData, budget?: string): Promise<EnquiryRecord> {
  const newRecord: EnquiryRecord = {
    ...formData,
    id: `NERO-${Math.floor(100000 + Math.random() * 900000)}`,
    createdAt: new Date().toISOString(),
    status: 'new',
    budget: budget || 'Standard Scoping',
    notes: 'New web inquiry received. Requires initial technical qualification.',
  };

  // Immediate local update for responsive UI
  const current = getStoredEnquiries();
  const updated = [newRecord, ...current.filter((e) => e.id !== newRecord.id)];
  updateLocalCache(updated);

  // Asynchronously save to Firebase Firestore
  try {
    await setDoc(doc(db, FIRESTORE_COLLECTION, newRecord.id), newRecord);
    console.log('Successfully persisted enquiry to Firebase Firestore:', newRecord.id);
  } catch (err) {
    console.error('Failed to write enquiry to Firebase Firestore:', err);
  }

  return newRecord;
}

/**
 * Updates an enquiry status in Firebase Firestore
 */
export async function updateEnquiryStatus(id: string, status: EnquiryStatus): Promise<EnquiryRecord[]> {
  const current = getStoredEnquiries();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  updateLocalCache(updated);

  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, id);
    await updateDoc(docRef, { status });
    console.log(`Firebase: Updated enquiry ${id} status to ${status}`);
  } catch (err) {
    console.error('Failed to update enquiry status in Firebase:', err);
  }

  return updated;
}

/**
 * Updates internal analyst notes for an enquiry in Firebase Firestore
 */
export async function updateEnquiryNotes(id: string, notes: string): Promise<EnquiryRecord[]> {
  const current = getStoredEnquiries();
  const updated = current.map((item) => (item.id === id ? { ...item, notes } : item));
  updateLocalCache(updated);

  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, id);
    await updateDoc(docRef, { notes });
    console.log(`Firebase: Updated notes for enquiry ${id}`);
  } catch (err) {
    console.error('Failed to update enquiry notes in Firebase:', err);
  }

  return updated;
}

/**
 * Deletes an enquiry from Firebase Firestore
 */
export async function deleteEnquiry(id: string): Promise<EnquiryRecord[]> {
  const current = getStoredEnquiries();
  const updated = current.filter((item) => item.id !== id);
  updateLocalCache(updated);

  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, id);
    await deleteDoc(docRef);
    console.log(`Firebase: Deleted enquiry ${id}`);
  } catch (err) {
    console.error('Failed to delete enquiry from Firebase:', err);
  }

  return updated;
}

/**
 * Resets enquiries to seed defaults in Firebase Firestore
 */
export async function resetEnquiriesToDefault(): Promise<EnquiryRecord[]> {
  updateLocalCache(SEED_ENQUIRIES);

  try {
    // Delete existing docs then write seed
    const snap = await getDocs(collection(db, FIRESTORE_COLLECTION));
    const deletePromises = snap.docs.map((d) => deleteDoc(d.ref));
    await Promise.all(deletePromises);

    const writePromises = SEED_ENQUIRIES.map((item) =>
      setDoc(doc(db, FIRESTORE_COLLECTION, item.id), item)
    );
    await Promise.all(writePromises);
    console.log('Firebase: Reset all enquiries to default seed records in Firestore');
  } catch (err) {
    console.error('Failed to reset enquiries in Firebase:', err);
  }

  return SEED_ENQUIRIES;
}

/* Authentication Helpers */
export function isAdminAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

export function loginAdmin(email: string, pass: string): boolean {
  if (
    (email.trim().toLowerCase() === ADMIN_CREDENTIALS.email.toLowerCase() ||
      email.trim().toLowerCase() === 'admin') &&
    pass.trim() === ADMIN_CREDENTIALS.password
  ) {
    try {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
    } catch {}
    return true;
  }
  return false;
}

export function logoutAdmin(): void {
  try {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch {}
}

export function exportEnquiriesToCSV(): void {
  const list = getStoredEnquiries();
  const headers = [
    'Reference ID',
    'Date',
    'Status',
    'Client Name',
    'Company',
    'Email',
    'Phone',
    'Service Required',
    'Budget',
    'Requirements',
    'Internal Notes',
  ];

  const rows = list.map((item) => [
    item.id,
    new Date(item.createdAt).toLocaleString(),
    item.status.toUpperCase(),
    `"${item.firstName} ${item.lastName}"`,
    `"${item.company || ''}"`,
    item.email,
    item.phone,
    `"${item.serviceRequired}"`,
    `"${item.budget || ''}"`,
    `"${(item.message || '').replace(/"/g, '""')}"`,
    `"${(item.notes || '').replace(/"/g, '""')}"`,
  ]);

  const csvContent =
    'data:text/csv;charset=utf-8,' +
    [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute(
    'download',
    `xyz_IP_Enquiries_Firebase_Export_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
