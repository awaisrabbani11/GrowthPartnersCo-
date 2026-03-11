import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, Briefcase, TrendingUp, Phone, 
  FileCheck, Zap, Users, LifeBuoy, BarChart3,
  Activity, Accessibility, Brain, Eye, Ribbon, Baby, Heart, Layers, Ear, 
  Scissors, Smile, Stethoscope, Bone, HeartPulse, Scan, Cross, Venus, 
  Bandage, Microscope, Moon
} from 'lucide-react';
import { MEDICAL_SPECIALTIES } from '../constants';
import ConsultancyCall from '../components/ConsultancyCall';

const ICON_MAP: Record<string, any> = {
  Activity, Accessibility, Brain, Eye, Ribbon, Baby, Heart, Layers, Ear, 
  Scissors, Smile, Stethoscope, Bone, HeartPulse, Scan, Cross, Venus, 
  Bandage, Users, Microscope, Moon
};

export default function SpecialtyDetail() {
  const { id } = useParams();
  const specialty = MEDICAL_SPECIALTIES.find(s => s.id === id);

  if (!specialty) {
    return <Navigate to="/services/medical-billing" />;
  }

  const SpecialtyIcon = ICON_MAP[specialty.icon] || Activity;

  const metrics = [
    { label: '98% Clean Claims', icon: FileCheck, color: 'text-emerald-500' },
    { label: '100% HIPAA Ready', icon: ShieldCheck, color: 'text-blue-500' },
    { label: '96% First-Pass Rate', icon: Zap, color: 'text-amber-500' },
    { label: 'All-Age Coverage', icon: Users, color: 'text-purple-500' },
    { label: 'Denial Prevention & Resolution', icon: LifeBuoy, color: 'text-rose-500' },
    { label: 'Real-Time Reporting & Analytics', icon: BarChart3, color: 'text-indigo-500' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              to="/services/medical-billing"
              className="inline-flex items-center gap-2 text-emerald-400 font-bold mb-8 hover:text-emerald-300 transition-colors"
            >
              <ArrowLeft size={20} /> Back to Medical Billing
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 backdrop-blur-sm border border-emerald-500/30">
                <SpecialtyIcon size={32} />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                {specialty.name} <span className="text-emerald-500">Billing</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              {specialty.description} We provide specialized revenue cycle management solutions tailored specifically for {specialty.name.toLowerCase()} practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="bg-slate-900 border-y border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${metric.color}`}>
                  <metric.icon size={24} />
                </div>
                <span className="text-sm font-bold text-slate-300 leading-tight">{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our {specialty.name} Billing?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {specialty.name} billing requires a deep understanding of specific CPT codes, modifiers, and payer-specific guidelines. Our team of certified coders and billers are experts in this niche, ensuring that your claims are clean and your reimbursements are maximized.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    `Specialized ${specialty.name} CPT/ICD-10 Coding`,
                    'Modifier Usage Optimization',
                    'Niche-Specific Denial Management',
                    'Payer-Specific Contract Analysis',
                    'Real-time Performance Reporting',
                    'Dedicated Specialty Account Manager'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">The GrowthPartnersCo Advantage</h3>
                <p className="text-emerald-800 leading-relaxed mb-6">
                  We don't just process claims; we optimize your entire revenue cycle. For {specialty.name.toLowerCase()} practices, this means identifying under-coded procedures, reducing administrative friction, and providing actionable insights into your practice's financial health.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <ShieldCheck size={20} /> HIPAA Compliant
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 font-bold">
                    <TrendingUp size={20} /> 98% Clean Claim Rate
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 text-white sticky top-32">
                <h3 className="text-2xl font-bold mb-6">Get a Free Audit</h3>
                <p className="text-slate-400 mb-8">
                  Discover how much revenue your {specialty.name.toLowerCase()} practice is leaving on the table.
                </p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Practice Name"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                    Request Analysis
                  </button>
                </form>
                <div className="mt-8 pt-8 border-t border-slate-800 text-center">
                  <p className="text-sm text-slate-500 mb-4">Or call us directly</p>
                  <a href="tel:+15551234567" className="text-xl font-bold flex items-center justify-center gap-2 hover:text-emerald-400 transition-colors">
                    <Phone size={20} /> +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultancyCall />
    </div>
  );
}
