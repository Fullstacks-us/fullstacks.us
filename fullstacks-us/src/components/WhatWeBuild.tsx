import Link from 'next/link';

export default function WhatWeBuild() {
  return (
    <div className="pt-5 pb-5" style={{ backgroundColor: '#f2f2f2' }}>
      <div className="container">
        <div className="section-head col-sm-12" id="service">
          <h1>What We Build</h1>
          <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: '1.6' }}>
            We turn cloud infrastructure into client-ready SaaS products, dashboards, bots, and automation engines — built fast using tools like Supabase, Render, Vercel, and Docker. Here&apos;s what that looks like in action:
          </p>
        </div>

        <div className="row">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
            {/* SaaS MVP */}
            <div className="item service-card">
              <h6>🧪 SaaS MVPs</h6>
              <p className="text-left text-gray-600 mb-4">Custom login, billing, dashboards, and APIs — deploy-ready from day one.</p>
              <ul className="text-left text-sm text-gray-500 space-y-1">
                <li>Supabase auth + database</li>
                <li>Stripe subscriptions</li>
                <li>Vercel + Render hosting</li>
              </ul>
            </div>

            {/* Automation Dashboards */}
            <div className="item service-card">
              <h6>⚙️ Automation Dashboards</h6>
              <p className="text-left text-gray-600 mb-4">No-code workflows and CRON jobs that power businesses quietly behind the scenes.</p>
              <ul className="text-left text-sm text-gray-500 space-y-1">
                <li>Zapier + CRON background workers</li>
                <li>Supabase data control</li>
                <li>Alerts via Slack or Discord</li>
              </ul>
            </div>

            {/* AI Content Engines */}
            <div className="item service-card">
              <h6>🧠 AI Content Engines</h6>
              <p className="text-left text-gray-600 mb-4">We use OpenAI + CapCut to create branded TikToks, blogs, and reels automatically.</p>
              <ul className="text-left text-sm text-gray-500 space-y-1">
                <li>LLM prompt-to-output flows</li>
                <li>CapCut Pro automation & templates</li>
                <li>Scheduled auto-publish</li>
              </ul>
            </div>

            {/* Marketplace or Client Portals */}
            <div className="item service-card">
              <h6>🏪 Marketplaces & Client Portals</h6>
              <p className="text-left text-gray-600 mb-4">White-label dashboards, Stripe payouts, product listings, and messaging.</p>
              <ul className="text-left text-sm text-gray-500 space-y-1">
                <li>Supabase row-level security (RLS)</li>
                <li>Stripe Connect integration</li>
                <li>Client login + admin controls</li>
              </ul>
            </div>

            {/* Hosted Bots & Agents */}
            <div className="item service-card">
              <h6>🤖 Hosted Bots & Agents</h6>
              <p className="text-left text-gray-600 mb-4">Deploy automation bots, ADB agents, or Discord apps without touching infrastructure.</p>
              <ul className="text-left text-sm text-gray-500 space-y-1">
                <li>Dockerized bots on Render or Contabo</li>
                <li>Realtime command logs via WebSocket</li>
                <li>Discord OAuth + command routing</li>
              </ul>
            </div>

            {/* Custom App Stacks */}
            <div className="item service-card">
              <h6>🧱 Custom App Stacks</h6>
              <p className="text-left text-gray-600 mb-4">Your full-stack idea, turned into a branded product or internal tool.</p>
              <ul className="text-left text-sm text-gray-500 space-y-1">
                <li>Frontend: Next.js/Vite + Tailwind</li>
                <li>Backend: Supabase + Render + Stripe</li>
                <li>Optional AI or Docker add-ons</li>
              </ul>
            </div>
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/#contact" 
            className="inline-block bg-black text-black font-medium px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Start Your Build →
          </Link>
        </div>
      </div>
    </div>
  );
} 