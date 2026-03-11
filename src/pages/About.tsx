import React from 'react';
import { motion } from 'motion/react';
import { Users, Target, Award, ShieldCheck, Globe, Zap } from 'lucide-react';
import ConsultancyCall from '../components/ConsultancyCall';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Our <span className="text-emerald-500 italic">Mission</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              At GrowthPartnersCo, we are dedicated to empowering businesses across diverse industries through specialized expertise and innovative technology. Our goal is to be the catalyst for your sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Built on Trust, Driven by Results</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in Wyoming, GrowthPartnersCo started with a simple vision: to bridge the gap between complex industry requirements and business efficiency. We recognized that niches like medical billing and truck dispatching were underserved by generic solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we are a multi-disciplinary firm serving clients globally. Our team combines decades of industry experience with cutting-edge AI automation to deliver results that matter.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">1k+</div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Clients</div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide every partnership we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity First',
                desc: 'We believe in absolute transparency and ethical practices in everything we do.',
                icon: ShieldCheck
              },
              {
                title: 'Innovation Driven',
                desc: 'We constantly push the boundaries of what is possible with AI and automation.',
                icon: Zap
              },
              {
                title: 'Client Obsessed',
                desc: 'Your growth is our primary metric for success. We win when you win.',
                icon: Target
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultancyCall />
    </div>
  );
}
