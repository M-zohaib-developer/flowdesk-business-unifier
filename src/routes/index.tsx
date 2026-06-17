import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Check, X, Sparkles, Zap, Shield, BarChart3, Users, Bot, Workflow,
  Database, MessageSquare, FileSpreadsheet, FolderOpen, Video, Receipt, Mail,
  Kanban, Brain, TrendingUp, AlertTriangle, Clock, DollarSign, Layers,
  Globe, Activity, ChevronRight, Star, CircleDot, Wand2, Languages, Lock,
  Gauge, LineChart, PieChart, Building2, Rocket, PlayCircle, Plug,
  Plug2, GitBranch, Cpu, Target, MoveRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowDesk — One Platform. Every Business. Zero Chaos." },
      { name: "description", content: "FlowDesk replaces 10+ disconnected tools with a single intelligent business operating system. Projects, CRM, analytics, automation, finance, and AI insights — unified." },
      { property: "og:title", content: "FlowDesk — One Platform. Every Business. Zero Chaos." },
      { property: "og:description", content: "Stop running your business across 10 different tools. FlowDesk unifies everything into one intelligent platform." },
    ],
  }),
  component: Landing,
});

/* ---------- Primitives ---------- */
const Container = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>{children}</div>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
    <span className="size-1.5 rounded-full bg-violet animate-pulse-glow" />
    {children}
  </div>
);

const SectionHeader = ({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) => (
  <div className="mx-auto max-w-3xl text-center">
    <Eyebrow>{eyebrow}</Eyebrow>
    <h2 className="mt-5 text-4xl font-bold tracking-tight text-gradient md:text-6xl">{title}</h2>
    {sub && <p className="mt-5 text-lg text-muted-foreground">{sub}</p>}
  </div>
);

const Btn = ({ children, variant = "primary", className = "", ...p }: any) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all";
  const styles = variant === "primary"
    ? "text-primary-foreground glow-violet hover:scale-[1.02]"
    : "glass text-foreground hover:bg-white/5";
  const style = variant === "primary" ? { background: "var(--gradient-primary)" } : undefined;
  return <button className={`${base} ${styles} ${className}`} style={style} {...p}>{children}</button>;
};

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <Container className="mt-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
              <Layers className="size-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">FlowDesk</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {["Product", "Solutions", "AI", "Pricing", "Customers"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground transition hover:text-foreground">{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="hidden text-sm text-muted-foreground hover:text-foreground md:block">Sign in</button>
            <Btn className="px-4 py-2">Start free <ArrowRight className="size-3.5" /></Btn>
          </div>
        </nav>
      </Container>
    </header>
  );
}

/* ---------- Hero Dashboard Mock ---------- */
function DashboardMock() {
  const bars = [42, 68, 55, 80, 64, 92, 76, 88];
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-10 -z-10 opacity-70" style={{ background: "var(--gradient-mesh)", filter: "blur(40px)" }} />
      <div className="glass-strong rounded-3xl p-3 shadow-[var(--shadow-elegant)]">
        {/* Top bar */}
        <div className="flex items-center justify-between rounded-t-2xl border-b border-white/5 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-rose/70" />
            <div className="size-2.5 rounded-full bg-amber/70" />
            <div className="size-2.5 rounded-full bg-emerald/70" />
          </div>
          <div className="font-mono text-xs text-muted-foreground">flowdesk.app/workspace</div>
          <div className="flex items-center gap-1.5"><Sparkles className="size-3 text-violet" /><span className="text-xs text-muted-foreground">AI on</span></div>
        </div>

        <div className="grid grid-cols-12 gap-3 p-3">
          {/* Sidebar */}
          <div className="col-span-2 hidden flex-col gap-1 rounded-xl bg-surface/60 p-2 md:flex">
            {[Layers, BarChart3, Users, Kanban, Bot, Receipt, Shield].map((I, i) => (
              <div key={i} className={`flex items-center gap-2 rounded-lg p-2 text-xs ${i === 1 ? "bg-violet/15 text-violet" : "text-muted-foreground"}`}>
                <I className="size-3.5" />
                <span className="truncate">{["Home","Analytics","CRM","Tasks","AI","Finance","Security"][i]}</span>
              </div>
            ))}
          </div>

          {/* Main */}
          <div className="col-span-12 space-y-3 md:col-span-10">
            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Revenue", v: "$284,392", d: "+18.2%", c: "emerald" },
                { l: "Active deals", v: "1,284", d: "+126", c: "cyan" },
                { l: "AI insights", v: "42 new", d: "today", c: "violet" },
              ].map((k, i) => (
                <div key={i} className="rounded-xl bg-surface/80 p-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.l}</div>
                  <div className="mt-1 font-display text-lg font-bold">{k.v}</div>
                  <div className={`text-[10px] font-medium`} style={{ color: `var(--${k.c})` }}>↑ {k.d}</div>
                </div>
              ))}
            </div>

            {/* Chart + side */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 rounded-xl bg-surface/80 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-xs font-medium">Revenue · last 8 weeks</div>
                  <div className="font-mono text-[10px] text-muted-foreground">+24.6%</div>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md" style={{
                      height: `${h}%`,
                      background: `linear-gradient(to top, oklch(0.7 0.22 295 / 0.9), oklch(0.78 0.16 220 / 0.7))`
                    }} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-surface/80 p-3">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-medium"><Brain className="size-3 text-violet" />AI Insight</div>
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  Conversion from <span className="text-foreground">WhatsApp leads</span> spiked 32% this week. Consider increasing campaign budget.
                </p>
                <button className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-violet">Apply suggestion <ArrowRight className="size-2.5" /></button>
              </div>
            </div>

            {/* Activity rows */}
            <div className="rounded-xl bg-surface/80 p-3">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-medium">Team activity</span>
                <span className="text-muted-foreground">live</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { n: "Sara", a: "closed deal · Acme Co.", t: "2m", c: "emerald" },
                  { n: "Omar", a: "automated invoice run · 142 sent", t: "8m", c: "violet" },
                  { n: "AI", a: "flagged churn risk: 6 customers", t: "12m", c: "amber" },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px]">
                    <div className="grid size-6 place-items-center rounded-full text-[9px] font-bold text-white" style={{ background: `var(--${r.c})` }}>{r.n[0]}</div>
                    <span className="font-medium">{r.n}</span>
                    <span className="text-muted-foreground">{r.a}</span>
                    <span className="ml-auto font-mono text-muted-foreground">{r.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-6 top-1/3 hidden animate-float rounded-2xl glass-strong p-3 shadow-[var(--shadow-elegant)] lg:block">
        <div className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-lg bg-emerald/20"><TrendingUp className="size-4 text-emerald" /></div>
          <div>
            <div className="text-xs font-semibold">Forecast +18%</div>
            <div className="text-[10px] text-muted-foreground">AI predicted</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-4 top-2/3 hidden animate-float rounded-2xl glass-strong p-3 shadow-[var(--shadow-elegant)] lg:block" style={{ animationDelay: "1.5s" }}>
        <div className="flex items-center gap-2">
          <Languages className="size-4 text-cyan" />
          <div>
            <div className="text-xs font-semibold">EN · UR · HI</div>
            <div className="text-[10px] text-muted-foreground">Multilingual AI</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="animate-fade-up">
            <Eyebrow>Now with FlowDesk AI · v3.0</Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Stop running your business across{" "}
              <span className="text-gradient-violet">10 different tools.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              FlowDesk unifies projects, communication, analytics, automation, CRM, finance, reporting and AI insights into a single intelligent platform — so your team stops switching tabs and starts shipping outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn>Start free 14-day trial <ArrowRight className="size-4" /></Btn>
              <Btn variant="ghost"><PlayCircle className="size-4" /> Book a demo</Btn>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5"><Check className="size-3.5 text-emerald" /> No credit card</div>
              <div className="flex items-center gap-1.5"><Check className="size-3.5 text-emerald" /> Setup in 5 minutes</div>
              <div className="flex items-center gap-1.5"><Check className="size-3.5 text-emerald" /> SOC 2 · GDPR ready</div>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <DashboardMock />
          </div>
        </div>

        {/* Logo strip */}
        <div className="mt-24 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Trusted by 4,200+ teams replacing chaos with clarity</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-60">
            {["NORTHWIND", "ATLAS·CO", "LUMEN", "VERTEX", "MERIDIAN", "ZENITH", "CORTEX"].map(b => (
              <span key={b} className="font-display text-lg font-bold tracking-[0.15em] text-muted-foreground">{b}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Tool Chaos Section ---------- */
function ToolChaos() {
  const tools = [
    { i: MessageSquare, n: "WhatsApp", c: "emerald", x: "10%", y: "20%" },
    { i: MessageSquare, n: "Slack", c: "violet", x: "75%", y: "12%" },
    { i: FileSpreadsheet, n: "Excel", c: "emerald", x: "85%", y: "55%" },
    { i: FolderOpen, n: "Drive", c: "cyan", x: "5%", y: "60%" },
    { i: Video, n: "Zoom", c: "cyan", x: "30%", y: "75%" },
    { i: Receipt, n: "QuickBooks", c: "amber", x: "65%", y: "78%" },
    { i: Users, n: "CRM", c: "rose", x: "80%", y: "30%" },
    { i: Mail, n: "Email", c: "amber", x: "15%", y: "40%" },
    { i: Kanban, n: "Jira", c: "violet", x: "45%", y: "10%" },
  ];
  return (
    <section className="relative py-32">
      <Container>
        <SectionHeader
          eyebrow="The hidden cost of tool chaos"
          title={<>Your data lives in <span className="text-gradient-violet">9 different places.</span></>}
          sub="Every disconnected app is a leak — of time, of context, of decisions. Here's what your stack actually looks like right now."
        />

        <div className="relative mt-20 h-[520px] overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <div className="absolute inset-0 bg-dots opacity-30" />

          {/* Center: chaos node */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-rose/30 blur-2xl" />
              <div className="relative grid size-32 place-items-center rounded-full glass-strong" style={{ boxShadow: "0 0 60px oklch(0.7 0.22 15 / 0.4)" }}>
                <div className="text-center">
                  <AlertTriangle className="mx-auto size-7 text-rose" />
                  <div className="mt-1 font-display text-xs font-bold">Your Ops</div>
                </div>
              </div>
            </div>
          </div>

          {/* Messy SVG lines */}
          <svg className="absolute inset-0 size-full" preserveAspectRatio="none">
            {tools.map((t, i) => (
              <line
                key={i}
                x1={t.x} y1={t.y} x2="50%" y2="50%"
                stroke="url(#chaos-grad)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="animate-dash"
                style={{ animationDelay: `${i * 0.3}s`, opacity: 0.5 }}
              />
            ))}
            <defs>
              <linearGradient id="chaos-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.7 0.22 15)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.82 0.16 75)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>

          {/* Tool nodes */}
          {tools.map((t, i) => (
            <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2 animate-float" style={{ left: t.x, top: t.y, animationDelay: `${i * 0.4}s` }}>
              <div className="glass-strong flex items-center gap-2 rounded-xl px-3 py-2 shadow-lg">
                <t.i className="size-4" style={{ color: `var(--${t.c})` }} />
                <span className="text-xs font-semibold">{t.n}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pain stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { v: "9.4", l: "tools used per team", i: Layers },
            { v: "32%", l: "of week lost to context switching", i: Clock },
            { v: "$18K", l: "wasted per employee yearly", i: DollarSign },
            { v: "67%", l: "of reports out of date", i: AlertTriangle },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              <s.i className="size-5 text-rose" />
              <div className="mt-3 font-display text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Before / After Workflow ---------- */
function WorkflowCompare() {
  const after = [
    { i: BarChart3, n: "Analytics" }, { i: Users, n: "CRM" },
    { i: Workflow, n: "Automation" }, { i: Kanban, n: "Tasks" },
    { i: Receipt, n: "Finance" }, { i: Shield, n: "Security" },
    { i: Bot, n: "AI Assistant" }, { i: Plug, n: "Integrations" },
  ];
  return (
    <section className="relative py-32">
      <Container>
        <SectionHeader
          eyebrow="Before & after"
          title={<>From <span className="text-rose">fragmented stacks</span> to one <span className="text-gradient-violet">operating system.</span></>}
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* BEFORE */}
          <div className="glass rounded-3xl p-8" style={{ background: "linear-gradient(180deg, oklch(0.7 0.22 15 / 0.05), transparent)" }}>
            <div className="mb-6 flex items-center gap-2 text-rose"><X className="size-4" /><span className="font-mono text-xs uppercase tracking-wider">Today</span></div>
            <h3 className="font-display text-2xl font-bold">Traditional business stack</h3>
            <p className="mt-2 text-sm text-muted-foreground">Every team has its own tools. Data fragments. Reports never reconcile.</p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[MessageSquare, FileSpreadsheet, FolderOpen, Mail, Video, Kanban, Receipt, Users, BarChart3].map((I, i) => (
                <div key={i} className="aspect-square rounded-xl border border-rose/20 bg-surface/40 p-3">
                  <I className="size-4 text-muted-foreground" />
                  <div className="mt-auto h-1 w-full rounded-full bg-rose/20 mt-3">
                    <div className="h-full rounded-full bg-rose/40" style={{ width: `${20 + i * 8}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-2">
              {["Manual data entry", "Context switching", "Lost information", "Slow growth"].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <X className="size-3.5 text-rose" /> {t}
                </div>
              ))}
            </div>
          </div>

          {/* AFTER */}
          <div className="relative glass-strong rounded-3xl p-8" style={{ background: "var(--gradient-mesh)" }}>
            <div className="mb-6 flex items-center gap-2 text-emerald"><Check className="size-4" /><span className="font-mono text-xs uppercase tracking-wider">With FlowDesk</span></div>
            <h3 className="font-display text-2xl font-bold text-gradient">One unified platform</h3>
            <p className="mt-2 text-sm text-muted-foreground">A single source of truth. Real-time data. AI working across every workflow.</p>

            <div className="relative mt-10 h-[280px]">
              {/* center */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse-glow rounded-2xl bg-violet/40 blur-2xl" />
                  <div className="relative grid size-20 place-items-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
                    <Layers className="size-7 text-white" />
                  </div>
                </div>
              </div>

              <svg className="absolute inset-0 size-full">
                {after.map((_, i) => {
                  const angle = (i / after.length) * Math.PI * 2 - Math.PI / 2;
                  const x = 50 + Math.cos(angle) * 38;
                  const y = 50 + Math.sin(angle) * 38;
                  return <line key={i} x1="50%" y1="50%" x2={`${x}%`} y2={`${y}%`} stroke="oklch(0.7 0.22 295 / 0.4)" strokeWidth="1" />;
                })}
              </svg>

              {after.map((t, i) => {
                const angle = (i / after.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 38;
                const y = 50 + Math.sin(angle) * 38;
                return (
                  <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                    <div className="glass-strong flex items-center gap-1.5 rounded-lg px-2.5 py-1.5">
                      <t.i className="size-3 text-violet" />
                      <span className="text-[10px] font-semibold">{t.n}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-2">
              {["One source of truth", "Real-time sync", "Automated workflows", "AI-driven decisions"].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="size-3.5 text-emerald" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Transformation comparison ---------- */
function Transformation() {
  const before = ["10+ disconnected tools", "Manual reporting", "Slow decisions", "$$$ in subscriptions", "Operational chaos"];
  const after = ["One unified platform", "Automated workflows", "Real-time visibility", "AI-powered insights", "Up to 70% lower cost"];
  return (
    <section className="relative py-32">
      <Container>
        <SectionHeader eyebrow="The transformation" title={<>The same business, <span className="text-gradient-violet">reimagined.</span></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-10">
            <div className="font-mono text-xs uppercase tracking-wider text-rose">Before FlowDesk</div>
            <ul className="mt-6 space-y-4">
              {before.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-1 grid size-5 place-items-center rounded-full bg-rose/15"><X className="size-3 text-rose" /></div>
                  <span className="text-muted-foreground line-through decoration-rose/40">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10" style={{ background: "var(--gradient-mesh)" }}>
            <div className="font-mono text-xs uppercase tracking-wider text-emerald">After FlowDesk</div>
            <ul className="mt-6 space-y-4">
              {after.map(b => (
                <li key={b} className="flex items-start gap-3">
                  <div className="mt-1 grid size-5 place-items-center rounded-full bg-emerald/20"><Check className="size-3 text-emerald" /></div>
                  <span className="font-medium text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Customer stories ---------- */
function Stories() {
  const cases = [
    { c: "Northwind Commerce", t: "E-commerce · 80 staff", h: "Replaced 11 tools. Cut ops cost by 62%.", q: "We unified inventory, support, CRM and finance on day one. Our weekly reporting went from 14 hours to 12 minutes.", a: "Maya R., COO", i: Rocket },
    { c: "Atlas Marketplace", t: "Marketplace · 220 staff", h: "Onboarding time down 4×.", q: "FlowDesk AI now handles 41% of customer questions across English, Urdu and Hindi. Support SLA dropped to 6 minutes.", a: "Hassan A., Head of CX", i: Building2 },
    { c: "Lumen Studio", t: "Digital agency · 35 staff", h: "Projects, timesheets and invoicing in one flow.", q: "Every client project lives in one workspace — proposals to invoices. No more 'where's that file?' Slack threads.", a: "Priya N., Founder", i: Wand2 },
  ];
  return (
    <section className="relative py-32">
      <Container>
        <SectionHeader eyebrow="Customer stories" title={<>Built for the businesses <span className="text-gradient-violet">outgrowing their stack.</span></>} />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl glass p-7 transition-all hover:scale-[1.02] hover:glow-violet">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-violet/15"><s.i className="size-4 text-violet" /></div>
                <div>
                  <div className="font-display font-bold">{s.c}</div>
                  <div className="text-xs text-muted-foreground">{s.t}</div>
                </div>
              </div>
              <div className="mt-6 font-display text-xl font-bold text-gradient">{s.h}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{s.q}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                <span className="text-muted-foreground">{s.a}</span>
                <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} className="size-3 fill-amber text-amber" />)}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- AI Section ---------- */
function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-50" />
      <Container>
        <SectionHeader
          eyebrow="FlowDesk AI"
          title={<>An <span className="text-gradient-violet">intelligent partner,</span> not another chatbot.</>}
          sub="FlowDesk AI sees every signal across your business — and acts on it. Predict revenue, detect anomalies, draft reports, and run workflows in English, Urdu and Hindi."
        />

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {/* Neural visualization */}
          <div className="relative col-span-1 overflow-hidden rounded-3xl glass-strong p-8 lg:col-span-2" style={{ minHeight: 420 }}>
            <div className="absolute inset-0 bg-dots opacity-20" />
            <NeuralViz />
            <div className="relative">
              <div className="flex items-center gap-2"><Brain className="size-4 text-violet" /><span className="font-mono text-xs uppercase tracking-wider text-violet">Live · AI Insight</span></div>
              <p className="mt-3 max-w-md font-display text-2xl font-bold">"Revenue is forecast to grow <span className="text-gradient">+24%</span> next quarter. Reallocate budget from paid social to WhatsApp campaigns for a 1.8× ROI."</p>
              <div className="mt-6 flex gap-2">
                <Btn className="px-4 py-2 text-xs">Apply suggestion</Btn>
                <Btn variant="ghost" className="px-4 py-2 text-xs">View reasoning</Btn>
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="grid gap-4">
            {[
              { i: TrendingUp, t: "Revenue prediction", d: "Forecast cashflow and pipeline 90 days out." },
              { i: AlertTriangle, t: "Anomaly detection", d: "Spot churn risk and fraud the moment it appears." },
              { i: Languages, t: "Multilingual support", d: "Native English, Urdu, Hindi — built for South Asia." },
              { i: Wand2, t: "Auto-generated reports", d: "Board-ready decks drafted from live data." },
            ].map((c, i) => (
              <div key={i} className="glass rounded-2xl p-5 transition hover:bg-white/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-xl bg-violet/15"><c.i className="size-4 text-violet" /></div>
                  <div className="font-semibold">{c.t}</div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function NeuralViz() {
  const nodes = useMemo(() => {
    const arr: { x: number; y: number; layer: number }[] = [];
    const layers = [3, 5, 5, 3];
    layers.forEach((count, li) => {
      for (let i = 0; i < count; i++) {
        arr.push({ x: 15 + li * 25, y: 20 + (i + 0.5) * (60 / count), layer: li });
      }
    });
    return arr;
  }, []);
  return (
    <svg className="absolute inset-0 size-full opacity-60" viewBox="0 0 100 80" preserveAspectRatio="none">
      {nodes.map((n, i) =>
        nodes.filter(m => m.layer === n.layer + 1).map((m, j) => (
          <line key={`${i}-${j}`} x1={n.x} y1={n.y} x2={m.x} y2={m.y} stroke="oklch(0.7 0.22 295 / 0.25)" strokeWidth="0.15" />
        ))
      )}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="0.8" fill="oklch(0.7 0.22 295)">
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}

/* ---------- ROI Calculator ---------- */
function ROI() {
  const [team, setTeam] = useState(25);
  const [tools, setTools] = useState(8);
  const savings = useMemo(() => {
    const subs = tools * 28 * team * 12;
    const productivity = team * 18000 * 0.22;
    const time = team * 6 * 48;
    return { subs: Math.round(subs), productivity: Math.round(productivity), time, total: Math.round(subs + productivity) };
  }, [team, tools]);

  return (
    <section className="relative py-32">
      <Container>
        <SectionHeader eyebrow="ROI calculator" title={<>See what your stack is <span className="text-gradient-violet">really costing you.</span></>} />

        <div className="mt-16 grid gap-8 rounded-3xl glass-strong p-8 md:p-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Team size</span>
                <span className="font-display text-xl font-bold">{team} people</span>
              </div>
              <input type="range" min={5} max={500} value={team} onChange={e => setTeam(+e.target.value)} className="mt-3 w-full accent-violet" />
            </div>
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Tools you use today</span>
                <span className="font-display text-xl font-bold">{tools} tools</span>
              </div>
              <input type="range" min={3} max={20} value={tools} onChange={e => setTools(+e.target.value)} className="mt-3 w-full accent-violet" />
            </div>
            <div className="rounded-2xl bg-violet/10 p-4 text-sm">
              <Sparkles className="mb-2 size-4 text-violet" />
              Most teams recover their FlowDesk investment in <span className="font-semibold text-foreground">under 6 weeks.</span>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            {[
              { l: "Software savings", v: `$${savings.subs.toLocaleString()}`, s: "/year", c: "violet", i: DollarSign },
              { l: "Productivity gains", v: `$${savings.productivity.toLocaleString()}`, s: "/year", c: "emerald", i: TrendingUp },
              { l: "Time saved", v: `${savings.time.toLocaleString()}h`, s: "/year", c: "cyan", i: Clock },
              { l: "Annual ROI", v: `${Math.round((savings.total / (team * 50 * 12)) * 100)}%`, s: "return", c: "amber", i: Gauge },
            ].map((s, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl bg-surface/80 p-6">
                <s.i className="size-4" style={{ color: `var(--${s.c})` }} />
                <div className="mt-3 font-display text-3xl font-bold text-gradient md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l} {s.s}</div>
              </div>
            ))}
            <div className="col-span-2 rounded-2xl p-6" style={{ background: "var(--gradient-primary)" }}>
              <div className="text-xs font-mono uppercase tracking-wider text-white/70">Total annual impact</div>
              <div className="mt-1 font-display text-5xl font-bold text-white">${savings.total.toLocaleString()}</div>
              <div className="mt-1 text-sm text-white/80">recovered for your business every year</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Bento Features ---------- */
function Bento() {
  return (
    <section id="product" className="relative py-32">
      <Container>
        <SectionHeader eyebrow="The platform" title={<>Everything your business runs on, <span className="text-gradient-violet">in one place.</span></>} />
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[180px]">
          {/* Dashboard — large */}
          <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <BarChart3 className="size-5 text-violet" />
              <h3 className="mt-3 font-display text-2xl font-bold">Unified Dashboard</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">Every metric, every team, every workflow — visible in one glance. Build custom views without code.</p>
            </div>
            <div className="absolute bottom-0 right-0 flex h-40 w-2/3 items-end gap-1 p-6 opacity-90">
              {[40,72,55,88,65,90,75,95,60,80].map((h,i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: "var(--gradient-primary)" }} />
              ))}
            </div>
          </div>
          {/* AI */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <Bot className="size-5 text-violet" />
            <h3 className="mt-3 font-display text-xl font-bold">AI Assistant</h3>
            <p className="mt-2 text-xs text-muted-foreground">Ask anything, get answers grounded in your business data.</p>
            <Sparkles className="absolute right-4 top-4 size-12 text-violet/20" />
          </div>
          {/* Automation */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <Workflow className="size-5 text-cyan" />
            <h3 className="mt-3 font-display text-xl font-bold">Automation</h3>
            <p className="mt-2 text-xs text-muted-foreground">Trigger workflows from any event across your stack.</p>
          </div>
          {/* CRM */}
          <div className="md:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <Users className="size-5 text-emerald" />
            <h3 className="mt-3 font-display text-xl font-bold">CRM</h3>
            <p className="mt-2 text-xs text-muted-foreground">Pipeline, conversations, deals — one timeline per customer.</p>
          </div>
          {/* Analytics */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <LineChart className="size-5 text-amber" />
            <h3 className="mt-3 font-display text-xl font-bold">Analytics</h3>
            <p className="mt-2 text-xs text-muted-foreground">Real-time business intelligence with predictive layers.</p>
          </div>
          {/* Tasks */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <Kanban className="size-5 text-violet" />
            <h3 className="mt-3 font-display text-xl font-bold">Projects & Tasks</h3>
            <p className="mt-2 text-xs text-muted-foreground">Plan, ship, review — across every team.</p>
          </div>
          {/* Security */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <Shield className="size-5 text-emerald" />
            <h3 className="mt-3 font-display text-xl font-bold">Enterprise Security</h3>
            <p className="mt-2 text-xs text-muted-foreground">SOC 2, SSO, role-based access. Compliance built-in.</p>
          </div>
          {/* Integrations */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
            <Plug className="size-5 text-cyan" />
            <h3 className="mt-3 font-display text-xl font-bold">200+ Integrations</h3>
            <p className="mt-2 max-w-md text-xs text-muted-foreground">Slack, WhatsApp, Stripe, QuickBooks, Google, Shopify — bring them all in, or replace them.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[MessageSquare, Mail, Receipt, FileSpreadsheet, FolderOpen, Video, Database, Globe].map((I, i) => (
                <div key={i} className="grid size-9 place-items-center rounded-lg bg-surface/80"><I className="size-3.5 text-muted-foreground" /></div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Comparison ---------- */
function Compare() {
  const rows = [
    ["Unified platform architecture", true, false],
    ["AI-powered business intelligence", true, "Limited"],
    ["Native WhatsApp workflows", true, false],
    ["Multilingual AI (EN · UR · HI)", true, false],
    ["Setup in under a day", true, false],
    ["Transparent, flat pricing", true, false],
    ["Built for growing businesses", true, "Enterprise only"],
  ];
  return (
    <section className="relative py-32">
      <Container>
        <SectionHeader eyebrow="vs. the alternatives" title={<>Why teams are choosing <span className="text-gradient-violet">FlowDesk.</span></>} />
        <div className="mt-16 overflow-hidden rounded-3xl glass-strong">
          <div className="grid grid-cols-3 border-b border-white/5 p-5 text-sm font-semibold">
            <div className="text-muted-foreground">Capability</div>
            <div className="text-center text-gradient-violet">FlowDesk</div>
            <div className="text-center text-muted-foreground">Traditional stack</div>
          </div>
          {rows.map(([label, a, b], i) => (
            <div key={i} className="grid grid-cols-3 border-b border-white/5 p-5 last:border-0 text-sm">
              <div>{label as string}</div>
              <div className="text-center">
                {a === true ? <Check className="mx-auto size-4 text-emerald" /> : <span className="text-muted-foreground">{a as string}</span>}
              </div>
              <div className="text-center">
                {b === true ? <Check className="mx-auto size-4 text-emerald" /> :
                 b === false ? <X className="mx-auto size-4 text-rose/60" /> :
                 <span className="text-muted-foreground">{b as string}</span>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const plans = [
    { n: "Starter", p: "$19", s: "per user / month", d: "For small teams getting out of tool chaos.", f: ["Up to 10 users", "Dashboard + CRM + Tasks", "10 automations", "Email support"], cta: "Start free", featured: false },
    { n: "Pro", p: "$39", s: "per user / month", d: "For growing businesses that want it all.", f: ["Unlimited users", "Full platform + AI Assistant", "Unlimited automations", "WhatsApp + Multilingual AI", "Priority support"], cta: "Start free trial", featured: true, save: "Save 62% vs. separate tools" },
    { n: "Enterprise", p: "Custom", s: "tailored to scale", d: "For organizations with custom needs.", f: ["SSO, SAML, audit logs", "Dedicated success manager", "Custom integrations", "On-prem options", "99.99% SLA"], cta: "Talk to sales", featured: false },
  ];
  return (
    <section id="pricing" className="relative py-32">
      <Container>
        <SectionHeader eyebrow="Pricing" title={<>One platform. <span className="text-gradient-violet">One simple price.</span></>} sub="Replace 8–12 SaaS subscriptions with FlowDesk and save up to 70%." />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-3xl p-8 transition ${p.featured ? "glass-strong glow-violet scale-105" : "glass"}`}>
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: "var(--gradient-primary)" }}>
                  Most popular
                </div>
              )}
              <div className="font-display text-lg font-bold">{p.n}</div>
              <p className="mt-1 text-xs text-muted-foreground">{p.d}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold text-gradient">{p.p}</span>
                <span className="text-xs text-muted-foreground">{p.s}</span>
              </div>
              {p.save && <div className="mt-2 inline-flex rounded-full bg-emerald/15 px-2 py-0.5 text-[10px] font-semibold text-emerald">{p.save}</div>}
              <ul className="mt-6 space-y-3">
                {p.f.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 text-emerald flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Btn variant={p.featured ? "primary" : "ghost"} className="mt-8 w-full">{p.cta} <ArrowRight className="size-4" /></Btn>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-80" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] glass-strong p-12 text-center md:p-20">
          <div className="absolute -top-32 left-1/2 size-96 -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
          <Eyebrow>Ready when you are</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-tight text-gradient md:text-7xl">
            Replace business chaos with clarity, growth and AI.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Join 4,200+ teams who consolidated their entire operation onto FlowDesk in under a week.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Btn>Start your free trial <ArrowRight className="size-4" /></Btn>
            <Btn variant="ghost"><PlayCircle className="size-4" /> Book a 20-min demo</Btn>
          </div>
          <div className="mt-8 text-xs text-muted-foreground">No credit card required · Cancel anytime · SOC 2 Type II</div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
              <Layers className="size-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold">FlowDesk</span>
            <span className="ml-2 text-xs text-muted-foreground">© 2026 · One Platform. Every Business. Zero Chaos.</span>
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a className="hover:text-foreground" href="#">Privacy</a>
            <a className="hover:text-foreground" href="#">Terms</a>
            <a className="hover:text-foreground" href="#">Security</a>
            <a className="hover:text-foreground" href="#">Status</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ToolChaos />
      <WorkflowCompare />
      <Transformation />
      <Stories />
      <AISection />
      <ROI />
      <Bento />
      <Compare />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
