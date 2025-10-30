import React from 'react';
import { Target, Wrench, CalendarCheck, Shield } from 'lucide-react';

const services = [
  {
    title: 'Paid Ads that actually book jobs',
    desc: 'We run high-intent Meta & Google campaigns targeting homeowners ready to remodel — optimized for booked appointments, not vanity metrics.',
    icon: Target,
  },
  {
    title: 'Lead qualification & follow-up',
    desc: 'Instant SMS + voicemail drops, human-like nurturing, and qualification questions so you only speak with serious prospects.',
    icon: Shield,
  },
  {
    title: 'Calendar automation that sticks',
    desc: 'We integrate with your calendar to eliminate back-and-forth, send reminders, and reduce no-shows with proven sequences.',
    icon: CalendarCheck,
  },
  {
    title: 'Niche expertise: remodeling',
    desc: 'From kitchens to decks, we know the offers, angles, and objections unique to remodelers — and how to overcome them.',
    icon: Wrench,
  },
];

const Services = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What we do</h2>
        <p className="mt-3 text-gray-600">A complete growth system that takes strangers to scheduled, qualified appointments on your calendar.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={i} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
