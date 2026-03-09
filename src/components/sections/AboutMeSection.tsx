"use client";

import { useEffect, useRef, useState } from "react";
import { Column, Heading, Row, Text, Icon } from "@once-ui-system/core";
import { person, about } from "@/resources";

const BRAND  = "#FF073D";
const SHADOW = "#FD3D65";
const DARK   = "#080707";

const stats = [
  { value: "3+",   label: "Years Experience", icon: "calendar" },
  { value: "10+",  label: "Projects Built",   icon: "grid"     },
  { value: "3.81", label: "GPA",              icon: "book"     },
  { value: "5+",   label: "Tech Stack",       icon: "code"     },
];

const highlights = [
  { icon: "mapPin",    text: "Cairo, Egypt"          },
  { icon: "lightbulb", text: "Open to Opportunities" },
  { icon: "person",    text: "Co-founder of Goia"    },
];

export const AboutMeSection = () => {
  const [isVisible,   setIsVisible]   = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
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
      gap="48"
      paddingY="80"
      id="about"
      style={{ position: "relative" }}
    >

      {/* ── Section header ── */}
      <Column gap="12" horizontal="center" style={{ textAlign: "center", ...fadeUp(0) }}>
        <Text
          variant="label-strong-s"
          onBackground="brand-strong"
          style={{ letterSpacing: "4px", textTransform: "uppercase" }}
        >
          Get To Know Me
        </Text>
        <Heading as="h2" variant="display-strong-l">About Me</Heading>
        <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: BRAND, margin: "0 auto" }} />
      </Column>

      {/* ── Top row: Identity + Bio side by side on wide screens ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        alignItems: "stretch",
        gap: "20px",
        ...fadeUp(0.1),
      }}>

        {/* Identity card */}
        <div style={{
          position: "relative", borderRadius: "24px",
          background: "var(--surface)",
          border: "1px solid var(--neutral-alpha-weak)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{
            position: "absolute", left: 0, top: "20px", bottom: "20px",
            width: "4px", borderRadius: "0 4px 4px 0", background: BRAND,
          }} />
          <div style={{
            position: "absolute", top: "-8px", right: "16px",
            fontSize: "100px", fontWeight: 900, lineHeight: 1,
            color: "var(--brand-alpha-weak)",
            pointerEvents: "none", userSelect: "none",
            fontFamily: "var(--font-heading)",
          }}>ME</div>

          <div style={{ padding: "28px 28px 28px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
            <Column gap={"10" as any} style={{ marginBottom: "24px" }}>
              <Heading as="h3" variant="heading-strong-xl">{person.name}</Heading>
              <div style={{
                display: "inline-flex", padding: "4px 14px", borderRadius: "100px",
                background: `${BRAND}15`,
                border: `1px solid ${BRAND}40`,
                width: "fit-content",
              }}>
                <Text variant="label-strong-xs" style={{ color: BRAND }}>{person.role}</Text>
              </div>
            </Column>

            <Column gap="20">
              {highlights.map((h, i) => (
                <Row key={i} gap="16" vertical="center">
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "10px", flexShrink: 0,
                    background: `${BRAND}15`, border: `1px solid ${BRAND}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon name={h.icon} size="xs" onBackground="brand-strong" />
                  </div>
                  <Text variant="body-default-s" onBackground="neutral-medium">{h.text}</Text>
                </Row>
              ))}
            </Column>
          </div>
        </div>

        {/* Bio card */}
        <div style={{
          position: "relative", borderRadius: "24px",
          background: "var(--surface)",
          border: "1px solid var(--neutral-alpha-weak)",
          overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}>
          <div style={{
            position: "absolute", left: 0, top: "20px", bottom: "20px",
            width: "4px", borderRadius: "0 4px 4px 0", background: SHADOW,
          }} />
          <div style={{
            position: "absolute", top: "-8px", right: "16px",
            fontSize: "110px", fontWeight: 900, lineHeight: 1,
            color: "var(--brand-alpha-weak)",
            pointerEvents: "none", userSelect: "none",
            fontFamily: "var(--font-heading)",
          }}>01</div>

          <div style={{ padding: "28px 28px 28px 40px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
            <Row gap="8" vertical="center" style={{ marginBottom: "16px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: BRAND }} />
              <Text
                variant="label-strong-xs"
                onBackground="brand-strong"
                style={{ letterSpacing: "3px", textTransform: "uppercase" }}
              >
                Bio
              </Text>
            </Row>
            <Text
              variant="body-default-m"
              onBackground="neutral-medium"
              style={{ lineHeight: 1.85, fontStyle: "italic", position: "relative", zIndex: 1 }}
            >
              &#8220;{about.intro.description}&#8221;
            </Text>
          </div>
        </div>
      </div>

      {/* ── Stats grid ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: "16px",
        ...fadeUp(0.2),
      }}>
        {stats.map((s, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredStat(i)}
            onMouseLeave={() => setHoveredStat(null)}
            style={{
              padding: "24px 16px", borderRadius: "20px", textAlign: "center",
              background: hoveredStat === i ? `${BRAND}12` : "var(--surface)",
              border: `1px solid ${hoveredStat === i ? `${BRAND}40` : "var(--neutral-alpha-weak)"}`,
              transform: hoveredStat === i ? "translateY(-6px)" : "translateY(0)",
              boxShadow: hoveredStat === i ? `0 20px 40px ${BRAND}18` : "none",
              transition: "all .4s cubic-bezier(.16,1,.3,1)",
              cursor: "default",
            }}
          >
            <div style={{
              width: "40px", height: "40px", margin: "0 auto 12px",
              borderRadius: "12px",
              background: hoveredStat === i ? BRAND : `${BRAND}15`,
              border: `1px solid ${BRAND}30`,
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background .4s ease",
            }}>
              <Icon
                name={s.icon}
                size="s"
                onBackground={hoveredStat === i ? "neutral-strong" : "brand-strong"}
              />
            </div>
            <Text
              variant="display-strong-m"
              onBackground="brand-strong"
              style={{ display: "block", lineHeight: 1, fontWeight: 900, marginBottom: "6px" }}
            >
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
          display: "flex", alignItems: "center", gap: "16px",
          padding: "20px 28px", borderRadius: "20px",
          background: "var(--surface)",
          border: "1px solid var(--neutral-alpha-weak)",
          textDecoration: "none",
          transition: "all .35s cubic-bezier(.16,1,.3,1)",
          ...fadeUp(0.28),
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = `${BRAND}10`;
          el.style.borderColor = `${BRAND}40`;
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow = `0 20px 40px ${BRAND}18`;
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--surface)";
          el.style.borderColor = "var(--neutral-alpha-weak)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Email icon — dark bg with white icon */}
        <div style={{
          width: "48px", height: "48px", borderRadius: "14px",
          background: DARK,
          border: `2px solid ${BRAND}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <Icon name="email" size="m" style={{ color: BRAND }} />
        </div>

        <Column gap="2">
          <Text
            variant="label-strong-xs"
            onBackground="neutral-weak"
            style={{ letterSpacing: "2px", textTransform: "uppercase" }}
          >
            Get in touch
          </Text>
          <Text variant="body-strong-m" onBackground="brand-strong">{person.email}</Text>
        </Column>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "8px" }}>
          <Text variant="body-default-s" onBackground="neutral-weak">Say hello</Text>
          <Icon name="arrowRight" size="m" onBackground="brand-strong" />
        </div>
      </a>

    </Column>
  );
};
