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

/* ---------- scroll helper ---------- */
export const scrollToId = (id: string) => {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ---------- Nav ---------- */
function Nav() {
  const links: { l: string; id: string }[] = [
    { l: "Product", id: "product" },
    { l: "Solutions", id: "solutions" },
    { l: "AI Flow", id: "ai-flow" },
    { l: "Pricing", id: "pricing" },
    { l: "Customers", id: "customers" },
  ];
  return (
    <header className="fixed top-0 z-50 w-full">
      <Container className="mt-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3">
          <button onClick={() => scrollToId("top")} className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-lg" style={{ background: "var(--gradient-primary)" }}>
              <Layers className="size-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">FlowDesk</span>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(({ l, id }) => (
              <button key={l} onClick={() => scrollToId(id)} className="text-sm text-muted-foreground transition hover:text-foreground">
                {l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Btn className="px-4 py-2" onClick={() => scrollToId("contact")}>
              <PlayCircle className="size-3.5" /> Book a Demo
            </Btn>
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
              The operating system for{" "}
              <span className="text-gradient-violet">your entire business.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              FlowDesk replaces the 10+ disconnected tools your team juggles every day — CRM, projects, finance, analytics, communication and AI — with one intelligent platform. Less switching. Less guessing. More shipping.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn onClick={() => scrollToId("pricing")}>Start free 14-day trial <ArrowRight className="size-4" /></Btn>
              <Btn variant="ghost" onClick={() => scrollToId("contact")}><PlayCircle className="size-4" /> Book a demo</Btn>
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

            <div className="mt-8 grid grid-cols-3 gap-2.5">
              {[
                { I: MessageSquare, n: "WhatsApp", u: "Chats" },
                { I: FileSpreadsheet, n: "Sheets", u: "Reports" },
                { I: FolderOpen, n: "Drive", u: "Files" },
                { I: Mail, n: "Gmail", u: "Email" },
                { I: Video, n: "Zoom", u: "Calls" },
                { I: Kanban, n: "Trello", u: "Tasks" },
                { I: Receipt, n: "QuickBooks", u: "Invoices" },
                { I: Users, n: "HubSpot", u: "CRM" },
                { I: BarChart3, n: "Looker", u: "BI" },
              ].map(({ I, n, u }, i) => (
                <div key={i} className="rounded-xl border border-rose/20 bg-surface/40 p-3">
                  <div className="flex items-center gap-2">
                    <div className="grid size-7 place-items-center rounded-md bg-rose/10">
                      <I className="size-3.5 text-rose/80" />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-[11px] font-semibold text-foreground/90">{n}</div>
                      <div className="truncate text-[9px] uppercase tracking-wider text-muted-foreground">{u}</div>
                    </div>
                  </div>
                  <div className="mt-3 h-1 w-full rounded-full bg-rose/15">
                    <div className="h-full rounded-full bg-rose/50" style={{ width: `${20 + i * 8}%` }} />
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[9px] text-muted-foreground">
                    <span>Siloed</span>
                    <span className="text-rose/80">No sync</span>
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
    <section id="customers" className="relative py-32">
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
              <Btn variant={p.featured ? "primary" : "ghost"} className="mt-8 w-full" onClick={() => scrollToId("contact")}>{p.cta} <ArrowRight className="size-4" /></Btn>
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
            <Btn onClick={() => scrollToId("pricing")}>Start your free trial <ArrowRight className="size-4" /></Btn>
            <Btn variant="ghost" onClick={() => scrollToId("contact")}><PlayCircle className="size-4" /> Book a 20-min demo</Btn>
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

/* ---------- Solution Overview (Problem → Platform → Outcome) ---------- */
function Solution() {
  const inputs = [
    { i: MessageSquare, n: "Conversations" },
    { i: Users, n: "Customers" },
    { i: Receipt, n: "Invoices" },
    { i: Kanban, n: "Projects" },
    { i: FileSpreadsheet, n: "Spreadsheets" },
    { i: Mail, n: "Email" },
  ];
  const outputs = [
    { i: TrendingUp, n: "Revenue up", c: "emerald" },
    { i: Clock, n: "Hours saved", c: "cyan" },
    { i: Brain, n: "Smarter decisions", c: "violet" },
    { i: Gauge, n: "Lower costs", c: "amber" },
  ];
  const pillars = [
    { i: Plug2, t: "Unify", d: "Connect every tool and team. One source of truth replaces ten broken ones.", c: "violet" },
    { i: Workflow, t: "Automate", d: "Turn repetitive busywork into background workflows that just run.", c: "cyan" },
    { i: Brain, t: "Decide", d: "FlowDesk AI surfaces what matters and recommends the next best action.", c: "emerald" },
  ];

  return (
    <section id="solutions" className="relative py-32">
      <Container>
        <SectionHeader
          eyebrow="The solution"
          title={<>One platform that turns <span className="text-gradient-violet">scattered data</span> into <span className="text-gradient">real outcomes.</span></>}
          sub="FlowDesk ingests everything your business already runs on, organizes it into a single operating layer, and gives every team — and every AI agent — the same live view."
        />

        {/* Flow diagram: inputs → core → outputs */}
        <div className="relative mt-20 overflow-hidden rounded-3xl glass-strong p-8 md:p-12">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto_1.2fr_auto_1fr]">
            {/* Inputs */}
            <div className="space-y-2">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-rose">Messy inputs</div>
              {inputs.map((t, i) => (
                <div key={i} className="glass flex items-center gap-2 rounded-xl px-3 py-2">
                  <t.i className="size-3.5 text-muted-foreground" />
                  <span className="text-xs">{t.n}</span>
                </div>
              ))}
            </div>

            <MoveRight className="mx-auto hidden size-6 text-violet/60 md:block" />

            {/* Core: FlowDesk OS */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl opacity-40 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
              <div className="relative rounded-3xl p-6 text-center" style={{ background: "var(--gradient-mesh)", border: "1px solid oklch(0.7 0.22 295 / 0.3)" }}>
                <div className="mx-auto grid size-14 place-items-center rounded-2xl" style={{ background: "var(--gradient-primary)" }}>
                  <Layers className="size-6 text-white" />
                </div>
                <div className="mt-3 font-display text-lg font-bold">FlowDesk OS</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Unified data + AI layer</div>
                <div className="mt-4 grid grid-cols-2 gap-1.5 text-left">
                  {pillars.map((p, i) => (
                    <div key={i} className="glass rounded-lg p-2">
                      <p.i className="size-3" style={{ color: `var(--${p.c})` }} />
                      <div className="mt-1 text-[10px] font-semibold">{p.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <MoveRight className="mx-auto hidden size-6 text-emerald/60 md:block" />

            {/* Outputs */}
            <div className="space-y-2">
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-emerald">Real outcomes</div>
              {outputs.map((t, i) => (
                <div key={i} className="glass-strong flex items-center gap-2 rounded-xl px-3 py-2" style={{ borderColor: `var(--${t.c})` }}>
                  <t.i className="size-3.5" style={{ color: `var(--${t.c})` }} />
                  <span className="text-xs font-semibold">{t.n}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Three pillars */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl glass p-7 transition hover:glow-violet">
              <div className="grid size-11 place-items-center rounded-xl" style={{ background: `color-mix(in oklab, var(--${p.c}) 18%, transparent)` }}>
                <p.i className="size-5" style={{ color: `var(--${p.c})` }} />
              </div>
              <div className="mt-5 font-display text-2xl font-bold">{p.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Customer Journey ---------- */
function Journey() {
  const steps = [
    {
      when: "Day 1",
      title: "Connect in minutes",
      desc: "Plug FlowDesk into Gmail, WhatsApp, Stripe, Shopify, QuickBooks, Slack and 200+ more. One click each. We pull years of history automatically.",
      icon: Plug2,
      c: "violet",
      stat: "5 min",
      statLabel: "average setup",
    },
    {
      when: "Day 2",
      title: "See your whole business",
      desc: "Every customer, deal, invoice and project appears in one live workspace. No more chasing spreadsheets across five tabs.",
      icon: BarChart3,
      c: "cyan",
      stat: "1 view",
      statLabel: "instead of 10",
    },
    {
      when: "Week 1",
      title: "Automate the busywork",
      desc: "Pre-built workflows kick in: invoices send themselves, follow-ups go out, reports compile overnight. Your team gets their week back.",
      icon: Workflow,
      c: "emerald",
      stat: "22 hrs",
      statLabel: "saved per person / week",
    },
    {
      when: "Week 2",
      title: "Let AI take the wheel",
      desc: "FlowDesk AI starts predicting churn, flagging anomalies, drafting reports and answering customers in English, Urdu and Hindi.",
      icon: Brain,
      c: "violet",
      stat: "41%",
      statLabel: "of tickets auto-resolved",
    },
    {
      when: "Month 1",
      title: "Scale with clarity",
      desc: "Cancel the old subscriptions. Onboard new hires in hours, not weeks. Run the business from one dashboard — and watch margins expand.",
      icon: Rocket,
      c: "amber",
      stat: "62%",
      statLabel: "lower software cost",
    },
  ];

  return (
    <section className="relative py-32">
      <Container>
        <SectionHeader
          eyebrow="How it works"
          title={<>From signup to <span className="text-gradient-violet">fully transformed</span> in 30 days.</>}
          sub="Most teams unify their entire operation on FlowDesk within a month. Here's exactly what that looks like."
        />

        <div className="relative mt-20">
          {/* Vertical timeline rail */}
          <div className="absolute left-6 top-2 bottom-2 hidden w-px md:left-1/2 md:block" style={{ background: "linear-gradient(180deg, transparent, oklch(0.7 0.22 295 / 0.4), oklch(0.78 0.16 165 / 0.4), transparent)" }} />

          <div className="space-y-8">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <div key={i} className="relative grid items-center gap-6 md:grid-cols-2">
                  {/* Node marker */}
                  <div className="absolute left-6 hidden -translate-x-1/2 md:left-1/2 md:block">
                    <div className="relative grid size-10 place-items-center rounded-full glass-strong">
                      <div className="absolute inset-0 animate-pulse-glow rounded-full opacity-40" style={{ background: `var(--${s.c})` }} />
                      <s.icon className="relative size-4" style={{ color: `var(--${s.c})` }} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`${right ? "md:col-start-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                    <div className="group relative overflow-hidden rounded-2xl glass p-7 transition hover:glow-violet">
                      <div className={`flex items-center gap-2 ${right ? "" : "md:justify-end"}`}>
                        <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: `var(--${s.c})` }}>{s.when}</span>
                        <span className="text-[10px] text-muted-foreground">·</span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Step {i + 1}</span>
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>

                  {/* Stat */}
                  <div className={`${right ? "md:col-start-1 md:row-start-1 md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className={`inline-flex flex-col gap-1 ${right ? "md:items-end" : ""}`}>
                      <div className="font-display text-5xl font-bold text-gradient md:text-6xl">{s.stat}</div>
                      <div className="text-xs text-muted-foreground">{s.statLabel}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- AI Agents Grid ---------- */
function AIAgents() {
  const agents = [
    { i: TrendingUp, name: "Revenue Agent", role: "Sales & Pipeline", c: "violet",
      tasks: ["Scores leads in real time", "Drafts personalized follow-ups", "Forecasts quarterly revenue"],
      sample: "3 deals worth $48K are stuck in 'Proposal' for 12+ days. Want me to draft nudge emails?" },
    { i: MessageSquare, name: "Support Agent", role: "Customer Service", c: "cyan",
      tasks: ["Resolves 41% of tickets unaided", "Detects sentiment & churn risk", "Replies in English, Urdu, Hindi"],
      sample: "Auto-resolved 87 tickets today. 4 high-risk conversations escalated to humans." },
    { i: Receipt, name: "Finance Agent", role: "Books & Cashflow", c: "emerald",
      tasks: ["Categorizes every expense", "Flags anomalies & duplicates", "Predicts 90-day cashflow"],
      sample: "Unusual $2,340 vendor charge from 'CloudHost' — 4× last month's average. Hold payment?" },
    { i: Users, name: "People Agent", role: "HR & Hiring", c: "violet",
      tasks: ["Screens resumes against role rubric", "Schedules interviews automatically", "Drafts performance reviews"],
      sample: "12 of 84 applicants match Senior Engineer criteria. Top match: 96% fit. Schedule call?" },
    { i: Wand2, name: "Marketing Agent", role: "Campaigns & Content", c: "cyan",
      tasks: ["Generates campaigns from a brief", "A/B tests subject lines live", "Re-allocates budget by ROI"],
      sample: "Reallocated $1.2K from Facebook to WhatsApp. Projected lift: +38% conversions this week." },
    { i: Workflow, name: "Ops Agent", role: "Workflows & Tasks", c: "emerald",
      tasks: ["Builds automations from plain English", "Routes work to the right person", "Watches SLAs 24/7"],
      sample: "Built a 6-step refund workflow from your message. Saving ~9 hrs/week. Activate?" },
  ];
  return (
    <section id="agents" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-40" />
      <Container>
        <SectionHeader
          eyebrow="AI Agents"
          title={<>Six AI teammates that <span className="text-gradient-violet">actually do the work.</span></>}
          sub="Not chatbots. Not co-pilots. Real autonomous agents that read your data, take actions, and report back — across every department."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl glass p-6 transition hover:glow-violet">
              <div className="absolute -right-10 -top-10 size-32 rounded-full opacity-10 blur-2xl transition group-hover:opacity-30" style={{ background: `var(--${a.c})` }} />
              <div className="relative flex items-start justify-between">
                <div className="grid size-12 place-items-center rounded-xl glass-strong">
                  <a.i className="size-5" style={{ color: `var(--${a.c})` }} />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald">
                  <span className="size-1.5 animate-pulse-glow rounded-full bg-emerald" />Active
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{a.name}</h3>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{a.role}</p>
              <ul className="mt-4 space-y-2">
                {a.tasks.map((t, j) => (
                  <li key={j} className="flex gap-2 text-xs text-muted-foreground">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-emerald" /><span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-white/5 bg-black/30 p-3">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="size-3 text-violet" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-violet">Latest insight</span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-foreground/80">{a.sample}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- AI Playground / Prompt-to-Action ---------- */
function AIPlayground() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 2200);
    return () => clearInterval(t);
  }, []);
  const actions = [
    { i: Database, t: "Querying CRM, invoices & support logs", c: "cyan" },
    { i: Brain, t: "Correlating churn signals across 14 accounts", c: "violet" },
    { i: Workflow, t: "Drafting retention workflow + emails", c: "emerald" },
    { i: Check, t: "Ready to deploy — awaiting approval", c: "emerald" },
  ];
  return (
    <section className="relative overflow-hidden py-32">
      <Container>
        <SectionHeader
          eyebrow="Prompt → Action"
          title={<>Ask in plain English. Watch <span className="text-gradient-violet">work get done.</span></>}
          sub="FlowDesk AI doesn't just answer. It reasons across your data, builds a plan, and executes — with you in the loop."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Prompt side */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl glass-strong p-6">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-rose" />
                <div className="size-2 rounded-full" style={{ background: "oklch(0.85 0.18 90)" }} />
                <div className="size-2 rounded-full bg-emerald" />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">flowdesk · ai</span>
              </div>
              <div className="mt-5 space-y-4">
                <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-violet/15 p-4 text-sm">
                  Find customers likely to churn this month and build a retention plan.
                </div>
                <div className="max-w-[95%] rounded-2xl rounded-tl-sm glass p-4 text-sm">
                  <div className="flex items-center gap-2 text-xs text-violet">
                    <Brain className="size-3.5" /> Reasoning across 6 data sources…
                  </div>
                  <div className="mt-3 space-y-2">
                    {actions.map((a, i) => (
                      <div key={i} className={`flex items-center gap-2 rounded-lg px-2 py-1.5 transition ${i === step ? "glass-strong" : "opacity-50"}`}>
                        <a.i className="size-3.5" style={{ color: `var(--${a.c})` }} />
                        <span className="text-xs">{a.t}</span>
                        {i < step && <Check className="ml-auto size-3.5 text-emerald" />}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Btn className="px-3 py-2 text-xs"><Check className="size-3.5" />Approve & run</Btn>
                  <Btn variant="ghost" className="px-3 py-2 text-xs">Edit plan</Btn>
                </div>
              </div>
            </div>
          </div>

          {/* Output side */}
          <div className="lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { i: AlertTriangle, c: "rose", t: "14 at-risk accounts", d: "Combined ARR: $186K. Top risk: Acme Co (92%)." },
                { i: Mail, c: "violet", t: "12 personalized emails", d: "Drafted in customer's preferred language and tone." },
                { i: Gauge, c: "cyan", t: "3-step retention flow", d: "Discount → check-in call → success plan handoff." },
                { i: LineChart, c: "emerald", t: "Projected save", d: "Estimated $134K ARR retained if launched today." },
              ].map((o, i) => (
                <div key={i} className="rounded-2xl glass p-5">
                  <div className="grid size-10 place-items-center rounded-xl glass-strong">
                    <o.i className="size-4" style={{ color: `var(--${o.c})` }} />
                  </div>
                  <div className="mt-4 font-semibold">{o.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{o.d}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl glass p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4 text-violet" />
                  <span className="text-sm font-semibold">Model routing</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">auto-optimized</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                {[
                  { m: "Reasoning", v: "Claude 3.5" },
                  { m: "Drafting", v: "GPT-4o" },
                  { m: "Local / PII", v: "Llama 3.1" },
                ].map((m, i) => (
                  <div key={i} className="rounded-lg border border-white/5 bg-black/30 p-2">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{m.m}</div>
                    <div className="text-xs font-semibold">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- AI Capabilities Matrix ---------- */
function AICapabilities() {
  const rows = [
    { area: "Sales", cap: "Lead scoring, deal coaching, forecast", icon: TrendingUp, save: "12 hrs/wk" },
    { area: "Support", cap: "Auto-replies, sentiment, escalation", icon: MessageSquare, save: "41% tickets" },
    { area: "Finance", cap: "Categorization, anomaly, cashflow", icon: Receipt, save: "9 hrs/wk" },
    { area: "Marketing", cap: "Campaign drafts, A/B, budget shifts", icon: Wand2, save: "+38% ROAS" },
    { area: "HR", cap: "Screening, scheduling, reviews", icon: Users, save: "7 hrs/wk" },
    { area: "Operations", cap: "Workflow generation, SLA watch", icon: Workflow, save: "22 hrs/wk" },
  ];
  return (
    <section className="relative py-24">
      <Container>
        <SectionHeader
          eyebrow="AI everywhere"
          title={<>One AI brain. <span className="text-gradient-violet">Every module.</span></>}
          sub="The same intelligence powers every corner of FlowDesk — so context, language, and decisions follow your work."
        />
        <div className="mt-14 overflow-hidden rounded-3xl glass-strong">
          <div className="grid grid-cols-12 border-b border-white/5 bg-white/[0.02] px-6 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            <div className="col-span-3">Department</div>
            <div className="col-span-7">AI capability</div>
            <div className="col-span-2 text-right">Avg. impact</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-12 items-center border-b border-white/5 px-6 py-4 transition last:border-0 hover:bg-white/[0.03]">
              <div className="col-span-3 flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-lg glass">
                  <r.icon className="size-4 text-violet" />
                </div>
                <span className="font-semibold">{r.area}</span>
              </div>
              <div className="col-span-7 text-sm text-muted-foreground">{r.cap}</div>
              <div className="col-span-2 text-right font-mono text-sm text-emerald">{r.save}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Integrations ---------- */
function Integrations() {
  const tools = [
    "WhatsApp","Slack","Gmail","Outlook","Stripe","PayPal","HubSpot","Salesforce",
    "Notion","Zoom","Google Drive","Dropbox","Shopify","QuickBooks","Xero","Zapier",
    "Meta Ads","Google Ads","Twilio","Mailchimp","Asana","Jira",
  ];
  return (
    <section className="relative py-28">
      <Container>
        <SectionHeader
          eyebrow="Integrations"
          title={<>Plays nicely with <span className="text-gradient-violet">everything you already use.</span></>}
          sub="200+ native integrations. Two-way sync, real-time webhooks, no middleware. Bring your stack — FlowDesk becomes the layer that ties it together."
        />
        <div className="mt-14 grid grid-cols-3 gap-3 md:grid-cols-6">
          {tools.map((t, i) => (
            <div key={i} className="group flex items-center justify-center rounded-2xl glass px-3 py-5 transition hover:glow-violet">
              <div className="flex items-center gap-2">
                <div className="grid size-7 place-items-center rounded-md glass-strong">
                  <Plug className="size-3.5 text-violet" />
                </div>
                <span className="text-xs font-semibold text-foreground/80 group-hover:text-foreground">{t}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't see yours? Build a custom integration in minutes with our visual workflow builder.
        </p>
      </Container>
    </section>
  );
}

/* ---------- Security & Trust ---------- */
function Security() {
  const items = [
    { i: Shield, t: "SOC 2 Type II", d: "Audited annually. Reports on request." },
    { i: Lock, t: "End-to-end encryption", d: "AES-256 at rest, TLS 1.3 in transit." },
    { i: Globe, t: "Regional data residency", d: "EU, US, India, UAE — your data, your region." },
    { i: Brain, t: "Private AI mode", d: "PII never leaves your tenant. Local models for sensitive workloads." },
    { i: Activity, t: "99.99% uptime SLA", d: "Multi-region failover, real-time status." },
    { i: Users, t: "Granular RBAC + SSO", d: "SAML, SCIM, Okta, Azure AD, Google Workspace." },
  ];
  return (
    <section className="relative py-28">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />
      <Container>
        <SectionHeader
          eyebrow="Enterprise-grade"
          title={<>Built for teams that <span className="text-gradient-violet">can't afford to gamble.</span></>}
          sub="Security, privacy and reliability are not an upgrade tier. They ship with every plan."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl glass p-6 transition hover:bg-white/[0.04]">
              <div className="grid size-11 place-items-center rounded-xl bg-violet/15">
                <it.i className="size-5 text-violet" />
              </div>
              <div className="mt-4 font-display text-lg font-bold">{it.t}</div>
              <div className="mt-1.5 text-sm text-muted-foreground">{it.d}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Stats Band ---------- */
function StatsBand() {
  const stats = [
    { n: "12,400+", l: "Businesses unified" },
    { n: "62%", l: "Avg. software cost cut" },
    { n: "22 hrs", l: "Saved per employee / week" },
    { n: "41%", l: "Tickets auto-resolved" },
    { n: "4.9 / 5", l: "G2 customer rating" },
  ];
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl glass-strong p-8 md:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl font-bold text-gradient md:text-5xl">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const qs = [
    { q: "How is FlowDesk different from a 'no-code' or 'all-in-one' tool?",
      a: "Most 'all-in-one' tools bundle separate apps with shared login. FlowDesk is one data model — your CRM, support, projects, finance and analytics share the same records. That's why AI works: it has full context, not pieces." },
    { q: "Do I have to migrate everything on day one?",
      a: "No. Start with one module. FlowDesk's two-way sync keeps your existing tools in lockstep so you can adopt module-by-module with zero downtime." },
    { q: "Is the AI safe to use on real business data?",
      a: "Yes. Your data is isolated per tenant, never used to train shared models, and Private AI mode runs sensitive workloads on local models. SOC 2 Type II and regional residency are standard." },
    { q: "Which languages does the AI support?",
      a: "FlowDesk AI is multilingual by default with first-class support for English, Urdu and Hindi — including support replies, reports and voice. 20+ other languages are supported." },
    { q: "How long does setup take?",
      a: "Most teams are live in under a week. Templates for common workflows (sales, support, hiring, finance) get you to value on day one." },
    { q: "What happens to my data if I leave?",
      a: "Full export at any time — schema-preserved JSON, CSV and SQL. No vendor lock-in, no hostage data." },
  ];
  return (
    <section className="py-28">
      <Container>
        <SectionHeader
          eyebrow="Questions"
          title={<>Things teams ask <span className="text-gradient-violet">before they switch.</span></>}
        />
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {qs.map((it, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full rounded-2xl glass p-5 text-left transition hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">{it.q}</span>
                  <ChevronRight className={`size-4 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-90 text-violet" : ""}`} />
                </div>
                {isOpen && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.a}</p>}
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Enterprise Pain → Resolution ---------- */
function EnterpriseIssues() {
  const items = [
    { i: Layers, issue: "Fragmented tool sprawl",
      pain: "12–18 apps per team. Licenses overlap, data silos grow, IT loses visibility.",
      fix: "FlowDesk replaces 10+ tools with one unified workspace and a single data model.",
      stat: "−62% software cost", sIcon: DollarSign },
    { i: Database, issue: "Disconnected data & reports",
      pain: "Numbers never match. Finance, sales and ops each have their own version of truth.",
      fix: "One real-time data layer feeds every dashboard, report and AI insight automatically.",
      stat: "1 source of truth", sIcon: Activity },
    { i: Clock, issue: "Manual, repetitive work",
      pain: "Teams waste 22+ hours a week copy-pasting data between systems.",
      fix: "Visual + AI-built workflows automate handoffs across CRM, support, finance and HR.",
      stat: "22 hrs saved / wk", sIcon: Workflow },
    { i: AlertTriangle, issue: "Slow, blind decisions",
      pain: "Leadership waits days for reports. By then, the opportunity (or the churn) is gone.",
      fix: "AI surfaces risks, forecasts revenue and recommends actions in real time.",
      stat: "Decisions in minutes", sIcon: Brain },
    { i: Shield, issue: "Compliance & security gaps",
      pain: "Every extra SaaS app is another login, another breach surface, another audit headache.",
      fix: "SOC 2, SSO, RBAC, regional residency and Private AI — built in, not bolted on.",
      stat: "SOC 2 · ISO 27001", sIcon: Lock },
    { i: Users, issue: "Poor cross-team collaboration",
      pain: "Sales doesn't see support tickets. Finance doesn't see deals. Context dies in inboxes.",
      fix: "Shared records and live activity timelines give every team the full customer picture.",
      stat: "100% shared context", sIcon: GitBranch },
  ];
  return (
    <section id="enterprise" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-40" />
      <Container>
        <SectionHeader
          eyebrow="Enterprise problems · solved"
          title={<>The 6 problems killing <span className="text-gradient-violet">growing businesses</span> — and how FlowDesk ends them.</>}
          sub="Every enterprise we talk to lives the same six pain points. Here's exactly how FlowDesk resolves each one."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl glass p-6 transition hover:glow-violet">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-rose/10">
                  <it.i className="size-5 text-rose" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-rose">Problem</div>
                  <h3 className="font-display text-lg font-bold leading-tight">{it.issue}</h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{it.pain}</p>

              <div className="my-5 flex items-center gap-2">
                <div className="h-px flex-1 bg-gradient-to-r from-rose/40 to-violet/40" />
                <MoveRight className="size-4 text-violet" />
                <div className="h-px flex-1 bg-gradient-to-r from-violet/40 to-emerald/40" />
              </div>

              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl bg-emerald/10">
                  <Check className="size-5 text-emerald" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-emerald">FlowDesk solves it</div>
                  <p className="text-sm font-semibold text-foreground">{it.fix}</p>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1.5">
                <it.sIcon className="size-3.5 text-violet" />
                <span className="font-mono text-[11px] font-semibold text-foreground/90">{it.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- About Us ---------- */
function About() {
  const values = [
    { i: Target, t: "Customer-obsessed", d: "Every feature ships only after a real team validates it solves a real pain." },
    { i: Brain, t: "AI-native, not AI-bolted", d: "FlowDesk was built around a shared data brain from day one." },
    { i: Shield, t: "Trust by default", d: "Security, privacy and reliability come on the free plan — not as an upsell." },
    { i: Globe, t: "Built for the world", d: "Multilingual, multi-currency, multi-region — designed for global teams." },
  ];
  return (
    <section id="about" className="relative py-32">
      <Container>
        <SectionHeader
          eyebrow="About FlowDesk"
          title={<>We're building the <span className="text-gradient-violet">operating system</span> the modern business deserves.</>}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>FlowDesk started in 2022, when our founders — operators from Stripe, HubSpot and a Y Combinator startup — kept watching the same story play out: ambitious teams drowning in 15 disconnected SaaS apps, copy-pasting data, and flying blind into decisions.</p>
              <p>We believed the answer wasn't another app. It was a new layer: one shared data model, one AI brain, one workspace — covering every department, in every language, for every region.</p>
              <p>Today, <span className="font-semibold text-foreground">12,400+ businesses</span> across 40+ countries run their entire operation on FlowDesk — from 3-person startups to 5,000-person enterprises.</p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "2022", l: "Founded" },
                { n: "40+", l: "Countries" },
                { n: "$48M", l: "Series B" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl glass p-4 text-center">
                  <div className="font-display text-2xl font-bold text-gradient">{s.n}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl glass p-6 transition hover:glow-violet">
                <div className="grid size-11 place-items-center rounded-xl bg-violet/15">
                  <v.i className="size-5 text-violet" />
                </div>
                <div className="mt-4 font-display text-lg font-bold">{v.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl glass-strong p-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Backed by</div>
              <div className="mt-2 font-display text-xl font-bold">Sequoia · a16z · Tiger Global · Y Combinator</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[Building2, Rocket, Star, Users].map((I, i) => (
                  <div key={i} className="grid size-10 place-items-center rounded-full glass-strong">
                    <I className="size-4 text-violet" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">220+ teammates · remote-first</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const channels = [
    { i: Mail, t: "Email us", d: "hello@flowdesk.com", sub: "Replies within 4 business hours" },
    { i: MessageSquare, t: "Live chat", d: "Chat with the team", sub: "24/7 in English, Urdu, Hindi" },
    { i: Building2, t: "Enterprise sales", d: "sales@flowdesk.com", sub: "For teams of 50+" },
    { i: Globe, t: "Offices", d: "San Francisco · London · Dubai · Karachi", sub: "Remote-first, globally distributed" },
  ];
  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 -z-10 bg-dots opacity-30" />
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient-violet">talk.</span></>}
          sub="Questions, a custom demo, or an enterprise rollout — pick the channel that works for you. A real human will respond."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl glass-strong p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Cooper"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-violet focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Work email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-violet focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Company</label>
                <input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Acme Inc."
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-violet focus:outline-none"
                />
              </div>
              <div className="mt-5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">How can we help?</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your team, the tools you're replacing, and what success looks like…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-violet focus:outline-none"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="size-3.5 text-emerald" /> Encrypted & SOC 2 compliant
                </div>
                <Btn type="submit" className="px-6 py-3">
                  {sent ? <><Check className="size-4" /> Message sent</> : <>Send message <ArrowRight className="size-4" /></>}
                </Btn>
              </div>
              {sent && (
                <div className="mt-4 rounded-xl bg-emerald/10 px-4 py-3 text-sm text-emerald">
                  Thanks {form.name || "there"} — we'll be in touch within 4 business hours.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-4 lg:col-span-2">
            {channels.map((c, i) => (
              <div key={i} className="rounded-2xl glass p-5 transition hover:bg-white/[0.04]">
                <div className="flex items-start gap-4">
                  <div className="grid size-11 place-items-center rounded-xl bg-violet/15">
                    <c.i className="size-5 text-violet" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{c.t}</div>
                    <div className="mt-1 font-semibold text-foreground">{c.d}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl glass-strong p-5">
              <div className="flex items-center gap-2 text-emerald">
                <span className="size-2 animate-pulse-glow rounded-full bg-emerald" />
                <span className="font-mono text-[10px] uppercase tracking-wider">All systems normal</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">99.99% uptime over the last 90 days.</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Landing() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <StatsBand />
      <ToolChaos />
      <EnterpriseIssues />
      <Solution />
      <Journey />
      <WorkflowCompare />
      <AIFlow />
      <AISection />
      <AIAgents />
      <AIPlayground />
      <AICapabilities />
      <Stories />
      <Transformation />
      <Integrations />
      <ROI />
      <Bento />
      <Security />
      <Compare />
      <Pricing />
      <FAQ />
      <About />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ---------- AI Flow — animated end-to-end pipeline ---------- */
function AIFlow() {
  const [step, setStep] = useState(0);
  const steps = [
    { i: Database, t: "Ingest", d: "Every signal — CRM, support, billing, ops — streams into one unified data brain.", color: "violet" },
    { i: Brain, t: "Understand", d: "FlowDesk AI labels intents, links records, scores risk and opportunity in real time.", color: "indigo" },
    { i: Workflow, t: "Decide", d: "Multi-model reasoning routes each task to the right policy, agent or human owner.", color: "violet" },
    { i: Bot, t: "Act", d: "Autonomous agents draft replies, update records, trigger workflows and send approvals.", color: "emerald" },
    { i: TrendingUp, t: "Grow", d: "Revenue lifts, churn drops, SLAs hit. Every action loops back to retrain the model.", color: "amber" },
  ];
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % steps.length), 2200);
    return () => clearInterval(t);
  }, [steps.length]);

  const sources = [
    { i: MessageSquare, n: "WhatsApp" }, { i: Mail, n: "Email" }, { i: Receipt, n: "Stripe" },
    { i: Users, n: "CRM" }, { i: FileSpreadsheet, n: "Sheets" }, { i: Kanban, n: "Tasks" },
  ];
  const outcomes = [
    { i: TrendingUp, n: "+24% revenue", c: "emerald" },
    { i: Clock, n: "−22 hrs/week", c: "violet" },
    { i: Shield, n: "0 SLA breaches", c: "indigo" },
    { i: DollarSign, n: "−62% cost", c: "amber" },
  ];

  return (
    <section id="ai-flow" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 bg-mesh opacity-60" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-20" />
      <Container>
        <SectionHeader
          eyebrow="The AI Flow"
          title={<>Watch AI actually <span className="text-gradient-violet">run your business.</span></>}
          sub="Five live stages — from raw signal to revenue. This is the loop powering every FlowDesk customer, animated in real time."
        />

        {/* Stage chips */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.t}
              onClick={() => setStep(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                step === i ? "glass-strong glow-violet text-foreground" : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className={`grid size-5 place-items-center rounded-full font-mono text-[10px] ${step === i ? "bg-violet text-white" : "bg-white/5"}`}>{i + 1}</span>
              {s.t}
            </button>
          ))}
        </div>

        {/* Pipeline visual */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Sources */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Your business signals</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {sources.map((s, i) => (
                <div key={i} className="glass flex items-center gap-2 rounded-xl p-3">
                  <s.i className="size-4 text-violet" />
                  <span className="truncate text-xs font-semibold">{s.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Animated brain */}
          <div className="relative overflow-hidden rounded-3xl glass-strong p-6 lg:col-span-6" style={{ minHeight: 360 }}>
            <NeuralViz />
            {/* Flowing lines */}
            <svg className="absolute inset-0 size-full" viewBox="0 0 100 60" preserveAspectRatio="none">
              {[18, 30, 42].map((y, i) => (
                <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="oklch(0.7 0.22 295 / 0.25)" strokeWidth="0.15" strokeDasharray="2 2">
                  <animate attributeName="stroke-dashoffset" from="0" to="-20" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                </line>
              ))}
            </svg>
            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="size-2 animate-pulse-glow rounded-full bg-emerald" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald">AI active · stage {step + 1}/5</span>
              </div>
              <div className="mt-6 flex flex-1 flex-col items-center justify-center text-center">
                <div className="grid size-20 place-items-center rounded-2xl glow-violet transition-all" style={{ background: "var(--gradient-primary)" }}>
                  {(() => { const Icon = steps[step].i; return <Icon className="size-9 text-white" />; })()}
                </div>
                <div className="mt-5 font-display text-3xl font-bold text-gradient">{steps[step].t}</div>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">{steps[step].d}</p>
              </div>
              <div className="mt-4 flex gap-1.5">
                {steps.map((_, i) => (
                  <div key={i} className={`h-1 flex-1 overflow-hidden rounded-full ${step === i ? "bg-violet/30" : "bg-white/5"}`}>
                    {step === i && <div className="h-full w-full origin-left animate-fade-in bg-violet" style={{ animation: "scale-in 2.2s linear" }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Business outcomes</div>
            <div className="mt-3 grid gap-2">
              {outcomes.map((o, i) => (
                <div key={i} className="glass flex items-center justify-between rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <o.i className={`size-4 text-${o.c}`} />
                    <span className="text-xs font-semibold">{o.n}</span>
                  </div>
                  <ChevronRight className="size-3.5 text-muted-foreground" />
                </div>
              ))}
            </div>
            <Btn className="mt-4 w-full" onClick={() => scrollToId("contact")}>
              See it on your data <ArrowRight className="size-4" />
            </Btn>
          </div>
        </div>

        {/* How AI grows your business */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            { i: TrendingUp, t: "Grows revenue", d: "AI identifies the next-best action for every deal, ticket and campaign — and runs it.", stat: "+24% pipeline" },
            { i: Clock, t: "Saves time", d: "Autonomous agents handle handoffs, drafting, follow-ups and reporting around the clock.", stat: "22 hrs/wk back" },
            { i: Brain, t: "Sharpens decisions", d: "Forecasts, anomalies and recommendations land in your inbox before issues become fires.", stat: "Decide in minutes" },
          ].map((c, i) => (
            <div key={i} className="rounded-3xl glass p-6 transition hover:glow-violet">
              <div className="grid size-11 place-items-center rounded-xl bg-violet/15"><c.i className="size-5 text-violet" /></div>
              <div className="mt-4 font-display text-lg font-bold">{c.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-4 inline-flex rounded-full glass-strong px-3 py-1 font-mono text-[11px] font-semibold text-foreground/90">{c.stat}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
