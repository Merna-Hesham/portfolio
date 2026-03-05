"use client";

import { useEffect, useRef, useState } from "react";
import { Column, Heading, Row, Text, Icon } from "@once-ui-system/core";

const certs = [
  { title:"Sprints x Microsoft",  sub:"Mobile Development",    year:"2025", icon:"smartphone" },
  { title:"ITI Summer Training",  sub:"Android Development",   year:"2024", icon:"code"       },
  { title:"DEPI Program",         sub:"Cross Platform Dev",    year:"2025", icon:"globe"      },
];

const timeline = [
  { year:"2021", label:"Started University",  active:false },
  { year:"2024", label:"ITI Training",         active:false },
  { year:"2025", label:"Graduation",           active:true  },
];

export const EducationSection = () => {
  const [isVisible,   setIsVisible]   = useState(false);
  const [hoveredCert, setHoveredCert] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Column ref={sectionRef} fillWidth gap="48" paddingY="80" id="education" style={{ position: "relative" }}>

      {/* Ambient glows — same as Experience */}
      <div style={{ position:"absolute", top:"20%", right:"-120px", width:"480px", height:"480px", background:"radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 60%)", pointerEvents:"none", animation: isVisible ? "pulse 6s ease-in-out infinite" : "none", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:"10%", left:"-100px", width:"360px", height:"360px", background:"radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 65%)", pointerEvents:"none", animation: isVisible ? "pulse 7s ease-in-out 2s infinite" : "none", zIndex:0 }} />

      {/* ── Section title ── */}
      <Column gap="12" horizontal="center" style={{ textAlign:"center", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(-30px)", transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)", zIndex:1 }}>
        <Text variant="label-strong-s" onBackground="brand-strong" style={{ letterSpacing:"4px", textTransform:"uppercase" }}>My Background</Text>
        <Heading as="h2" variant="display-strong-l">Education</Heading>
      </Column>

      {/* ── Main two-column layout — same as Experience ── */}
      <Row gap="64" wrap style={{ zIndex: 1 }}>

        {/* Left — GPA + Timeline */}
        <Column gap="20" style={{ flex:"1 1 240px", minWidth:"220px", maxWidth:"300px", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(-50px)", transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)", zIndex:1 }}>

          {/* GPA card */}
          <div style={{ padding:"28px 20px", background:"var(--surface)", borderRadius:"24px", border:"1px solid var(--neutral-alpha-weak)", boxShadow:"0 4px 24px var(--neutral-alpha-weak)", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", alignItems:"center", gap:"14px", opacity: isVisible ? 1 : 0, animation: isVisible ? "popIn 0.5s ease 0.15s both" : "none" }}>
            {/* Corner accent */}
            <div style={{ position:"absolute", top:0, right:0, width:"80px", height:"80px", background:"radial-gradient(circle at top right, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />

            <Text variant="label-strong-xs" onBackground="brand-strong" style={{ letterSpacing:"2px", textTransform:"uppercase" }}>GPA Score</Text>

            {/* GPA Ring */}
            <div style={{ position:"relative", width:"160px", height:"160px" }}>
              <svg width="160" height="160" viewBox="-8 -8 176 176" style={{ position:"absolute", top:0, left:0, transform:"rotate(-90deg)", overflow:"visible" }}>
                <circle cx="80" cy="80" r="64" fill="none" stroke="var(--neutral-alpha-weak)" strokeWidth="9" />
                <circle cx="80" cy="80" r="64" fill="none" stroke="var(--brand-strong)" strokeWidth="9" strokeLinecap="round"
                  strokeDasharray={`${isVisible ? 382 : 0} 402`}
                  style={{ transition:"stroke-dasharray 2.2s cubic-bezier(.16,1,.3,1) .4s", filter:"drop-shadow(0 0 8px var(--brand-alpha-strong))" }}
                />
              </svg>
              <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                <Text variant="display-strong-l" onBackground="brand-strong" style={{ lineHeight:1 }}>3.81</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">/ 4.0</Text>
                <div style={{ marginTop:"6px", padding:"3px 10px", borderRadius:"20px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)" }}>
                  <Text variant="label-strong-xs" onBackground="brand-strong">Excellent</Text>
                </div>
              </div>
              {/* Orbiting dot */}
              <div style={{ position:"absolute", width:"10px", height:"10px", background:"var(--brand-strong)", borderRadius:"50%", top:"50%", left:"50%", marginTop:"-5px", marginLeft:"-5px", boxShadow:"0 0 12px var(--brand-alpha-strong)", animation: isVisible ? "orbitGPA 7s linear infinite" : "none" }} />
            </div>
          </div>

          {/* Timeline card */}
          <div style={{ padding:"24px 20px", background:"var(--surface)", borderRadius:"20px", border:"1px solid var(--neutral-alpha-weak)", boxShadow:"0 4px 20px var(--neutral-alpha-weak)", position:"relative", overflow:"hidden", opacity: isVisible ? 1 : 0, animation: isVisible ? "popIn 0.5s ease 0.25s both" : "none" }}>
            <div style={{ position:"absolute", top:0, right:0, width:"60px", height:"60px", background:"radial-gradient(circle at top right, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
            <Text variant="label-strong-xs" onBackground="brand-strong" style={{ letterSpacing:"2px", textTransform:"uppercase", display:"block", marginBottom:"20px" }}>Timeline</Text>
            <Column gap="0">
              {timeline.map((t, i) => (
                <Row key={i} gap="14" vertical="start">
                  <Column horizontal="center" style={{ width:"16px", flexShrink:0 }}>
                    <div style={{ width:"12px", height:"12px", borderRadius:"50%", background: t.active ? "var(--brand-strong)" : "var(--brand-alpha-medium)", border:`2px solid ${t.active ? "var(--brand-strong)" : "var(--brand-alpha-medium)"}`, boxShadow: t.active ? "0 0 14px var(--brand-alpha-strong)" : "none", opacity: isVisible ? 1 : 0, animation: isVisible ? `slideInLeft .5s ease ${.32+i*.12}s both` : "none" }} />
                    {i < timeline.length - 1 && (
                      <div style={{ width:"1px", height:"34px", background:"var(--brand-alpha-weak)", marginTop:"2px" }} />
                    )}
                  </Column>
                  <Column gap="2" style={{ paddingBottom: i < timeline.length - 1 ? "10px" : 0, opacity: isVisible ? 1 : 0, animation: isVisible ? `slideInLeft .5s ease ${.36+i*.12}s both` : "none" }}>
                    <Text variant="label-strong-xs" onBackground={t.active ? "brand-strong" : "neutral-weak"}>{t.year}</Text>
                    <Text variant="body-default-s" onBackground={t.active ? "neutral-strong" : "neutral-medium"}>{t.label}</Text>
                  </Column>
                </Row>
              ))}
            </Column>
          </div>

        </Column>

        {/* Right — Degree card + Certificates */}
        <Column gap="24" style={{ flex:"2 1 500px", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(40px)", transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s", zIndex:1 }}>

          {/* Degree card — matches Experience card structure */}
          <div style={{ position:"relative", borderRadius:"24px", background:"var(--surface)", border:"1px solid var(--neutral-alpha-weak)", boxShadow:"0 4px 24px var(--neutral-alpha-weak)", overflow:"hidden", opacity: isVisible ? 1 : 0, animation: isVisible ? "popIn 0.5s ease 0.3s both" : "none" }}>
            {/* Watermark */}
            <div style={{ position:"absolute", top:"-10px", right:"16px", fontSize:"130px", fontWeight:900, lineHeight:1, color:"var(--brand-alpha-weak)", pointerEvents:"none", userSelect:"none", fontFamily:"var(--font-heading)" }}>01</div>
            {/* Corner glow */}
            <div style={{ position:"absolute", top:0, left:0, width:"180px", height:"180px", background:"radial-gradient(circle at top left, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
            {/* Left accent bar */}
            <div style={{ position:"absolute", left:0, top:"20px", bottom:"20px", width:"4px", borderRadius:"0 4px 4px 0", background:"var(--brand-alpha-medium)" }} />

            <div style={{ padding:"28px 28px 28px 36px" }}>
              <Row fillWidth horizontal="between" vertical="start" wrap gap="12" style={{ marginBottom:"20px" }}>
                <Column gap="6">
                  <Row gap="8" vertical="center">
                    <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"var(--brand-strong)", boxShadow:"0 0 10px var(--brand-strong)" }} />
                    <Text variant="label-strong-xs" onBackground="brand-strong" style={{ letterSpacing:"3px", textTransform:"uppercase" }}>Bachelor's Degree</Text>
                  </Row>
                  <Heading as="h3" variant="heading-strong-xl">Artificial Intelligence</Heading>
                  <Text variant="body-default-m" onBackground="neutral-medium">Kafr El-Sheikh University</Text>
                </Column>
                <div style={{ padding:"8px 18px", borderRadius:"100px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)", whiteSpace:"nowrap", flexShrink:0 }}>
                  <Text variant="label-strong-xs" onBackground="brand-strong">Sep 2021 – Jul 2025</Text>
                </div>
              </Row>
              <div style={{ height:"1px", background:"var(--neutral-alpha-weak)", marginBottom:"16px" }} />
              <Row gap="10" wrap>
                <div style={{ padding:"6px 14px", borderRadius:"10px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)" }}>
                  <Text variant="body-default-s" onBackground="brand-strong">AI Specialization</Text>
                </div>
                <div style={{ padding:"6px 14px", borderRadius:"10px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)" }}>
                  <Text variant="body-default-s" onBackground="brand-strong">4 Years</Text>
                </div>
                <div style={{ padding:"6px 14px", borderRadius:"10px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)" }}>
                  <Text variant="body-default-s" onBackground="brand-strong">GPA: 3.81 / 4.0</Text>
                </div>
              </Row>
            </div>
          </div>

          {/* Certificates label */}
          <Column gap="4">
            <Row gap="8" vertical="center">
              <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"var(--brand-strong)" }} />
              <Text variant="label-strong-xs" onBackground="brand-strong" style={{ letterSpacing:"3px", textTransform:"uppercase" }}>Certificates &amp; Training</Text>
            </Row>
          </Column>

          {/* Cert cards — same hover pattern as Experience */}
          <Column gap="16">
            {certs.map((c, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCert(i)}
                onMouseLeave={() => setHoveredCert(null)}
                style={{
                  position:"relative",
                  borderRadius:"20px",
                  background: hoveredCert === i ? "var(--brand-alpha-weak)" : "var(--surface)",
                  border:`1px solid ${hoveredCert === i ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
                  boxShadow: hoveredCert === i ? "0 24px 70px var(--brand-alpha-medium)" : "0 4px 24px var(--neutral-alpha-weak)",
                  transform: hoveredCert === i ? "translateY(-6px)" : "translateY(0)",
                  transition:"all .4s cubic-bezier(.16,1,.3,1)",
                  cursor:"default", overflow:"hidden",
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `popIn .5s ease ${.4+i*.12}s both` : "none",
                }}
              >
                {/* Watermark number */}
                <div style={{ position:"absolute", top:"-10px", right:"12px", fontSize:"90px", fontWeight:900, lineHeight:1, color: hoveredCert === i ? "var(--brand-alpha-medium)" : "var(--brand-alpha-weak)", pointerEvents:"none", userSelect:"none", fontFamily:"var(--font-heading)", transition:"color .4s ease" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Corner glow */}
                <div style={{ position:"absolute", top:0, left:0, width:"120px", height:"120px", background:"radial-gradient(circle at top left, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
                {/* Left accent bar */}
                <div style={{ position:"absolute", left:0, top:"16px", bottom:"16px", width:"4px", borderRadius:"0 4px 4px 0", background: hoveredCert === i ? "#FF073D" : "var(--brand-alpha-medium)", transition:"all .4s ease" }} />

                <div style={{ padding:"22px 22px 22px 30px" }}>
                  <Row fillWidth horizontal="between" vertical="center" gap="12">
                    <Row gap="14" vertical="center">
                      <div style={{ width:"44px", height:"44px", borderRadius:"13px", background: hoveredCert === i ? "#FF073D" : "var(--brand-alpha-weak)", border:`1px solid ${hoveredCert === i ? "transparent" : "var(--brand-alpha-medium)"}`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow: hoveredCert === i ? "0 6px 20px var(--brand-alpha-strong)" : "none", transform: hoveredCert === i ? "rotate(-5deg)" : "rotate(0)", transition:"all .4s cubic-bezier(.16,1,.3,1)", flexShrink:0 }}>
                        <Icon name={c.icon} size="m" onBackground={hoveredCert === i ? "page" : "brand-strong"} />
                      </div>
                      <Column gap="3">
                        <Text variant="body-strong-m">{c.title}</Text>
                        <Text variant="body-default-s" onBackground="neutral-medium">{c.sub}</Text>
                      </Column>
                    </Row>
                    <div style={{ padding:"6px 14px", borderRadius:"100px", background: hoveredCert === i ? "#FF073D" : "var(--brand-alpha-weak)", border:`1px solid ${hoveredCert === i ? "transparent" : "var(--brand-alpha-medium)"}`, boxShadow: hoveredCert === i ? "0 4px 16px var(--brand-alpha-strong)" : "none", transition:"all .4s ease", flexShrink:0 }}>
                      <Text variant="label-strong-xs" style={{ color: hoveredCert === i ? "white" : undefined }} onBackground={hoveredCert === i ? undefined : "brand-strong"}>{c.year}</Text>
                    </div>
                  </Row>
                </div>
              </div>
            ))}
          </Column>
        </Column>
      </Row>

      <style jsx global>{`
        @keyframes popIn       { from{opacity:0;transform:scale(.9) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes slideInLeft { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
        @keyframes orbitGPA    { from{transform:rotate(0deg)  translateX(64px)} to{transform:rotate(360deg) translateX(64px)} }
        @keyframes pulse       { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.5;transform:scale(1.1)} }
      `}</style>
    </Column>
  );
};
