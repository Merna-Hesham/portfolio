"use client";

import { useState, useEffect, useRef } from "react";
import { Icon, Text } from "@once-ui-system/core";
import { contact, social } from "@/resources";

const BRAND = "#FF073D";

export const ContactSection = () => {
  const [isVisible,     setIsVisible]     = useState(false);
  const [hoveredInfo,   setHoveredInfo]   = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  if (!contact.display) return null;

  const infoItems = [
    { icon: "email",  label: "Email",    value: contact.email,    href: `mailto:${contact.email}` },
    ...(contact.phone    ? [{ icon: "phone",  label: "Phone",    value: contact.phone,    href: `tel:${contact.phone}` }]    : []),
    ...(contact.location ? [{ icon: "mapPin", label: "Location", value: contact.location, href: undefined }] : []),
  ];

  const essentialSocial = social.filter(s => s.essential);

  return (
    <div
      ref={sectionRef}
      id="contact"
      style={{
        width: "100%",
        padding: "80px 0",
        position: "relative",
        opacity:   isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Section title */}
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <Text variant="label-strong-s" onBackground="brand-strong"
          style={{ letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
          Get In Touch
        </Text>
        <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, margin: "0 0 12px", lineHeight: 1.1 }}>
          Contact Info
        </h2>
        <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: BRAND, margin: "0 auto" }} />
      </div>

      {/* Two-column layout */}
      <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "stretch" }}>

        {/* ── LEFT: hero panel ── */}
        <div style={{
          flex: "1 1 280px",
          minWidth: "260px",
          borderRadius: "28px",
          background: `linear-gradient(145deg, ${BRAND}15 0%, ${BRAND}06 60%, transparent 100%)`,
          border: `1.5px solid ${BRAND}28`,
          padding: "44px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "40px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Top bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px",
            background: `linear-gradient(90deg, transparent, ${BRAND}, transparent)` }} />
          {/* Decorative rings */}
          <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "200px", height: "200px",
            borderRadius: "50%", border: `1px solid ${BRAND}15`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "120px", height: "120px",
            borderRadius: "50%", border: `1px solid ${BRAND}25`, pointerEvents: "none" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Available dot */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "10px", height: "10px", borderRadius: "50%",
                background: BRAND, boxShadow: `0 0 12px ${BRAND}`,
                animation: isVisible ? "contactPulse 2s ease-in-out infinite" : "none",
              }} />
              <Text variant="label-strong-xs" onBackground="brand-strong"
                style={{ letterSpacing: "3px", textTransform: "uppercase" }}>
                Available for work
              </Text>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,3vw,2.2rem)",
                fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
                Let's build<br />
                <span style={{
                  background: `linear-gradient(90deg, ${BRAND}, #FF6B8A)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>something great.</span>
              </h3>
              <Text variant="body-default-m" onBackground="neutral-medium" style={{ lineHeight: 1.7 }}>
                Open to collaborations, internships, and exciting new projects. Drop me a message!
              </Text>
            </div>
          </div>

          {/* Social chips */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <Text variant="label-strong-xs" onBackground="neutral-weak"
              style={{ textTransform: "uppercase", letterSpacing: "2px" }}>Find me on</Text>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {essentialSocial.map((s) => {
                const isHov = hoveredSocial === s.name;
                return (
                  <a key={s.name} href={s.link} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(s.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={{
                      display: "flex", alignItems: "center", gap: "7px",
                      padding: "9px 16px", borderRadius: "100px",
                      background: isHov ? BRAND : `${BRAND}12`,
                      border: `1px solid ${isHov ? "transparent" : `${BRAND}28`}`,
                      textDecoration: "none",
                      transform: isHov ? "translateY(-2px)" : "translateY(0)",
                      boxShadow: isHov ? `0 6px 20px ${BRAND}40` : "none",
                      transition: "all 0.2s cubic-bezier(0.2,0,0,1)",
                    }}
                  >
                    <Icon name={s.icon as any} size="xs" onBackground={isHov ? "neutral-strong" : "brand-strong"} />
                    <Text variant="label-strong-xs" style={{ color: isHov ? "white" : BRAND }}>{s.name}</Text>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── RIGHT: contact details ── */}
        <div style={{ flex: "1 1 280px", minWidth: "260px", display: "flex", flexDirection: "column", gap: "16px" }}>
          {infoItems.map((item, i) => {
            const isHov = hoveredInfo === i;
            return (
              <div key={i}
                onMouseEnter={() => setHoveredInfo(i)}
                onMouseLeave={() => setHoveredInfo(null)}
                onClick={() => item.href && window.open(item.href, "_blank")}
                style={{
                  display: "flex", gap: "20px", alignItems: "center",
                  padding: "24px 28px",
                  borderRadius: "20px",
                  background: isHov ? `${BRAND}0C` : "transparent",
                  border: `1px solid ${isHov ? `${BRAND}30` : `${BRAND}15`}`,
                  boxShadow: isHov ? `0 16px 48px ${BRAND}12` : "none",
                  transform: isHov ? "translateX(6px)" : "translateX(0)",
                  cursor: item.href ? "pointer" : "default",
                  transition: "all 0.2s cubic-bezier(0.2,0,0,1)",
                  position: "relative",
                  overflow: "hidden",
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `contactFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${0.15 + i * 0.1}s both` : "none",
                }}
              >
                {/* Left accent */}
                <div style={{
                  position: "absolute", left: 0, top: "16px", bottom: "16px",
                  width: "3px", borderRadius: "0 3px 3px 0",
                  background: isHov ? BRAND : `${BRAND}35`,
                  transition: "background 0.2s ease",
                }} />

                {/* Icon */}
                <div style={{
                  width: "52px", height: "52px", minWidth: "52px", borderRadius: "16px", flexShrink: 0,
                  background: isHov ? BRAND : `${BRAND}12`,
                  border: `1px solid ${isHov ? "transparent" : `${BRAND}22`}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: isHov ? `0 8px 24px ${BRAND}40` : "none",
                  transition: "all 0.2s cubic-bezier(0.2,0,0,1)",
                }}>
                  <Icon name={item.icon as any} size="s" onBackground={isHov ? "neutral-strong" : "brand-strong"} />
                </div>

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
                  <Text variant="label-strong-xs" onBackground="neutral-weak"
                    style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
                    {item.label}
                  </Text>
                  <Text variant="body-strong-l">{item.value}</Text>
                </div>

                {/* Arrow */}
                {item.href && (
                  <div style={{
                    flexShrink: 0,
                    opacity: isHov ? 1 : 0,
                    transform: isHov ? "translateX(0)" : "translateX(-8px)",
                    transition: "all 0.18s ease",
                  }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9h10M10 5l4 4-4 4" stroke={BRAND} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactPulse {
          0%, 100% { box-shadow: 0 0 6px ${BRAND}; }
          50%       { box-shadow: 0 0 16px ${BRAND}, 0 0 28px ${BRAND}60; }
        }
      `}</style>
    </div>
  );
};
