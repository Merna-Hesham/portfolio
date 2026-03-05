"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Column, Heading, Row, Text, Icon } from "@once-ui-system/core";
import { person, about } from "@/resources";

const stats = [
  { value: "3+",   label: "Years Exp.",  icon: "calendar" },
  { value: "10+",  label: "Projects",    icon: "grid"     },
  { value: "3.81", label: "GPA",         icon: "book"     },
  { value: "5+",   label: "Tech Stack",  icon: "code"     },
];


export const AboutMeSection = () => {
  const [isVisible,   setIsVisible]   = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity:   isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`,
  });

  return (
    <Column
      ref={sectionRef}
      fillWidth
      gap="32"
      paddingY="80"
      id="about"
      style={{ position: "relative" }}
    >
      {/* Ambient glows */}
      <div style={{ position:"absolute", top:"15%", left:"-120px", width:"480px", height:"480px", background:"radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 60%)", pointerEvents:"none", animation: isVisible ? "amPulse 6s ease-in-out infinite" : "none", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:"10%", right:"-100px", width:"360px", height:"360px", background:"radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 65%)", pointerEvents:"none", animation: isVisible ? "amPulse 7s ease-in-out 2s infinite" : "none", zIndex:0 }} />

      {/* ── Section title ── */}
      <Column gap="12" horizontal="center" style={{ textAlign:"center", zIndex:1, ...fadeUp(0) }}>
        <Text variant="label-strong-s" onBackground="brand-strong" style={{ letterSpacing:"4px", textTransform:"uppercase" }}>
          Get To Know Me
        </Text>
        <Heading as="h2" variant="display-strong-l">About Me</Heading>
      </Column>

      {/* ── Profile banner card ── */}
      <div style={{
        position:"relative", borderRadius:"24px",
        background:"var(--surface)",
        border:"1px solid var(--neutral-alpha-weak)",
        boxShadow:"0 4px 24px var(--neutral-alpha-weak)",
        overflow:"hidden", zIndex:1,
        ...fadeUp(0.1),
      }}>
        {/* Corner radial glow */}
        <div style={{ position:"absolute", top:0, left:0, width:"220px", height:"220px", background:"radial-gradient(circle at top left, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"-10px", right:"20px", fontSize:"120px", fontWeight:900, lineHeight:1, color:"var(--brand-alpha-weak)", pointerEvents:"none", userSelect:"none", fontFamily:"var(--font-heading)" }}>ME</div>
        {/* Left accent bar */}
        <div style={{ position:"absolute", left:0, top:"20px", bottom:"20px", width:"4px", borderRadius:"0 4px 4px 0", background:"var(--brand-alpha-medium)" }} />

        <div style={{
          display:"flex", flexWrap:"wrap", alignItems:"center",
          gap:"28px", padding:"32px 32px 32px 40px",
        }}>
          {/* Photo */}
          <div style={{ position:"relative", flexShrink:0 }}>
            <div style={{ position:"absolute", inset:"-6px", borderRadius:"50%", border:"1.5px dashed var(--brand-alpha-medium)", animation: isVisible ? "spinSlow 22s linear infinite" : "none" }} />
            <div style={{ position:"absolute", inset:"-2px", borderRadius:"50%", border:"2px solid var(--brand-alpha-medium)" }} />
            <div style={{ width:"120px", height:"120px", borderRadius:"50%", overflow:"hidden", position:"relative" }}>
              <Image
                src={person.avatar}
                alt={person.name}
                width={120}
                height={120}
                style={{ objectFit:"cover", width:"100%", height:"100%" }}
              />
            </div>
          </div>

          {/* Identity */}
          <Column gap="10" style={{ flex:"1 1 200px", minWidth:"180px" }}>
            <Column gap="4">
              <Heading as="h3" variant="heading-strong-xl">{person.name}</Heading>
              <div style={{ display:"inline-flex", padding:"4px 14px", borderRadius:"100px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)", width:"fit-content" }}>
                <Text variant="label-strong-xs" onBackground="brand-strong">{person.role}</Text>
              </div>
            </Column>

            <Row gap="16" wrap>
              {[
                { icon:"mapPin",    label:"Cairo, Egypt",  highlight:false },
                { icon:"lightbulb", label:"Open to Work",  highlight:true  },
              ].map((item, i) => (
                <Row key={i} gap="6" vertical="center">
                  <Icon name={item.icon} size="s" onBackground={item.highlight ? "brand-strong" : "neutral-weak"} />
                  <Text variant="body-default-s" onBackground={item.highlight ? "brand-strong" : "neutral-weak"}>
                    {item.label}
                  </Text>
                </Row>
              ))}
            </Row>
          </Column>

        </div>
      </div>

      {/* ── Bio card ── */}
      <div style={{
        position:"relative", borderRadius:"24px",
        background:"var(--surface)",
        border:"1px solid var(--neutral-alpha-weak)",
        boxShadow:"0 4px 24px var(--neutral-alpha-weak)",
        overflow:"hidden", zIndex:1,
        ...fadeUp(0.18),
      }}>
        <div style={{ position:"absolute", top:0, left:0, width:"180px", height:"180px", background:"radial-gradient(circle at top left, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", left:0, top:"20px", bottom:"20px", width:"4px", borderRadius:"0 4px 4px 0", background:"var(--brand-alpha-medium)" }} />
        <div style={{ position:"absolute", top:"-10px", right:"20px", fontSize:"130px", fontWeight:900, lineHeight:1, color:"var(--brand-alpha-weak)", pointerEvents:"none", userSelect:"none", fontFamily:"var(--font-heading)" }}>01</div>

        <div style={{ padding:"28px 32px 28px 40px" }}>
          <Row gap="8" vertical="center" style={{ marginBottom:"14px" }}>
            <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"var(--brand-strong)" }} />
            <Text variant="label-strong-xs" onBackground="brand-strong" style={{ letterSpacing:"3px", textTransform:"uppercase" }}>Bio</Text>
          </Row>
          <Text variant="body-default-l" onBackground="neutral-medium" style={{ lineHeight:1.8, fontStyle:"italic", position:"relative", zIndex:1 }}>
            &#8220;{about.intro.description}&#8221;
          </Text>
        </div>
      </div>

      {/* ── Stats row ── */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))",
        gap:"16px",
        zIndex:1,
        ...fadeUp(0.26),
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredStat(i)}
            onMouseLeave={() => setHoveredStat(null)}
            style={{
              padding:"24px 16px", borderRadius:"20px", textAlign:"center",
              background: hoveredStat === i ? "var(--brand-alpha-weak)" : "var(--surface)",
              border:`1px solid ${hoveredStat === i ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
              boxShadow: hoveredStat === i ? "0 24px 70px var(--brand-alpha-medium)" : "0 4px 20px var(--neutral-alpha-weak)",
              transform: hoveredStat === i ? "translateY(-6px)" : "translateY(0)",
              transition:"all .4s cubic-bezier(.16,1,.3,1)",
              cursor:"default", position:"relative", overflow:"hidden",
            }}
          >
            <div style={{ position:"absolute", top:0, right:0, width:"60px", height:"60px", background:"radial-gradient(circle at top right, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
            <div style={{ width:"40px", height:"40px", margin:"0 auto 12px", borderRadius:"12px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <Icon name={s.icon} size="s" onBackground="brand-strong" />
            </div>
            <Text variant="display-strong-m" onBackground="brand-strong" style={{ display:"block", lineHeight:1, fontWeight:900, marginBottom:"6px" }}>
              {s.value}
            </Text>
            <Text variant="body-default-xs" onBackground="neutral-weak">{s.label}</Text>
          </div>
        ))}
      </div>

      {/* ── Contact strip ── */}
      <a
        href={`mailto:${person.email}`}
        style={{
          display:"flex", alignItems:"center", gap:"16px",
          padding:"22px 28px", borderRadius:"20px",
          background:"var(--surface)",
          border:"1px solid var(--neutral-alpha-weak)",
          boxShadow:"0 4px 20px var(--neutral-alpha-weak)",
          textDecoration:"none", position:"relative", overflow:"hidden",
          zIndex:1, transition:"all .35s ease",
          ...fadeUp(0.34),
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--brand-alpha-weak)";
          el.style.border = "1px solid var(--brand-alpha-medium)";
          el.style.boxShadow = "0 24px 70px var(--brand-alpha-medium)";
          el.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--surface)";
          el.style.border = "1px solid var(--neutral-alpha-weak)";
          el.style.boxShadow = "0 4px 20px var(--neutral-alpha-weak)";
          el.style.transform = "translateY(0)";
        }}
      >
        <div style={{ position:"absolute", top:0, left:0, width:"160px", height:"100%", background:"radial-gradient(circle at left, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ width:"48px", height:"48px", borderRadius:"14px", background:"var(--brand-strong)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 6px 20px var(--brand-alpha-strong)", flexShrink:0 }}>
          <Icon name="email" size="m" onBackground="page" />
        </div>
        <Column gap="2">
          <Text variant="label-strong-xs" onBackground="neutral-weak" style={{ letterSpacing:"2px", textTransform:"uppercase" }}>
            Get in touch
          </Text>
          <Text variant="body-strong-m" onBackground="brand-strong">{person.email}</Text>
        </Column>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"8px" }}>
          <Text variant="body-default-s" onBackground="neutral-weak">Say hello</Text>
          <Icon name="arrowRight" size="m" onBackground="brand-strong" />
        </div>
      </a>

      <style jsx global>{`
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @keyframes amPulse  { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.55;transform:scale(1.08)} }
      `}</style>
    </Column>
  );
};
