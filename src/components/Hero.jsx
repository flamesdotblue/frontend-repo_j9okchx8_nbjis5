import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              <Calendar className="h-4 w-4" /> Appointment Pipelines that Convert
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              We book qualified remodeling jobs on your calendar
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-gray-600">
              We’re a specialized SMMA helping remodelers fill their schedule with high-intent appointments — without chasing leads or guessing what works.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={handleScroll} className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                Book a Strategy Call <ArrowRight className="h-5 w-5" />
              </button>
              <a href="tel:+15551234567" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 transition hover:border-gray-300">
                <Phone className="h-5 w-5 text-emerald-600" /> (555) 123-4567
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Live lead qualification
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Calendar automation
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
              <div className="rounded-xl bg-gradient-to-br from-emerald-100 via-sky-100 to-white p-6">
                <div className="grid grid-cols-2 gap-4">
                  {['Kitchen Remodel', 'Bathroom Upgrade', 'Basement Finish', 'Deck Build'].map((item, idx) => (
                    <div key={idx} className="rounded-lg border border-white/60 bg-white p-4 shadow-sm">
                      <p className="text-sm font-medium text-gray-900">{item}</p>
                      <p className="mt-1 text-xs text-gray-500">Lead qualifies • Ready to discuss</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="text-sm font-semibold">Avg. 12+ booked appointments / month</p>
                  <p className="text-xs opacity-80">For remodeling clients with $3k+ average ticket</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
