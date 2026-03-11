import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Zap, BarChart3, HelpCircle,
  FileCheck, Users, LifeBuoy,
  Activity, Accessibility, Brain, Eye, Ribbon, Baby, Heart, Layers, Ear, 
  Scissors, Smile, Stethoscope, Bone, HeartPulse, Scan, Cross, Venus, 
  Bandage, Microscope, Moon
} from 'lucide-react';
import { MEDICAL_SOLUTIONS, MEDICAL_SPECIALTIES } from '../constants';
import ConsultancyCall from '../components/ConsultancyCall';

const ICON_MAP: Record<string, any> = {
  Activity, Accessibility, Brain, Eye, Ribbon, Baby, Heart, Layers, Ear, 
  Scissors, Smile, Stethoscope, Bone, HeartPulse, Scan, Cross, Venus, 
  Bandage, Users, Microscope, Moon
};

export default function MedicalBilling() {
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
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1920"
            alt="Medical Professional"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 max-w-4xl mx-auto leading-tight">
              Medical Billing & <span className="text-emerald-500">Coding Services</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Our experienced and highly skilled medical billers possess a profound understanding of intricate claim submission procedures, ensuring accurate coding and faster reimbursements.
            </p>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/20"
            >
              Request a Free Audit
            </Link>
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

      {/* Core Solutions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive revenue cycle management tailored for modern healthcare practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MEDICAL_SOLUTIONS.map((solution, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Grid - The "30 Pages" content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Popular Specialties</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide expert billing solutions across a wide range of medical specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEDICAL_SPECIALTIES.map((specialty, i) => {
              const SpecialtyIcon = ICON_MAP[specialty.icon] || Activity;
              return (
                <Link
                  key={specialty.id}
                  to={`/services/medical-billing/specialty/${specialty.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={specialty.image}
                      alt={specialty.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-emerald-600 shadow-lg">
                      <SpecialtyIcon size={20} />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {specialty.name} Billing Services
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                      {specialty.description}
                    </p>
                    <span className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                      View Details <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Why should I outsource my specialty billing services to GrowthPartnersCo?',
                a: 'We provide end-to-end billing and coding services designed to eliminate revenue leaks, reduce claim denials, and accelerate reimbursements. Our team uses HIPAA-compliant technology and specialty-trained billers.'
              },
              {
                q: 'How does GrowthPartnersCo ensure claim accuracy and compliance?',
                a: 'We conduct regular internal audits and use advanced AI-powered scrubbing tools to ensure every claim meets payer requirements before submission.'
              },
              {
                q: 'Will outsourcing affect my practice workflow?',
                a: 'Not at all. Our team integrates seamlessly with your existing EHR/PMS systems, reducing your administrative burden and allowing you to focus on patient care.'
              },
              {
                q: 'How quickly can I see results after partnering?',
                a: 'Most practices see a noticeable improvement in collection rates and a reduction in AR days within the first 30-60 days of partnership.'
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                  <HelpCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                  {faq.q}
                </h4>
                <p className="text-slate-600 text-sm ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Optimize Your Revenue Cycle?</h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Contact our medical billing consultants today for a free practice analysis and discover how much revenue you could be recovering.
          </p>
          <Link
            to="/contact"
            className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <ConsultancyCall />
    </div>
  );
}
