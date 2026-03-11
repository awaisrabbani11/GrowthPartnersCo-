import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
              Let's <span className="text-emerald-500 italic">Connect</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have questions about our services? Our consultants are ready to help you scale your business.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Service Interested In</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none">
                      <option>Medical Billing & Coding</option>
                      <option>Truck Dispatching</option>
                      <option>Real Estate Services</option>
                      <option>AI Automations</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Your Message</label>
                    <textarea
                      rows={6}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Tell us about your business goals..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-emerald-600 text-white font-bold py-5 rounded-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                  <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">Mon-Fri 9am-6pm EST</p>
                </div>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-600">hello@growthpartnersco.com</p>
                  <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">24/7 Support</p>
                </div>
              </div>

              {/* Google Maps Plugin Placeholder */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <MapPin className="text-emerald-600" /> Our Location
                </h3>
                <div className="aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-lg grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.5828238104!2d-106.3271!3d42.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8760bd0000000001%3A0x0!2zNDLCsDUxJzAwLjAiTiAxMDbCsDE5JzM3LjYiVw!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="GrowthPartnersCo Location"
                  ></iframe>
                </div>
                <p className="text-slate-500 text-sm italic text-center">
                  GrowthPartnersCo LLC - Registered in Wyoming, USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
