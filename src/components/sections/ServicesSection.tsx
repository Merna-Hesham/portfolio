"use client";

import { useEffect, useRef, useState } from "react";
import {
  Column,
  Heading,
  Row,
  Text,
  Icon,
} from "@once-ui-system/core";
import { services } from "@/resources";

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!services.display) return null;

  const featured = services.items.slice(0, 2);
  const grid = services.items.slice(2);

  return (
    <Column
      ref={sectionRef}
      fillWidth
      gap="48"
      paddingY="80"
      id="services"
      style={{ position: "relative" }}
    >
      {/* Background gradients */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "-100px",
          width: "460px",
          height: "460px",
          background: "transparent",
          pointerEvents: "none",
          animation: isVisible ? "pulse 5s ease-in-out infinite" : "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-80px",
          width: "380px",
          height: "380px",
          background: "transparent",
          pointerEvents: "none",
          animation: isVisible ? "pulse 7s ease-in-out 2s infinite" : "none",
          zIndex: 0,
        }}
      />

      {/* ── Centered header ── */}
      <Column
        gap="12"
        horizontal="center"
        style={{
          textAlign: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1,
        }}
      >
        <Text
          variant="label-strong-s"
          onBackground="brand-strong"
          style={{ letterSpacing: "4px", textTransform: "uppercase" }}
        >
          What I Offer
        </Text>
        <Heading as="h2" variant="display-strong-l">
          Services
        </Heading>
        <div style={{ width:"48px", height:"3px", borderRadius:"2px", background:"#FF073D", margin:"0 auto" }} />
        <Text
          variant="body-default-l"
          onBackground="neutral-weak"
          style={{ maxWidth: "520px", margin: "0 auto" }}
        >
          From native mobile apps to AI-powered products — here&apos;s how I can help bring your vision to life.
        </Text>
      </Column>

      {/* ── Bento grid ── */}
      <Column gap="20" style={{ zIndex: 1 }}>

        {/* Row 1: 2 featured cards (wider, taller) */}
        <Row gap="20" wrap>
          {featured.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{
                flex: "1 1 300px",
                padding: "36px",
                borderRadius: "28px",
                background: hoveredService === index
                  ? "var(--brand-alpha-weak)"
                  : "var(--surface)",
                border: `1px solid ${hoveredService === index ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
                boxShadow: hoveredService === index
                  ? "0 28px 80px var(--brand-alpha-medium)"
                  : "0 4px 24px var(--neutral-alpha-weak)",
                transform: hoveredService === index ? "translateY(-8px)" : "translateY(0)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `popIn 0.5s ease ${0.2 + index * 0.12}s both` : "none",
              }}
            >
              {/* Large faded number */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-16px",
                  right: "12px",
                  fontSize: "110px",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: hoveredService === index ? "var(--brand-alpha-medium)" : "var(--brand-alpha-weak)",
                  userSelect: "none",
                  pointerEvents: "none",
                  fontFamily: "var(--font-heading)",
                  transition: "color 0.4s ease",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "160px",
                  height: "160px",
                  background: "transparent",
                  pointerEvents: "none",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "68px",
                  height: "68px",
                  borderRadius: "20px",
                  background: hoveredService === index
                    ? "#FF073D"
                    : "var(--brand-alpha-weak)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "24px",
                  transform: hoveredService === index ? "rotate(-8deg) scale(1.1)" : "rotate(0)",
                  boxShadow: hoveredService === index ? "0 12px 40px var(--brand-alpha-strong)" : "none",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <Icon
                  name={service.icon!}
                  size="l"
                  onBackground={hoveredService === index ? "neutral-strong" : "brand-strong"}
                />
              </div>

              <Column gap={"10" as any}>
                <Heading as="h3" variant="heading-strong-l">
                  {service.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {service.description}
                </Text>
              </Column>

              {/* Bottom accent bar */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "36px",
                  right: "36px",
                  height: "3px",
                  borderRadius: "3px 3px 0 0",
                  background: hoveredService === index
                    ? "#FF073D"
                    : "var(--brand-alpha-weak)",
                  transition: "all 0.4s ease",
                }}
              />
            </div>
          ))}
        </Row>

        {/* Row 2: 4 smaller service cards */}
        <Row gap="20" wrap>
          {grid.map((service, index) => {
            const actualIndex = index + 2;
            return (
              <div
                key={actualIndex}
                onMouseEnter={() => setHoveredService(actualIndex)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  flex: "1 1 180px",
                  minWidth: "160px",
                  padding: "28px",
                  borderRadius: "22px",
                  background: hoveredService === actualIndex
                    ? "var(--brand-alpha-weak)"
                    : "var(--surface)",
                  border: `1px solid ${hoveredService === actualIndex ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
                  boxShadow: hoveredService === actualIndex
                    ? "0 20px 56px var(--brand-alpha-medium)"
                    : "0 4px 20px var(--neutral-alpha-weak)",
                  transform: hoveredService === actualIndex ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `popIn 0.5s ease ${0.35 + index * 0.1}s both` : "none",
                }}
              >
                {/* Faded number */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    right: "8px",
                    fontSize: "80px",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: hoveredService === actualIndex ? "var(--brand-alpha-medium)" : "var(--brand-alpha-weak)",
                    userSelect: "none",
                    pointerEvents: "none",
                    fontFamily: "var(--font-heading)",
                    transition: "color 0.4s ease",
                  }}
                >
                  {String(actualIndex + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "15px",
                    background: hoveredService === actualIndex
                      ? "#FF073D"
                      : "var(--brand-alpha-weak)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "18px",
                    transform: hoveredService === actualIndex ? "rotate(-8deg) scale(1.1)" : "rotate(0)",
                    boxShadow: hoveredService === actualIndex ? "0 8px 28px var(--brand-alpha-strong)" : "none",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <Icon
                    name={service.icon!}
                    size="m"
                    onBackground={hoveredService === actualIndex ? "neutral-strong" : "brand-strong"}
                  />
                </div>

                <Column gap="8">
                  <Text variant="body-strong-m">{service.title}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {service.description}
                  </Text>
                </Column>

                {/* Bottom accent bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: "28px",
                    right: "28px",
                    height: "2px",
                    borderRadius: "2px 2px 0 0",
                    background: hoveredService === actualIndex
                      ? "#FF073D"
                      : "var(--brand-alpha-weak)",
                    transition: "all 0.4s ease",
                  }}
                />
              </div>
            );
          })}
        </Row>
      </Column>

      <style jsx global>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
    </Column>
  );
};
