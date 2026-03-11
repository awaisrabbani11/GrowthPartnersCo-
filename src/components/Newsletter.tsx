import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function Newsletter() {
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
        body: JSON.stringify({ email, phone, type: 'newsletter' }),
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
    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-600/10 blur-3xl rounded-full" />
      
      <div className="relative z-10 max-w-2xl">
        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Stay in the Loop</h3>
        <p className="text-slate-400 mb-8">Get the latest insights on AI, logistics, and real estate delivered to your inbox.</p>
        
        {status === 'success' ? (
          <div className="flex items-center gap-3 text-emerald-400 bg-emerald-400/10 p-4 rounded-xl border border-emerald-400/20">
            <CheckCircle2 size={24} />
            <span className="font-bold">Thanks for subscribing! We'll be in touch soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>
            <button
              disabled={status === 'loading'}
              className="bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : (
                <>
                  Subscribe <Send size={18} />
                </>
              )}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-400 mt-4 text-sm font-medium">Something went wrong. Please try again.</p>
        )}
      </div>
    </div>
  );
}
