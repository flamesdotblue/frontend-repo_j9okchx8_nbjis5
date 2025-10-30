import React from 'react';
import { MessageSquare, ClipboardCheck, CalendarDays, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & offer',
    desc: 'We analyze your market, craft irresistible remodeling offers, and align on budgets & service areas.',
    icon: MessageSquare,
  },
  {
    title: 'Launch campaigns',
    desc: 'Spin up creative, targeting, and tracking. Leads flow into your pipeline day 1.',
    icon: TrendingUp,
  },
  {
    title: 'Qualify & schedule',
    desc: 'Automated outreach qualifies prospects and books them directly to your calendar.',
    icon: CalendarDays,
  },
  {
    title: 'Measure & scale',
    desc: 'We track revenue, close rates, and job size to scale profitably month over month.',
    icon: ClipboardCheck,
  },
];

const Process = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Simple, transparent, and built to get you on more kitchen tables.</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <span className="absolute right-4 top-4 text-xs font-semibold text-gray-400">0{i + 1}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
