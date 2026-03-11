import React from 'react';
import { motion } from 'motion/react';
import { Truck, Navigation, Shield, Clock, BarChart, Phone, Search, DollarSign, FileText, Map, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRUCK_SERVICES } from '../constants';
import ConsultancyCall from '../components/ConsultancyCall';

const icons: Record<string, any> = { Search, DollarSign, FileText, Map, ShieldCheck, Clock };

export default function TruckDispatching() {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1501700493717-9f9b826bb9bc?auto=format&fit=crop&q=80&w=1920"
            alt="Happy Truck Driver"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Truck <span className="text-emerald-500">Dispatching</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Maximize your earnings and minimize your stress. We handle the loads, the paperwork, and the negotiations so you can focus on the road.
            </p>
            <Link to="/contact" className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all">
              Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TRUCK_SERVICES.map((item, i) => {
              const Icon = icons[item.icon] || Truck;
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

      <ConsultancyCall />
    </div>
  );
}
