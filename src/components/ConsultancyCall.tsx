import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ConsultancyCall() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, type: 'consultancy' }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setPhone('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                Book a <span className="text-emerald-500">consultancy call</span>
              </h2>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Enter your details below, and our team will get in contact with you to discuss how we can partner for your growth.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Expert analysis of your current workflows</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Customized roadmap for AI integration</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                  <p className="text-slate-400">Our team will reach out to you within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-emerald-500 font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    disabled={status === 'loading'}
                    className="w-full bg-emerald-600 text-white font-bold py-5 rounded-2xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Processing...' : (
                      <>
                        Book My Call <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-400 text-center text-sm font-medium">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
