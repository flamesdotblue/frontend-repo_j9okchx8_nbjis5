import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 font-bold text-white">R</span>
            <span className="text-sm font-semibold tracking-wide">Remodeler Appointments</span>
          </div>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#" className="hover:text-gray-900">Home</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#contact" className="rounded-lg bg-emerald-600 px-3 py-1.5 font-semibold text-white hover:bg-emerald-700">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="process">
          <Process />
        </div>
        <CTA />
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Remodeler Appointments. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
