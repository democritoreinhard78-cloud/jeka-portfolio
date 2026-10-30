import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Building2,
  Calculator,
  ClipboardList,
  Database,
  FileSpreadsheet,
  FolderArchive,
  LayoutGrid,
  ListChecks,
  ShieldCheck,
  Users,
  Wallet,
  Landmark,
  Handshake,
} from 'lucide-react';

export const profile = {
  name: 'Jeka Mae R. Taping',
  shortName: 'Jeka Mae Taping',
  initials: 'JT',
  headline: 'Finance, HR & Property Operations Specialist',
  subheadline:
    'Detail-oriented BS Mathematics graduate bridging analytical precision with efficient financial management, compliance, and human resources administration.',
  location: 'Digos City, Davao del Sur, Philippines',
  shortLocation: 'Digos City, Davao del Sur',
  email: 'jekamaet@gmail.com',
  phone: '09516598758',
  phoneHref: 'tel:+639516598758',
  facebookUrl: 'https://facebook.com/jekataping21',
  facebookLabel: 'facebook.com/jekataping21',
  /** Portrait photo in public/assets — a monogram card shows if it fails to load. */
  portraitUrl: `${import.meta.env.BASE_URL}assets/jeka-portrait.png`,
  cvUrl: `${import.meta.env.BASE_URL}Jeka-Mae-Taping-CV.pdf`,
  bio: 'Detail-oriented and organized BS Mathematics graduate with hands-on experience in finance, accounting support, property management, administration, data encoding, and human resources. Adept at maintaining financial records, monitoring company funds, processing statutory remittances, coordinating with clients/tenants, and ensuring strict compliance and confidentiality.',
};

export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export interface Attribute {
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
}

export const ATTRIBUTES: Attribute[] = [
  {
    title: 'Analytical Mindset',
    tag: 'Mathematics background',
    description:
      'A BS Mathematics foundation that brings logic, accuracy, and structured problem-solving to every report, reconciliation, and payroll run.',
    icon: Calculator,
  },
  {
    title: 'Financial Integrity',
    tag: 'Records, funds & statutory compliance',
    description:
      'Careful stewardship of financial records and company funds, with timely BIR, SSS, PhilHealth, and Pag-IBIG remittances.',
    icon: ShieldCheck,
  },
  {
    title: 'People & Operations',
    tag: 'HR support, client & tenant relations',
    description:
      'Supporting employees, clients, and tenants with professionalism, discretion, and dependable day-to-day operational follow-through.',
    icon: Users,
  },
];

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  category: string;
  icon: LucideIcon;
  highlights: string[];
  tags: string[];
}

export const EXPERIENCE: Job[] = [
  {
    id: 'svland-finance',
    role: 'Finance Head / Human Resources',
    company: 'SVLand Corporation',
    period: '2025 – 2026',
    category: 'Finance & HR',
    icon: Landmark,
    highlights: [
      'Managed company financial records, funds, payments, payroll, and financial documentation.',
      'Monitored and processed BIR, SSS, PhilHealth, and Pag-IBIG requirements and statutory remittances.',
      'Oversaw HR administration, attendance tracking, recruitment support, and employee relations.',
    ],
    tags: ['Payroll', 'Fund Monitoring', 'Statutory Remittances', 'HR Administration', 'Recruitment Support'],
  },
  {
    id: 'svland-property',
    role: 'Property Management Officer',
    company: 'SVLand Corporation',
    period: '2025 – 2026',
    category: 'Property Operations',
    icon: Building2,
    highlights: [
      'Handled client and tenant concerns, maintaining positive long-term relationships.',
      'Assisted in property operations, contract documentation, payment collections, and maintenance requests.',
    ],
    tags: ['Tenant Relations', 'Payment Collections', 'Contract Documentation', 'Maintenance Coordination'],
  },
  {
    id: 'noveeland',
    role: 'Real Estate Administrative Staff',
    company: 'Noveeland Realty Services',
    period: '2025',
    category: 'Real Estate Administration',
    icon: Briefcase,
    highlights: [
      'Prepared and organized property documents, client records, and legal contracts.',
      'Coordinated schedules and client appointments; managed correspondence, filing, and data workflows.',
    ],
    tags: ['Document Control', 'Client Records', 'Scheduling', 'Correspondence & Filing'],
  },
  {
    id: 'vilbros',
    role: 'Data Encoder',
    company: 'Vilbros',
    period: '2024',
    category: 'Data & Records',
    icon: Database,
    highlights: [
      'Executed high-accuracy data entry, error auditing, and secure record organization under confidentiality standards.',
    ],
    tags: ['Data Entry', 'Error Auditing', 'Records Management', 'Confidentiality'],
  },
];

export interface Skill {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const CORE_SKILLS: Skill[] = [
  {
    title: 'Payroll & Statutory Remittances',
    description: 'BIR, SSS, PhilHealth, Pag-IBIG',
    icon: Wallet,
  },
  {
    title: 'Financial Documentation & Fund Monitoring',
    description: 'Accurate records, payments & fund tracking',
    icon: Landmark,
  },
  {
    title: 'HR Administration & Employee Records',
    description: 'Attendance, recruitment support & employee files',
    icon: Users,
  },
  {
    title: 'Property Operations & Client Relations',
    description: 'Tenant concerns, collections & maintenance',
    icon: Handshake,
  },
  {
    title: 'Document Preparation, Archiving & Compliance',
    description: 'Contracts, filing systems & confidentiality',
    icon: FolderArchive,
  },
];

export const TOOLS: Skill[] = [
  { title: 'Microsoft Excel', description: 'Advanced data handling', icon: FileSpreadsheet },
  { title: 'QuickBooks', description: 'Bookkeeping & accounting support', icon: Calculator },
  { title: 'ClickUp', description: 'Task & project management', icon: ListChecks },
  { title: 'Microsoft Office Suite', description: 'Word, PowerPoint & Outlook', icon: LayoutGrid },
];

export const LANGUAGES = ['English', 'Filipino'];

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  note: string;
  icon: LucideIcon;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Mathematics',
    school: 'Cor Jesu College, Inc.',
    period: '2021 – 2025',
    note: 'Built a strong foundation in quantitative reasoning, statistics, and logical problem-solving — skills applied daily in finance and operations.',
    icon: Calculator,
  },
  {
    degree: 'Senior High School — HUMSS',
    school: 'Cor Jesu College, Inc.',
    period: '2019 – 2021',
    note: 'Humanities and Social Sciences strand, developing communication, interpersonal, and people-centered skills.',
    icon: ClipboardList,
  },
];
