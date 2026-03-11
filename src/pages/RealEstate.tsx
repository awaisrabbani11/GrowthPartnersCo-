import React from 'react';
import { motion } from 'motion/react';
import { Home, Key, TrendingUp, Users, Building2, Search, DollarSign, FileCheck, MapPin, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REAL_ESTATE_SERVICES, REAL_ESTATE_SPECIALTIES } from '../constants';
import ConsultancyCall from '../components/ConsultancyCall';

const icons: Record<string, any> = { Search, DollarSign, FileCheck, MapPin, ShieldCheck, Briefcase };

export default function RealEstate() {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1920"
            alt="Happy Real Estate Agent"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Real <span className="text-emerald-500">Estate</span> Solutions
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              From property management to investment analysis, we provide end-to-end real estate services designed to maximize your portfolio's value.
            </p>
            <Link to="/contact" className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all">
              Consult with an Expert
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive support for every stage of the real estate lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {REAL_ESTATE_SERVICES.map((item, i) => {
              const Icon = icons[item.icon] || Home;
              return (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Specialized Sectors</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We bring deep expertise to specific real estate markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REAL_ESTATE_SPECIALTIES.map((specialty, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={specialty.image}
                    alt={specialty.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6">
                    {specialty.description}
                  </p>
                  <Link to="/contact" className="text-emerald-600 font-bold text-sm flex items-center gap-2">
                    Inquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultancyCall />
    </div>
  );
}
