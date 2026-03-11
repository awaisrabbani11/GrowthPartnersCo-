import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import Newsletter from './Newsletter';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-500/30">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-12">
        <Newsletter />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
