import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import ConsultancyCall from '../components/ConsultancyCall';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-slate-950">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Modern Office"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-bold text-sm mb-6 uppercase tracking-widest">
                Growth Partners Co
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                Scale Your Business with <span className="text-emerald-500 italic">Precision</span> & <span className="text-emerald-500 italic">AI</span>.
              </h1>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                We provide specialized B2B solutions in Truck Dispatching, Real Estate, Medical Billing, and AI Automations. Partner with experts who care about your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/20"
                >
                  Get a Free Consultation <ArrowRight size={20} />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Specialized Solutions for Every Niche
            </h2>
            <p className="text-lg text-slate-600">
              We've mastered the intricacies of four major industries to provide you with unparalleled service and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-600/10 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                  {/* Icon placeholder - would use dynamic icons in a real app */}
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.path} className="text-emerald-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Human Centric */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880212340-02d956ea3b85?auto=format&fit=crop&q=80&w=800"
                  alt="Happy Business Partners"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        alt="User"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm font-bold text-slate-900">1000+ Clients</div>
                </div>
                <p className="text-sm text-slate-600 italic">
                  "GrowthPartnersCo transformed our medical billing process. Our revenue increased by 25% in just 3 months!"
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                Human Expertise Powered by <span className="text-emerald-600">AI Intelligence</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe in the power of human connection. Every page of our service is backed by real people who are dedicated to your success. We don't just provide services; we build partnerships.
              </p>

              <div className="space-y-4">
                {[
                  'Specialized Industry Experts',
                  '1000% B2B Response Rate Focus',
                  'AI-Driven Efficiency & Automation',
                  'Dedicated Account Managers',
                  'Transparent Reporting & Analytics'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-500" size={24} />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:gap-3 transition-all"
              >
                Learn more about our mission <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={20} />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Jenkins',
                role: 'CEO, HealthFirst Clinic',
                text: 'Their medical billing team is top-notch. We saw a drastic reduction in claim denials within the first month.',
                img: 'https://i.pravatar.cc/100?img=32'
              },
              {
                name: 'Michael Chen',
                role: 'Owner, Chen Logistics',
                text: 'The dispatching service is a lifesaver. My drivers are happier, and my profits are up. Highly recommend!',
                img: 'https://i.pravatar.cc/100?img=12'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Real Estate Investor',
                text: 'Professional, responsive, and data-driven. They helped me scale my portfolio across three states.',
                img: 'https://i.pravatar.cc/100?img=44'
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Call Section */}
      <ConsultancyCall />
    </div>
  );
}
