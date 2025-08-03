import Link from 'next/link';

export default function WhatWeBuild() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">🚀 What We Build</h1>
        <p className="text-lg text-gray-600 mb-12">
          We turn cloud infrastructure into client-ready SaaS products, dashboards, bots, and automation engines — built fast using tools like Supabase, Render, Vercel, and Docker. Here's what that looks like in action:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* SaaS MVP */}
          <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">🧪 SaaS MVPs</h2>
            <p className="text-gray-600 mb-4">Custom login, billing, dashboards, and APIs — deploy-ready from day one.</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              <li>Supabase auth + database</li>
              <li>Stripe subscriptions</li>
              <li>Vercel + Render hosting</li>
            </ul>
          </div>

          {/* Automation Dashboards */}
          <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">⚙️ Automation Dashboards</h2>
            <p className="text-gray-600 mb-4">No-code workflows and CRON jobs that power businesses quietly behind the scenes.</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              <li>Zapier + CRON background workers</li>
              <li>Supabase data control</li>
              <li>Alerts via Slack or Discord</li>
            </ul>
          </div>

          {/* AI Content Engines */}
          <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">🧠 AI Content Engines</h2>
            <p className="text-gray-600 mb-4">We use OpenAI + CapCut to create branded TikToks, blogs, and reels automatically.</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              <li>LLM prompt-to-output flows</li>
              <li>CapCut Pro automation & templates</li>
              <li>Scheduled auto-publish</li>
            </ul>
          </div>

          {/* Marketplace or Client Portals */}
          <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">🏪 Marketplaces & Client Portals</h2>
            <p className="text-gray-600 mb-4">White-label dashboards, Stripe payouts, product listings, and messaging.</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              <li>Supabase row-level security (RLS)</li>
              <li>Stripe Connect integration</li>
              <li>Client login + admin controls</li>
            </ul>
          </div>

          {/* Hosted Bots & Agents */}
          <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">🤖 Hosted Bots & Agents</h2>
            <p className="text-gray-600 mb-4">Deploy automation bots, ADB agents, or Discord apps without touching infrastructure.</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              <li>Dockerized bots on Render or Contabo</li>
              <li>Realtime command logs via WebSocket</li>
              <li>Discord OAuth + command routing</li>
            </ul>
          </div>

          {/* Custom App Stacks */}
          <div className="border p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold mb-2">🧱 Custom App Stacks</h2>
            <p className="text-gray-600 mb-4">Your full-stack idea, turned into a branded product or internal tool.</p>
            <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
              <li>Frontend: Next.js/Vite + Tailwind</li>
              <li>Backend: Supabase + Render + Stripe</li>
              <li>Optional AI or Docker add-ons</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-block bg-black text-white font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Start Your Build →
          </Link>
        </div>
      </div>
    </section>
  );
} 