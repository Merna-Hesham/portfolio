"use client";

import { useEffect, useRef, useState } from "react";
import {
  Column,
  Heading,
  Row,
  Text,
  Icon,
} from "@once-ui-system/core";
import { about } from "@/resources";

export const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredExp, setHoveredExp] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Column
      ref={sectionRef}
      fillWidth
      gap="48"
      paddingY="80"
      id="experience"
      style={{ position: "relative" }}
    >
      {/* Animated background gradients */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-120px",
          width: "480px",
          height: "480px",
          background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 60%)",
          pointerEvents: "none",
          animation: isVisible ? "pulse 6s ease-in-out infinite" : "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-100px",
          width: "360px",
          height: "360px",
          background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: isVisible ? "pulse 7s ease-in-out 2s infinite" : "none",
          zIndex: 0,
        }}
      />

      {/* Centered title */}
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
          My Journey
        </Text>
        <Heading as="h2" variant="display-strong-l">
          Experience
        </Heading>
      </Column>

      <Row gap="64" wrap style={{ zIndex: 1 }}>
      {/* Left – Stats & Icon */}
      <Column
        gap="32"
        style={{
          flex: "1 1 240px",
          minWidth: "220px",
          maxWidth: "300px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(-50px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1,
        }}
      >
        {/* Stat cards */}
        <Column gap="12">
          {[
            { value: `${about.work.experiences.length}`, label: "Companies" },
            { value: "2+", label: "Years Active" },
            { value: "1+", label: "Major Products" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "20px 24px",
                background: "var(--surface)",
                borderRadius: "16px",
                border: "1px solid var(--neutral-alpha-weak)",
                boxShadow: "0 4px 20px var(--neutral-alpha-weak)",
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `slideInLeft 0.5s ease ${0.2 + i * 0.1}s both` : "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent corner */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  background: "radial-gradient(circle at top right, var(--brand-alpha-weak) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <Text
                variant="display-strong-m"
                onBackground="brand-strong"
                style={{ lineHeight: 1, fontWeight: 900 }}
              >
                {stat.value}
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {stat.label}
              </Text>
            </div>
          ))}
        </Column>

        {/* Decorative brand icon */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "16px",
            background: "var(--brand-strong)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px var(--brand-alpha-strong)",
            animation: isVisible ? "floatIcon 3s ease-in-out infinite" : "none",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <Icon name="rocket" size="m" onBackground="page" />
        </div>
      </Column>

      {/* Right – Experience cards */}
      <Column
        gap="24"
        style={{
          flex: "2 1 500px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(40px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          zIndex: 1,
        }}
      >
        {about.work.experiences.map((exp, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredExp(index)}
            onMouseLeave={() => setHoveredExp(null)}
            style={{
              position: "relative",
              borderRadius: "24px",
              background: hoveredExp === index
                ? "var(--brand-alpha-weak)"
                : "var(--surface)",
              border: `1px solid ${hoveredExp === index ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
              boxShadow: hoveredExp === index
                ? "0 24px 70px var(--brand-alpha-medium)"
                : "0 4px 24px var(--neutral-alpha-weak)",
              transform: hoveredExp === index ? "translateY(-6px)" : "translateY(0)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "default",
              overflow: "hidden",
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? `popIn 0.5s ease ${0.3 + index * 0.15}s both` : "none",
            }}
          >
            {/* Large faded number watermark */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "16px",
                fontSize: "130px",
                fontWeight: 900,
                lineHeight: 1,
                color: hoveredExp === index ? "var(--brand-alpha-medium)" : "var(--brand-alpha-weak)",
                pointerEvents: "none",
                userSelect: "none",
                fontFamily: "var(--font-heading)",
                transition: "color 0.4s ease",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Top corner radial glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "180px",
                height: "180px",
                background: "radial-gradient(circle at top left, var(--brand-alpha-weak) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Left gradient accent bar */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "20px",
                bottom: "20px",
                width: "4px",
                borderRadius: "0 4px 4px 0",
                background: hoveredExp === index
                  ? "#FF073D"
                  : "var(--brand-alpha-medium)",
                transition: "all 0.4s ease",
              }}
            />

            {/* Card content */}
            <div style={{ padding: "28px 28px 28px 36px" }}>
              {/* Header row */}
              <Row fillWidth horizontal="between" vertical="start" wrap gap="12" style={{ marginBottom: "20px" }}>
                <Column gap="6">
                  {/* Company label */}
                  <Row gap="8" vertical="center">
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "var(--brand-strong)",
                        boxShadow: hoveredExp === index ? "0 0 12px var(--brand-strong)" : "none",
                        transition: "box-shadow 0.3s ease",
                      }}
                    />
                    <Text
                      variant="label-strong-xs"
                      onBackground="brand-strong"
                      style={{ letterSpacing: "3px", textTransform: "uppercase" }}
                    >
                      {exp.company}
                    </Text>
                  </Row>
                  {/* Role title */}
                  <Heading as="h3" variant="heading-strong-xl">
                    {exp.role}
                  </Heading>
                </Column>

                {/* Timeframe badge */}
                <div
                  style={{
                    padding: "8px 18px",
                    borderRadius: "100px",
                    background: hoveredExp === index
                      ? "#FF073D"
                      : "var(--brand-alpha-weak)",
                    border: `1px solid ${hoveredExp === index ? "transparent" : "var(--brand-alpha-medium)"}`,
                    boxShadow: hoveredExp === index ? "0 4px 20px var(--brand-alpha-strong)" : "none",
                    transition: "all 0.4s ease",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  <Text
                    variant="label-strong-xs"
                    style={{ color: hoveredExp === index ? "white" : undefined }}
                    onBackground={hoveredExp === index ? undefined : "brand-strong"}
                  >
                    {exp.timeframe}
                  </Text>
                </div>
              </Row>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: hoveredExp === index
                    ? "linear-gradient(90deg, var(--brand-alpha-medium), transparent)"
                    : "var(--neutral-alpha-weak)",
                  marginBottom: "20px",
                  transition: "all 0.4s ease",
                }}
              />

              {/* Achievements */}
              <Column gap="10">
                {exp.achievements.map((achievement, i) => (
                  <Text
                    key={i}
                    variant="body-default-s"
                    onBackground="neutral-medium"
                    style={{
                      lineHeight: 1.7,
                      opacity: isVisible ? 1 : 0,
                      animation: isVisible
                        ? `slideInLeft 0.4s ease ${0.4 + index * 0.1 + i * 0.06}s both`
                        : "none",
                    }}
                  >
                    {achievement}
                  </Text>
                ))}
              </Column>
            </div>
          </div>
        ))}
      </Column>

      </Row>

      <style jsx global>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(5deg); }
        }
      `}</style>
    </Column>
  );
};
