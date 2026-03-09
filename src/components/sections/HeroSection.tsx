"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Column, Row, Text } from "@once-ui-system/core";
import { person } from "@/resources";

const BRAND  = "#FF073D";
const SHADOW = "#FD3D65";

const ROLES = [
  "Flutter Developer",
  "AI Engineer",
  "CV Specialist",
  "UI/UX Designer",
  "Tech Founder",
];


export const HeroSection = () => {
  const sectionRef                = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [roleIdx,   setRoleIdx]   = useState(0);
  const [roleFade,  setRoleFade]  = useState(true);

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
    opacity:    isVisible ? 1 : 0,
    transform:  isVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.16,1,.3,1) ${delay}s`,
  });

  return (
    <Column
      ref={sectionRef}
      fillWidth
      paddingTop="0"
      paddingBottom="80"
      id="home"
      horizontal="center"
      style={{ position: "relative", textAlign: "center" }}
    >

      {/* ── Cycling role ── */}
      <div style={{ marginBottom: "36px", ...fadeUp(0) }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          padding: "10px 20px 10px 10px", borderRadius: "100px",
          background: "var(--surface)",
          border: `1px solid ${BRAND}`,
          animation: "hRingPulse 2.4s ease-in-out infinite",
        }}>
          {/* Pulsing dot */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px" }}>
            <span style={{
              position: "absolute", width: "24px", height: "24px", borderRadius: "50%",
              background: BRAND, opacity: 0.25,
              animation: "hPing 1.5s ease-out infinite",
            }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: BRAND, display: "block" }} />
          </div>
          <div style={{
            width: "160px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{
              opacity:    roleFade ? 1 : 0,
              transform:  roleFade ? "translateY(0)" : "translateY(-8px)",
              transition: "opacity 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
              willChange: "opacity, transform",
              whiteSpace: "nowrap",
            }}>
              <span style={{
                color: SHADOW,
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
              }}>
                {ROLES[roleIdx]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Avatar ── */}
      <div style={{ marginBottom: "24px", ...fadeUp(0.1) }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Spinning dashed ring */}
          <div style={{
            position: "absolute", inset: "-8px", borderRadius: "50%",
            border: `1.5px dashed ${BRAND}55`,
            animation: "hSpin 20s linear infinite",
          }} />
          {/* Solid ring */}
          <div style={{
            position: "absolute", inset: "-3px", borderRadius: "50%",
            border: `2px solid ${BRAND}33`,
          }} />
          {/* Photo */}
          <div style={{ width: "150px", height: "150px", borderRadius: "50%", overflow: "hidden" }}>
            <Image
              src={person.avatar}
              alt={person.name}
              width={150}
              height={150}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* ── Name ── */}
      <div style={{ marginBottom: "20px", ...fadeUp(0.12) }}>
        <h1 style={{
          margin: 0,
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(3rem, 9vw, 6rem)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: BRAND,
        }}>
          {person.firstName} {person.lastName}
        </h1>
      </div>

      {/* ── Description ── */}
      <p style={{
        maxWidth: "680px", lineHeight: 1.85, marginBottom: "40px",
        fontFamily: "var(--font-body)", fontSize: "1.05rem",
        color: "var(--neutral-on-background-weak)", textAlign: "center",
        ...fadeUp(0.28),
      }}>
        Mobile App Developer specializing in{" "}
        <span style={{ color: BRAND, fontWeight: 600 }}>Flutter & Dart</span>
        . I combine technical expertise in Flutter with a strong business mindset.
      </p>

      {/* ── CTAs ── */}
      <Row gap="16" horizontal="center" wrap style={{ marginBottom: "56px", ...fadeUp(0.36) }}>
        <a
          href="#projects"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "14px 32px", borderRadius: "100px",
            background: BRAND, color: "#FFE9F3",
            fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem",
            textDecoration: "none", letterSpacing: "0.01em",
            transition: "opacity .2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          View My Work
        </a>
        <a
          href="https://drive.google.com/file/d/1cne4m_cSK4LbYc3s0ArECeqzzsgnDUUg/view"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "13px 32px", borderRadius: "100px",
            background: "#080707", color: "#FFE9F3",
            fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: "1rem",
            textDecoration: "none", letterSpacing: "0.01em",
            border: "1px solid var(--neutral-border-strong)",
            transition: "border-color .2s ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = BRAND; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--neutral-border-strong)"; }}
        >
          Download CV
        </a>
      </Row>

      {/* ── Scroll down ── */}
      <Column
        horizontal="center"
        gap="8"
        style={{ animation: isVisible ? "hBounce 2s ease-in-out infinite" : "none", cursor: "pointer", ...fadeUp(0.6) }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        {/* Mouse icon SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0zm-7-3v4"
            stroke="var(--neutral-on-background-weak)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <Text variant="label-default-xs" style={{ color: "var(--neutral-on-background-weak)", letterSpacing: "2px", textTransform: "uppercase" }}>
          Scroll down
        </Text>
      </Column>

      <style jsx global>{`
        @keyframes hRingPulse {
          0%,100% { box-shadow: 0 0 0 0 ${BRAND}55; }
          50%      { box-shadow: 0 0 0 6px ${BRAND}00; }
        }
        @keyframes hPing {
          0%    { transform: scale(1);   opacity: 0.25; }
          80%   { transform: scale(2.2); opacity: 0;    }
          100%  { transform: scale(2.2); opacity: 0;    }
        }
        @keyframes hBounce {
          0%,100% { transform: translateY(0);    }
          50%     { transform: translateY(8px);  }
        }
        @keyframes hSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Column>
  );
};
