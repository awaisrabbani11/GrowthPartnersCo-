import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="font-bold text-2xl tracking-tighter text-white">
                growthpartners<span className="text-emerald-500">co</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Empowering businesses through specialized dispatching, real estate, medical billing, and AI automation solutions. Based in Wyoming, serving globally.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={service.path} className="text-slate-400 hover:text-emerald-500 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-400 hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-emerald-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-emerald-500 transition-colors">FAQs</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={20} className="text-emerald-500 shrink-0" />
                <span>Wyoming, USA</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={20} className="text-emerald-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={20} className="text-emerald-500 shrink-0" />
                <span>hello@growthpartnersco.com</span>
              </li>
            </ul>
            <div className="aspect-video rounded-xl overflow-hidden border border-slate-800 grayscale hover:grayscale-0 transition-all">
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
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 GrowthPartnersCo LLC. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/terms" className="hover:text-emerald-500">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-emerald-500">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
