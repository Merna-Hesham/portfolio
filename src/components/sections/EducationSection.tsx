"use client";

import { useEffect, useRef, useState } from "react";
import { Column, Heading, Row, Text, Icon } from "@once-ui-system/core";

type JourneyEntry =
  | { type:"milestone"; year:string; label:string; icon:string; active?:boolean }
  | { type:"cert";      year:string; title:string; sub:string; icon:string; current?:boolean };

const journey: JourneyEntry[] = [
  { type:"milestone", year:"2021", label:"Started University", icon:"book"  },
  { type:"cert",      year:"2024", title:"ITI Summer Training", sub:"Android Development",  icon:"code"       },
  { type:"cert",      year:"2025", title:"Sprints x Microsoft", sub:"Mobile Development",   icon:"smartphone" },
  { type:"milestone", year:"2025", label:"Graduation",          icon:"graduationCap" },
  { type:"cert",      year:"2025", title:"DEPI Program",        sub:"Cross Platform Dev",   icon:"globe", current:true },
];

export const EducationSection = () => {
  const [isVisible,     setIsVisible]     = useState(false);
  const [hoveredEntry,  setHoveredEntry]  = useState<number | null>(null);
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
      <div style={{ position:"absolute", top:"20%", right:"-120px", width:"480px", height:"480px", background: "transparent", pointerEvents:"none", animation: isVisible ? "pulse 6s ease-in-out infinite" : "none", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:"10%", left:"-100px", width:"360px", height:"360px", background: "transparent", pointerEvents:"none", animation: isVisible ? "pulse 7s ease-in-out 2s infinite" : "none", zIndex:0 }} />

      {/* ── Section title ── */}
      <Column gap="12" horizontal="center" style={{ textAlign:"center", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(-30px)", transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)", zIndex:1 }}>
        <Text variant="label-strong-s" onBackground="brand-strong" style={{ letterSpacing:"4px", textTransform:"uppercase" }}>My Background</Text>
        <Heading as="h2" variant="display-strong-l">Education</Heading>
        <div style={{ width:"48px", height:"3px", borderRadius:"2px", background:"#FF073D", margin:"0 auto" }} />
      </Column>

      {/* ── Main two-column layout — same as Experience ── */}
      <Row gap="64" wrap style={{ zIndex: 1, alignItems: "stretch" }}>

        {/* Left — GPA only */}
        <Column gap="20" style={{ flex:"1 1 240px", minWidth:"220px", maxWidth:"300px", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(-50px)", transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)", zIndex:1 }}>

          {/* GPA card */}
          <div style={{ padding:"28px 20px 24px", background:"var(--surface)", borderRadius:"24px", border:"1px solid var(--neutral-alpha-weak)", boxShadow:"0 4px 24px var(--neutral-alpha-weak)", position:"relative", overflow:"hidden", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"16px", flex:1, opacity: isVisible ? 1 : 0, animation: isVisible ? "popIn 0.5s ease 0.15s both" : "none" }}>
            <div style={{ position:"absolute", top:0, left:"15%", right:"15%", height:"3px", borderRadius:"0 0 4px 4px", background:"linear-gradient(90deg, transparent, #FF073D, transparent)" }} />
            <Text variant="label-strong-xs" onBackground="brand-strong" style={{ letterSpacing:"3px", textTransform:"uppercase" }}>GPA Score</Text>
            <div style={{ position:"relative", width:"180px", height:"180px" }}>
              <svg width="180" height="180" viewBox="0 0 180 180" style={{ position:"absolute", top:0, left:0, overflow:"visible" }}>
                <defs>
                  <linearGradient id="gpaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF073D" />
                    <stop offset="100%" stopColor="#FD3D65" />
                  </linearGradient>
                  <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="dotGlow" x="-150%" y="-150%" width="400%" height="400%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <circle cx="90" cy="90" r="83" fill="none" stroke="#FF073D" strokeWidth="1" opacity="0.12" />
                <circle cx="90" cy="90" r="72" fill="none" stroke="var(--neutral-alpha-weak)" strokeWidth="11" />
                <circle cx="90" cy="90" r="72" fill="none" stroke="url(#gpaGrad)" strokeWidth="11" strokeLinecap="round" transform="rotate(-90 90 90)" strokeDasharray={`${isVisible ? 431 : 0} 453`} filter="url(#arcGlow)" style={{ transition:"stroke-dasharray 2.2s cubic-bezier(.16,1,.3,1) .4s" }} />
                {isVisible && (
                  <g filter="url(#dotGlow)">
                    <circle cx="90" cy="18" r="6" fill="#FF073D">
                      <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="90" cy="18" r="2.5" fill="white" opacity="0.9">
                      <animateTransform attributeName="transform" type="rotate" from="0 90 90" to="360 90 90" dur="8s" repeatCount="indefinite" />
                    </circle>
                  </g>
                )}
              </svg>
              <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"2px" }}>
                <Text variant="display-strong-l" onBackground="brand-strong" style={{ lineHeight:1, fontWeight:900, fontSize:"2.2rem" }}>3.81</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak" style={{ marginTop:"2px" }}>out of 4.0</Text>
                <div style={{ marginTop:"8px", padding:"4px 12px", borderRadius:"20px", background:"linear-gradient(135deg, #FF073D18, #FD3D6518)", border:"1px solid #FF073D45" }}>
                  <Text variant="label-strong-xs" style={{ color:"#FF073D" }}>Excellent</Text>
                </div>
              </div>
            </div>
          </div>

        </Column>

        {/* Right — Degree card only */}
        <Column gap="24" style={{ flex:"2 1 500px", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateX(0)" : "translateX(40px)", transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s", zIndex:1 }}>

          {/* Degree card */}
          <div style={{ position:"relative", borderRadius:"24px", background:"var(--surface)", border:"1px solid var(--neutral-alpha-weak)", boxShadow:"0 4px 24px var(--neutral-alpha-weak)", overflow:"hidden", flex:1, display:"flex", flexDirection:"column", justifyContent:"center", opacity: isVisible ? 1 : 0, animation: isVisible ? "popIn 0.5s ease 0.3s both" : "none" }}>
            <div style={{ position:"absolute", top:"-10px", right:"16px", fontSize:"130px", fontWeight:900, lineHeight:1, color:"var(--brand-alpha-weak)", pointerEvents:"none", userSelect:"none", fontFamily:"var(--font-heading)" }}>01</div>
            <div style={{ position:"absolute", left:0, top:"20px", bottom:"20px", width:"4px", borderRadius:"0 4px 4px 0", background:"var(--brand-alpha-medium)" }} />
            <div style={{ padding:"32px 28px 32px 36px" }}>
              <Row fillWidth horizontal="between" vertical="start" wrap gap="16" style={{ marginBottom:"24px" }}>
                <Column gap={"10" as any}>
                  <Row gap={"10" as any} vertical="center">
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
            </div>
          </div>

        </Column>
      </Row>

      {/* ── Unified Journey timeline card ── */}
      <div style={{ background:"var(--surface)", borderRadius:"24px", border:"1px solid var(--neutral-alpha-weak)", padding:"32px 36px", overflow:"hidden", opacity: isVisible ? 1 : 0, animation: isVisible ? "popIn 0.6s ease 0.45s both" : "none", zIndex:1, position:"relative" }}>
        <div style={{ position:"absolute", top:0, left:"30%", right:"30%", height:"3px", borderRadius:"0 0 4px 4px", background:"linear-gradient(90deg, transparent, #FF073D, transparent)" }} />

        {/* Header */}
        <Row fillWidth horizontal="between" vertical="center" style={{ marginBottom:"10px" }}>
          <Row gap="12" vertical="center">
            <div style={{ width:"28px", height:"28px", borderRadius:"8px", background:"#FF073D15", border:"1px solid #FF073D40", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#FF073D", boxShadow:"0 0 8px #FF073D" }} />
            </div>
            <Heading as="h4" variant="heading-strong-s">My Journey</Heading>
          </Row>
          <div style={{ padding:"4px 12px", borderRadius:"100px", background:"#FF073D15", border:"1px solid #FF073D40" }}>
            <Text variant="label-strong-xs" style={{ color:"#FF073D" }}>{journey.length} Entries</Text>
          </div>
        </Row>
        <div style={{ height:"2px", borderRadius:"2px", background:"linear-gradient(90deg, #FF073D, #FD3D6540, transparent)", marginBottom:"28px" }} />

        {/* Entries — single unified timeline */}
        <div style={{ position:"relative", paddingLeft:"20px" }}>
          {/* Shared connector line — dotted */}
          <div style={{ position:"absolute", left:"19px", top:"48px", bottom:"48px", width:"2px", background:"repeating-linear-gradient(to bottom, #FF073D 0px, #FF073D 5px, transparent 5px, transparent 13px)", transformOrigin:"top", transform: isVisible ? "scaleY(1)" : "scaleY(0)", transition:"transform 1.2s cubic-bezier(.16,1,.3,1) .6s" }} />

          {journey.map((entry, i) => {
            const isLast = i === journey.length - 1;
            const delay  = 0.5 + i * 0.1;

            if (entry.type === "milestone") {
              return (
                <div key={i} style={{ position:"relative", zIndex:1, display:"flex", gap:"20px", alignItems:"center", paddingBottom: isLast ? 0 : "28px", opacity: isVisible ? 1 : 0, animation: isVisible ? `slideInLeft .5s ease ${delay}s both` : "none" }}>
                  {/* Icon box — milestone style (neutral outline) */}
                  <div style={{ width:"40px", height:"40px", borderRadius:"12px", flexShrink:0, marginLeft:"-20px", background:"#FF073D20", border:"1.5px solid #FF073D50", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Icon name={entry.icon} size="s" onBackground="brand-strong" />
                  </div>
                  <Row fillWidth horizontal="between" vertical="center" gap="12">
                    <Text variant="body-strong-m" onBackground="neutral-strong">{entry.label}</Text>
                    <div style={{ padding:"4px 12px", borderRadius:"100px", background:"var(--neutral-alpha-weak)", border:"1px solid transparent", flexShrink:0 }}>
                      <Text variant="label-strong-xs" onBackground="neutral-weak">{entry.year}</Text>
                    </div>
                  </Row>
                </div>
              );
            }

            /* cert entry */
            const isHovered = hoveredEntry === i;
            const isCurrent = entry.current;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredEntry(i)}
                onMouseLeave={() => setHoveredEntry(null)}
                style={{ position:"relative", zIndex:1, display:"flex", gap:"20px", alignItems:"center", paddingBottom: isLast ? 0 : "20px", opacity: isVisible ? 1 : 0, animation: isVisible ? `slideInLeft .5s ease ${delay}s both` : "none", cursor:"default" }}
              >
                {/* Icon box — sits on the line, solid bg to mask line behind it */}
                <div style={{ width:"40px", height:"40px", borderRadius:"12px", flexShrink:0, marginLeft:"-20px", background: "#FF073D", border:"1px solid #FF073D", display:"flex", alignItems:"center", justifyContent:"center", boxShadow: isHovered ? "0 4px 20px #FF073D60" : "0 2px 8px #FF073D30", transform: isHovered ? "rotate(-5deg) scale(1.05)" : "none", transition:"all .4s cubic-bezier(.16,1,.3,1)" }}>
                  <Icon name={entry.icon} size="s" onBackground="neutral-strong" />
                </div>
                <Row fillWidth horizontal="between" vertical="center" gap="12">
                  <Column gap="4">
                    <Text variant="body-strong-m">{entry.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">{entry.sub}</Text>
                    {isCurrent && (
                      <div style={{ display:"inline-flex", gap:"4px", alignItems:"center" }}>
                        <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#FF073D", animation:"pulse 1.5s ease-in-out infinite" }} />
                        <Text variant="label-strong-xs" style={{ color:"#FF073D", fontSize:"10px" }}>Current</Text>
                      </div>
                    )}
                  </Column>
                  <div style={{ padding:"4px 12px", borderRadius:"100px", background: isHovered ? "#FF073D" : "var(--brand-alpha-weak)", border:`1px solid ${isHovered ? "transparent" : "var(--brand-alpha-medium)"}`, transition:"all .4s ease", flexShrink:0 }}>
                    <Text variant="label-strong-xs" style={{ color: isHovered ? "white" : undefined }} onBackground={isHovered ? undefined : "brand-strong"}>{entry.year}</Text>
                  </div>
                </Row>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes popIn       { from{opacity:0;transform:scale(.9) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes slideInLeft { from{opacity:0;transform:translateX(-16px)} to{opacity:1;transform:translateX(0)} }
        @keyframes orbitGPA    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes pulse       { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.5;transform:scale(1.1)} }
      `}</style>
    </Column>
  );
};
