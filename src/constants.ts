import { Specialty, Service, Solution } from './types';

export const SERVICES: Service[] = [
  {
    id: 'medical-billing',
    title: 'Medical Billing & Coding',
    description: 'Expert claim submission, accurate coding, and faster reimbursements for healthcare providers.',
    icon: 'Activity',
    path: '/services/medical-billing'
  },
  {
    id: 'truck-dispatching',
    title: 'Truck Dispatching',
    description: 'Efficient load planning, route optimization, and administrative support for trucking companies.',
    icon: 'Truck',
    path: '/services/truck-dispatching'
  },
  {
    id: 'real-estate',
    title: 'Real Estate Services',
    description: 'Comprehensive property management, investment consulting, and transaction support.',
    icon: 'Home',
    path: '/services/real-estate'
  },
  {
    id: 'ai-automations',
    title: 'AI Automations',
    description: 'Cutting-edge AI solutions to streamline your business workflows and boost productivity.',
    icon: 'Cpu',
    path: '/services/ai-automations'
  }
];

export const MEDICAL_SOLUTIONS: Solution[] = [
  {
    title: 'Medical Billing & Coding Services',
    description: 'Our experienced and highly skilled medical billers possess a profound understanding of intricate claim submission procedures, ensuring accurate coding and faster reimbursements.'
  },
  {
    title: 'Billing & Coding Audit Services',
    description: 'We ensure optimal performance by conducting both internal and external evaluations to verify the accuracy and effectiveness of our billing policies and procedures.'
  },
  {
    title: 'Physician Credentialing Services',
    description: 'Our credentialing services help healthcare providers receive prompt payments and accurate compensation from contracted third-party insurance providers.'
  },
  {
    title: 'Verification & Prior Authorization Services',
    description: 'Verification of Benefits (VOB) and Prior Authorization (PA) services help ensure patients receive the essential treatments and medical care they need without delays.'
  },
  {
    title: 'Revenue Cycle Management Services',
    description: 'We focus on improving healthcare operations while increasing revenue through efficient patient collections and reduced administrative workload.'
  },
  {
    title: 'Ambulatory Surgical Center (ASC) Billing',
    description: 'Discover the advantages of outsourcing billing services for Ambulatory Surgery Centers, including improved billing accuracy and faster reimbursements.'
  },
  {
    title: 'AR & Denial Management Services',
    description: 'Our effective denial management strategies help reduce claim denials and ensure faster claim resolution and prompt payments.'
  },
  {
    title: 'Contact Center & Patient Scheduling Services',
    description: 'Our contact center solutions enhance patient scheduling efficiency and improve overall patient satisfaction.'
  }
];

export const TRUCK_SERVICES = [
  { title: 'Load Board Management', desc: 'Access to premium load boards and direct shipper relationships to keep your trucks moving.', icon: 'Search' },
  { title: 'Rate Negotiation', desc: 'Our expert negotiators ensure you get the highest possible rate per mile on every load.', icon: 'DollarSign' },
  { title: 'Paperwork & Invoicing', desc: 'We handle all carrier packets, BOLs, and invoicing so you can focus on driving.', icon: 'FileText' },
  { title: 'Route Optimization', desc: 'Advanced route planning to minimize deadhead miles and maximize your fuel efficiency.', icon: 'Map' },
  { title: 'Broker Credit Checks', desc: 'We verify broker creditworthiness to ensure you get paid on time, every time.', icon: 'ShieldCheck' },
  { title: '24/7 Dispatch Support', desc: 'Dedicated dispatchers available around the clock to assist with any roadside issues.', icon: 'Clock' }
];

export const REAL_ESTATE_SERVICES = [
  { title: 'Property Management', desc: 'Full-service management for residential and commercial properties, including tenant screening and maintenance.', icon: 'Building' },
  { title: 'Investment Consulting', desc: 'Data-driven insights to help you identify and acquire high-yield investment properties.', icon: 'TrendingUp' },
  { title: 'Market Analysis', desc: 'Comprehensive local market reports to help you price and position your assets effectively.', icon: 'BarChart' },
  { title: 'Transaction Coordination', desc: 'Seamless management of the closing process to ensure all deadlines and requirements are met.', icon: 'CheckSquare' },
  { title: 'Portfolio Optimization', desc: 'Strategic advice on diversifying and scaling your real estate holdings for long-term growth.', icon: 'PieChart' },
  { title: 'Leasing Services', desc: 'Aggressive marketing and professional showing services to minimize vacancy rates.', icon: 'Key' }
];

export const REAL_ESTATE_SPECIALTIES = [
  { id: 'residential', name: 'Residential Real Estate', description: 'Expert guidance for buying, selling, and managing single-family homes and multi-family units.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { id: 'commercial', name: 'Commercial Real Estate', description: 'Specialized services for office buildings, retail spaces, and industrial properties.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' },
  { id: 'luxury', name: 'Luxury Estates', description: 'High-end property marketing and acquisition for the most discerning clients.', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800' },
  { id: 'industrial', name: 'Industrial & Logistics', description: 'Strategic solutions for warehouses, distribution centers, and manufacturing facilities.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' },
  { id: 'land', name: 'Land Development', description: 'Expertise in raw land acquisition, zoning, and development planning.', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' },
  { id: 'investment', name: 'Investment Portfolios', description: 'Building and managing diverse real estate portfolios for long-term wealth creation.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
];

export const AI_AUTOMATION_SOLUTIONS = [
  { title: 'Custom AI Chatbots', desc: 'Intelligent customer service agents that handle inquiries and bookings 24/7.', icon: 'MessageSquare' },
  { title: 'Workflow Automation', desc: 'Connecting your apps (Zapier/Make) to automate repetitive data entry and tasks.', icon: 'Zap' },
  { title: 'AI Content Generation', desc: 'Automated marketing and SEO content creation tailored to your brand voice.', icon: 'Edit3' },
  { title: 'Predictive Analytics', desc: 'Using machine learning to forecast trends and optimize business decision-making.', icon: 'Brain' },
  { title: 'Voice AI Assistants', desc: 'Automated phone systems that can schedule appointments and answer basic questions.', icon: 'PhoneCall' },
  { title: 'Document Processing', desc: 'AI-powered OCR to automatically extract data from invoices, receipts, and forms.', icon: 'FileSearch' }
];

export const MEDICAL_SPECIALTIES: Specialty[] = [
  { id: 'gastroenterology', name: 'Gastroenterology', icon: 'Activity', description: 'Stop losing revenue due to complex GI coding errors. Pro-MBS delivers precise medical billing solutions that improve compliance and reimbursement.', image: 'https://images.unsplash.com/photo-1579154235828-401982c60b3c?auto=format&fit=crop&q=80&w=800' },
  { id: 'dme', name: 'DME Billing', icon: 'Accessibility', description: 'Our automated medical billing solutions simplify Durable Medical Equipment (DME) billing to reduce denials and speed up payments.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800' },
  { id: 'neurosurgery', name: 'Neurosurgery', icon: 'Brain', description: 'Our specialty medical billing experts handle complex neurosurgery coding so providers can focus on patient outcomes.', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800' },
  { id: 'ophthalmology', name: 'Ophthalmology', icon: 'Eye', description: 'Pro-MBS ensures accurate ophthalmology coding and modifier usage to prevent claim rejections and maximize reimbursement.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
  { id: 'oncology', name: 'Oncology', icon: 'Ribbon', description: 'We manage complex oncology claims with precision and compassion through advanced revenue cycle management systems.', image: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?auto=format&fit=crop&q=80&w=800' },
  { id: 'pain-management', name: 'Pain Management', icon: 'Activity', description: 'Our tailored billing solutions reduce denials and delays for pain management practices while ensuring consistent revenue recovery.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
  { id: 'pediatric', name: 'Pediatric', icon: 'Baby', description: 'We deliver pediatric billing solutions that prioritize accuracy, efficiency, and parent-friendly communication.', image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800' },
  { id: 'cardiology', name: 'Cardiology', icon: 'Heart', description: 'Avoid costly modifier mistakes. Our revenue cycle management ensures cardiology billing remains compliant and efficient.', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800' },
  { id: 'dermatology', name: 'Dermatology', icon: 'Layers', description: 'Pro-MBS streamlines dermatology billing using automation and payer-ready documentation to minimize errors and accelerate payments.', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800' },
  { id: 'otolaryngology', name: 'Otolaryngology (ENT)', icon: 'Ear', description: 'Our ENT billing specialists reduce coding errors and streamline reimbursements with precise claim processing.', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800' },
  { id: 'physical-therapy', name: 'Physical Therapy', icon: 'Accessibility', description: 'Our revenue cycle management experts ensure compliant billing and reduce therapy claim rejections.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800' },
  { id: 'plastic-surgery', name: 'Plastic Surgery', icon: 'Scissors', description: 'With constantly changing procedural codes and modifiers, our custom billing solutions help maintain accuracy and protect margins.', image: 'https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&q=80&w=800' },
  { id: 'behavioral-health', name: 'Behavioral Health', icon: 'Smile', description: 'Behavioral health claims often face high denial rates. Our team ensures clean claim submissions and mental health compliance.', image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?auto=format&fit=crop&q=80&w=800' },
  { id: 'internal-medicine', name: 'Internal Medicine', icon: 'Stethoscope', description: 'From chronic care management to wellness visits, we automate claim workflows for error-free internal medicine billing.', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800' },
  { id: 'chiropractic', name: 'Chiropractic', icon: 'Activity', description: 'We help chiropractic practices maintain consistent reimbursements through accurate claim management.', image: 'https://images.unsplash.com/photo-1537160120111-4141e1fa9ed8?auto=format&fit=crop&q=80&w=800' },
  { id: 'orthopedic-surgery', name: 'Orthopedic Surgery', icon: 'Bone', description: 'Our orthopedic billing specialists reduce revenue loss caused by missed modifiers and coding errors.', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800' },
  { id: 'vascular-surgery', name: 'Vascular Surgery', icon: 'HeartPulse', description: 'Vascular procedures require high precision. Pro-MBS delivers compliant coding and faster reimbursements.', image: 'https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800' },
  { id: 'urology', name: 'Urology', icon: 'Activity', description: 'We streamline urology billing workflows to eliminate documentation errors and ensure clean claims.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800' },
  { id: 'radiology', name: 'Radiology', icon: 'Scan', description: 'Our billing solutions improve radiology revenue cycle management and reduce payer disputes.', image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800' },
  { id: 'general-surgery', name: 'General Surgery', icon: 'Activity', description: 'From pre-operative documentation to post-operative billing, we ensure efficient surgical billing workflows.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800' },
  { id: 'colon-rectal', name: 'Colon and Rectal', icon: 'Activity', description: 'Our accurate billing workflows eliminate coding confusion in colorectal procedures.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800' },
  { id: 'anesthesiology', name: 'Anesthesiology', icon: 'Activity', description: 'Our outsourced anesthesia billing ensures compliance and real-time claim tracking.', image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=800' },
  { id: 'urgent-care', name: 'Urgent Care', icon: 'Activity', description: 'Designed for fast-paced urgent care centers, our automated billing systems increase collections and reduce administrative bottlenecks.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
  { id: 'gynecology', name: 'Gynecology', icon: 'Venus', description: 'We support gynecology practices with accurate billing processes that reduce denials and maximize revenue.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800' },
  { id: 'rheumatology', name: 'Rheumatology', icon: 'Activity', description: 'Our billing solutions capture every detail of chronic care treatments with compliant coding.', image: 'https://images.unsplash.com/photo-1576091160291-224730392abc?auto=format&fit=crop&q=80&w=800' },
  { id: 'personal-injury', name: 'Personal Injury', icon: 'Bandage', description: 'We provide legally compliant billing support to avoid delays in personal injury settlements.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800' },
  { id: 'family-practice', name: 'Family Practice', icon: 'Users', description: 'Pro-MBS simplifies billing for multi-service family practices with dependable revenue cycle management.', image: 'https://images.unsplash.com/photo-1582213726892-25b793f15903?auto=format&fit=crop&q=80&w=800' },
  { id: 'dental', name: 'Dental', icon: 'Smile', description: 'Our dental billing services ensure coding compliance and consistent revenue generation.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800' },
  { id: 'pathology', name: 'Pathology', icon: 'Microscope', description: 'We simplify pathology billing with automated claim tracking and denial-free documentation.', image: 'https://images.unsplash.com/photo-1579154235828-401982c60b3c?auto=format&fit=crop&q=80&w=800' },
  { id: 'sleep-medicine', name: 'Sleep Medicine', icon: 'Moon', description: 'Sleep studies often involve complex coding. Pro-MBS ensures accurate documentation and full reimbursement.', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=800' }
];
