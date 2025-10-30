import React, { useState } from 'react';
import { Send, PhoneCall, CheckCircle2 } from 'lucide-react';

const CTA = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-white via-emerald-50/40 to-white" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">Book a free strategy call</h3>
            <p className="mt-2 text-gray-600">Tell us about your remodeling business. We’ll review your market and map a plan to add 10–20 qualified appointments per month.</p>

            {!submitted ? (
              <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-gray-700">Name</label>
                  <input required type="text" className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none ring-emerald-200 focus:ring" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input required type="email" className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none ring-emerald-200 focus:ring" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input required type="tel" className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none ring-emerald-200 focus:ring" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Service focus</label>
                  <select className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none ring-emerald-200 focus:ring">
                    <option>Kitchen remodels</option>
                    <option>Bathroom remodels</option>
                    <option>Basement finishing</option>
                    <option>Decks & outdoor</option>
                    <option>Whole home</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Anything else?</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2.5 outline-none ring-emerald-200 focus:ring" placeholder="Current monthly lead flow, close rate, target areas, etc." />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700">
                    <Send className="h-5 w-5" /> Request my plan
                  </button>
                </div>
                <p className="sm:col-span-2 text-center text-xs text-gray-500">No pressure. If we’re not a fit, we’ll point you in the right direction.</p>
              </form>
            ) : (
              <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5" />
                  <div>
                    <p className="font-semibold">Thanks — your request is noted.</p>
                    <p className="text-sm opacity-90">We’ll reach out shortly. Want to jump the line? Call us now.</p>
                  </div>
                </div>
                <a href="tel:+15551234567" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-emerald-700 shadow-sm ring-1 ring-emerald-200 hover:bg-emerald-50">
                  <PhoneCall className="h-4 w-4" /> (555) 123-4567
                </a>
              </div>
            )}
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900">Why remodelers choose us</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" /> Appointments over leads — we own the follow-up</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" /> Proven messaging for kitchens, baths, basements, and decks</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" /> CRM + calendar integrations and no-show reduction</li>
              <li className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" /> Transparent reporting tied to revenue, not clicks</li>
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-3xl font-bold text-gray-900">3–5x</p>
                <p className="text-xs text-gray-500">Average ROAS in 90 days</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-3xl font-bold text-gray-900"><span className="text-emerald-600">-42%</span></p>
                <p className="text-xs text-gray-500">No-show rate with reminders</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-3xl font-bold text-gray-900">12+</p>
                <p className="text-xs text-gray-500">Booked appts / month</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-3xl font-bold text-gray-900">$3k+</p>
                <p className="text-xs text-gray-500">Avg. job value targeted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
