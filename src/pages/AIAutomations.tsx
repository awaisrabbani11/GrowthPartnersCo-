import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Zap, Bot, Database, Code, ArrowRight, MessageSquare, Edit3, Brain, PhoneCall, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AI_AUTOMATION_SOLUTIONS } from '../constants';
import ConsultancyCall from '../components/ConsultancyCall';

const icons: Record<string, any> = { MessageSquare, Zap, Edit3, Brain, PhoneCall, FileSearch };

export default function AIAutomations() {
  return (
    <div className="pt-20">
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1920"
            alt="Professional using AI"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              AI <span className="text-emerald-500 italic">Automations</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Future-proof your business with custom AI solutions. We automate repetitive tasks, optimize workflows, and unlock new growth opportunities.
            </p>
            <Link to="/contact" className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all">
              Schedule AI Audit
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {AI_AUTOMATION_SOLUTIONS.map((item, i) => {
              const Icon = icons[item.icon] || Zap;
              return (
                <div key={i} className="flex flex-col gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
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
