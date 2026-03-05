"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Column, Heading, IconButton, Row, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";

const ROLES = [
  "Mobile App Developer",
  "AI & CV Engineer",
  "Flutter Specialist",
  "UI/UX Enthusiast",
];

export const HeroSection = () => {
  const sectionRef                  = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible]   = useState(false);
  const [roleIdx, setRoleIdx]       = useState(0);
  const [roleFade, setRoleFade]     = useState(true);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleFade(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % ROLES.length); setRoleFade(true); }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  const fadeUp = (delay = 0): React.CSSProperties => ({
    opacity:   isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`,
  });

  return (
    <Column
      ref={sectionRef}
      fillWidth
      horizontal="center"
      id="home"
      style={{ position: "relative", paddingTop: "var(--responsive-space-xl)", paddingBottom: "var(--responsive-space-xl)" }}
    >
      {/* Ambient glows */}
      <div style={{
        position: "absolute", top: "0%", left: "-160px", width: "560px", height: "560px",
        background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 60%)",
        pointerEvents: "none", zIndex: 0,
        animation: isVisible ? "pulse 6s ease-in-out infinite" : "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", right: "-120px", width: "440px", height: "440px",
        background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
        animation: isVisible ? "pulse 8s ease-in-out 2s infinite" : "none",
      }} />
      {/* Floating accent dots */}
      {[
        { size: 6,  top: "18%", left: "8%",  delay: "0s",    dur: "4s"  },
        { size: 4,  top: "65%", left: "5%",  delay: "1.2s",  dur: "5s"  },
        { size: 8,  top: "35%", right: "7%", delay: "0.6s",  dur: "6s"  },
        { size: 5,  top: "78%", right: "4%", delay: "1.8s",  dur: "4.5s"},
        { size: 3,  top: "12%", right:"18%", delay: "2.1s",  dur: "7s"  },
      ].map((d, i) => (
        <div key={i} style={{
          position: "absolute", top: d.top,
          left: ("left" in d) ? d.left : undefined,
          right: ("right" in d) ? d.right : undefined,
          width: d.size, height: d.size, borderRadius: "50%",
          background: "var(--brand-strong)",
          opacity: isVisible ? 0.35 : 0,
          transition: `opacity 1s ease ${d.delay}`,
          animation: isVisible ? `floatDot ${d.dur} ease-in-out ${d.delay} infinite` : "none",
          pointerEvents: "none", zIndex: 0,
        }} />
      ))}

      {/* ── Content ── */}
      <Column horizontal="center" gap="0" style={{ zIndex: 1, textAlign: "center", maxWidth: "720px", width: "100%", padding: "0 24px" }}>

        {/* Status badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "7px 18px", borderRadius: "100px",
          background: "var(--brand-alpha-weak)", border: "1px solid var(--brand-alpha-medium)",
          marginBottom: "36px",
          ...fadeUp(0),
        }}>
          <div style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "var(--brand-strong)", boxShadow: "0 0 10px var(--brand-alpha-strong)",
            animation: "statusPulse 2s ease-in-out infinite", flexShrink: 0,
          }} />
          <Text variant="label-strong-xs" onBackground="brand-strong">Available for opportunities</Text>
        </div>

        {/* Greeting */}
        <Text variant="label-strong-l" onBackground="neutral-medium"
          style={{ letterSpacing: "3px", marginBottom: "10px", ...fadeUp(0.08) }}>
          Hello, I&apos;m
        </Text>

        {/* Name */}
        <div style={{ marginBottom: "6px", ...fadeUp(0.16) }}>
          <Heading as="h1" variant="display-strong-xl" style={{ lineHeight: 1.05, position: "relative", display: "inline-block" }}>
            <span style={{
              background: "linear-gradient(120deg, var(--brand-strong) 0%, var(--accent-strong) 40%, var(--neutral-on-background-strong) 70%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              animation: isVisible ? "shimmer 4s ease 0.5s both" : "none",
              backgroundSize: "200% auto", display: "inline-block",
            }}>
              {person.name}
            </span>
          </Heading>
        </div>

        {/* Expanding accent line */}
        <div style={{
          height: "3px", borderRadius: "2px", marginBottom: "28px",
          background: "linear-gradient(90deg, transparent, var(--brand-strong), var(--accent-strong), transparent)",
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.9s cubic-bezier(.16,1,.3,1) 0.3s",
          transformOrigin: "center",
        }} />

        {/* Cycling role */}
        <div style={{ marginBottom: "32px", minHeight: "2.2rem", ...fadeUp(0.28) }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "8px 20px", borderRadius: "12px",
            background: "var(--surface)", border: "1px solid var(--neutral-alpha-weak)",
            boxShadow: "0 4px 20px var(--neutral-alpha-weak)",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand-strong)", flexShrink: 0 }} />
            <div style={{
              opacity:    roleFade ? 1 : 0,
              transform:  roleFade ? "translateY(0)" : "translateY(-6px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}>
              <Text variant="heading-default-m" onBackground="neutral-strong">{ROLES[roleIdx]}</Text>
            </div>
          </div>
        </div>

        {/* Description */}
        <Text variant="body-default-l" onBackground="neutral-weak"
          style={{ maxWidth: "540px", lineHeight: 1.8, marginBottom: "44px", ...fadeUp(0.36) }}>
          AI-driven developer specializing in mobile development, UI/UX, and AI systems
          with computer vision integration. Co-founder of{" "}
          <Text as="span" variant="body-strong-l" onBackground="brand-strong">Goia</Text>
          , an AI-powered virtual tour guide app.
        </Text>

        {/* CTA buttons */}
        <Row gap="m" horizontal="center" wrap style={{ marginBottom: "36px", ...fadeUp(0.44) }}>
          <div style={{ animation: isVisible ? "ctaGlow 2.5s ease 1.2s infinite" : "none", borderRadius: "12px" }}>
            <Button href="#projects" variant="primary" size="l">View My Work</Button>
          </div>
          <Button
            href="https://drive.google.com/file/d/1cne4m_cSK4LbYc3s0ArECeqzzsgnDUUg/view"
            variant="secondary" size="l"
          >
            Download CV
          </Button>
        </Row>

        {/* Social row */}
        <Row gap="4" horizontal="center" vertical="center" style={fadeUp(0.52)}>
          <div style={{ height: "1px", width: "32px", background: "var(--neutral-alpha-medium)" }} />
          <Text variant="body-default-xs" onBackground="neutral-weak" style={{ margin: "0 8px" }}>Connect</Text>
          {social.filter(i => i.essential).map(item => (
            <IconButton key={item.name} href={item.link} icon={item.icon} variant="ghost" size="m" />
          ))}
          <div style={{ height: "1px", width: "32px", background: "var(--neutral-alpha-medium)" }} />
        </Row>

        {/* Scroll cue */}
        <Column horizontal="center" gap="6" style={{ marginTop: "64px", ...fadeUp(0.64) }}>
          <Text variant="label-default-xs" onBackground="neutral-weak" style={{ letterSpacing: "3px", textTransform: "uppercase" }}>
            Scroll
          </Text>
          <div style={{ width: "1px", height: "44px", background: "var(--neutral-alpha-medium)", overflow: "hidden", borderRadius: "1px" }}>
            <div style={{ width: "100%", height: "50%", background: "var(--brand-strong)", animation: isVisible ? "scrollLine 1.8s ease-in-out infinite" : "none" }} />
          </div>
        </Column>

      </Column>

      <style jsx global>{`
        @keyframes pulse       { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.55;transform:scale(1.08)} }
        @keyframes statusPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.75;transform:scale(1.3)} }
        @keyframes scrollLine  { 0%{transform:translateY(-100%)} 100%{transform:translateY(200%)} }
        @keyframes floatDot    { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-14px) scale(1.3)} }
        @keyframes shimmer     { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes ctaGlow     {
          0%,100%{ box-shadow: 0 0 0px transparent; }
          50%    { box-shadow: 0 0 22px var(--brand-alpha-strong); }
        }
      `}</style>
    </Column>
  );
};
