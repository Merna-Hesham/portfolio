"use client";

import { useEffect, useRef, useState } from "react";
import {
  Column,
  Heading,
  Row,
  Text,
  Icon,
} from "@once-ui-system/core";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const technicalSkills = [
  { name: "Flutter",     logo: `${BASE}/flutter/flutter-original.svg`,         percentage: 90 },
  { name: "Kotlin",      logo: `${BASE}/kotlin/kotlin-original.svg`,           percentage: 85 },
  { name: "Python",      logo: `${BASE}/python/python-original.svg`,           percentage: 88 },
  { name: "Firebase",    logo: `${BASE}/firebase/firebase-original.svg`,       percentage: 85 },
  { name: "Dart",        logo: `${BASE}/dart/dart-original.svg`,               percentage: 90 },
  { name: "Java",        logo: `${BASE}/java/java-original.svg`,               percentage: 80 },
  { name: "TensorFlow",  logo: `${BASE}/tensorflow/tensorflow-original.svg`,   percentage: 82 },
  { name: "PyTorch",     logo: `${BASE}/pytorch/pytorch-original.svg`,         percentage: 75 },
];

const tools = [
  { name: "Android Studio", logo: `${BASE}/androidstudio/androidstudio-original.svg` },
  { name: "VS Code",        logo: `${BASE}/vscode/vscode-original.svg` },
  { name: "Figma",          logo: `${BASE}/figma/figma-original.svg` },
  { name: "Git",            logo: `${BASE}/git/git-original.svg` },
  { name: "Jupyter",        logo: `${BASE}/jupyter/jupyter-original.svg` },
  { name: "IntelliJ",       logo: "https://api.iconify.design/logos:intellij-idea.svg" },
  { name: "scikit-learn",   logo: `${BASE}/scikitlearn/scikitlearn-original.svg` },
  { name: "Pandas",         logo: `${BASE}/pandas/pandas-original.svg` },
  { name: "NumPy",          logo: `${BASE}/numpy/numpy-original.svg` },
  { name: "Keras",          logo: `${BASE}/keras/keras-original.svg` },
];

const softSkills = [
  { name: "Problem Solving", icon: "lightbulb" },
  { name: "Leadership", icon: "person" },
  { name: "Communication", icon: "chat" },
  { name: "Adaptability", icon: "refresh" },
];

// Circular Progress Component
const CircularSkill = ({
  skill,
  index,
  isVisible,
  isHovered,
  onHover,
  onLeave
}: {
  skill: typeof technicalSkills[0];
  index: number;
  isVisible: boolean;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference - (skill.percentage / 100) * circumference;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        width: "120px",
        height: "140px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "default",
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `popIn 0.6s ease ${0.2 + index * 0.1}s both` : "none",
      }}
    >
      {/* SVG Circle */}
      <div
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg width="100" height="100" style={{ transform: "rotate(-90deg)" }}>
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--neutral-alpha-weak)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#FF073D"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={isVisible ? offset : circumference}
            style={{
              transition: "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: `${0.3 + index * 0.15}s`,
              filter: isHovered ? "drop-shadow(0 0 8px rgba(255,7,61,0.7))" : "none",
            }}
          />
        </svg>

        {/* Center icon */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: isHovered ? "var(--brand-alpha-weak)" : "transparent",
            borderRadius: "50%",
            margin: "8px",
            transition: "all 0.3s ease",
          }}
        >
          <img
            src={skill.logo}
            alt={skill.name}
            width={28}
            height={28}
            style={{ objectFit: "contain", filter: isHovered ? "drop-shadow(0 0 4px var(--brand-strong))" : "none", transition: "filter 0.3s ease" }}
          />
        </div>

        {/* Percentage badge */}
        <div
          style={{
            position: "absolute",
            bottom: "-4px",
            right: "-4px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: isHovered
              ? "var(--brand-strong)"
              : "var(--surface)",
            border: "2px solid var(--brand-strong)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: isHovered ? "0 4px 15px var(--brand-alpha-strong)" : "none",
            transition: "all 0.3s ease",
          }}
        >
          <Text
            variant="label-strong-xs"
            style={{
              fontSize: "10px",
              color: isHovered ? "white" : undefined,
            }}
            onBackground={isHovered ? undefined : "brand-strong"}
          >
            {skill.percentage}
          </Text>
        </div>
      </div>

      {/* Skill name */}
      <Text
        variant="body-strong-s"
        onBackground={isHovered ? "brand-strong" : "neutral-medium"}
        style={{
          marginTop: "12px",
          transition: "color 0.3s ease",
        }}
      >
        {skill.name}
      </Text>
    </div>
  );
};

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [hoveredSoft, setHoveredSoft] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      id="skills"
      style={{ position: "relative" }}
    >
      {/* Animated background gradients */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "-100px",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 60%)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          animation: isVisible ? "pulse 4.5s ease-in-out infinite" : "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "-80px",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: isVisible ? "pulse 5.5s ease-in-out 1s infinite" : "none",
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
          My Expertise
        </Text>
        <Heading as="h2" variant="display-strong-l">
          Skills
        </Heading>
      </Column>

      {/* Skills Content — full width */}
      <Column
        gap="40"
        fillWidth
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          zIndex: 1,
        }}
      >
        {/* Technical Skills - Circular Grid */}
        <Column gap="20" horizontal="center" style={{ textAlign: "center" }}>
          <Text variant="heading-strong-s" onBackground="neutral-medium">
            Technical Skills
          </Text>
          <Row wrap gap="16" style={{ justifyContent: "center" }}>
            {technicalSkills.map((skill, index) => (
              <CircularSkill
                key={index}
                skill={skill}
                index={index}
                isVisible={isVisible}
                isHovered={hoveredSkill === index}
                onHover={() => setHoveredSkill(index)}
                onLeave={() => setHoveredSkill(null)}
              />
            ))}
          </Row>
        </Column>

        {/* Tools - Hexagonal Grid Style */}
        <Column gap="20" horizontal="center" style={{ textAlign: "center" }}>
          <Text variant="heading-strong-s" onBackground="neutral-medium">
            Tools & Technologies
          </Text>
          <Row wrap gap="12" style={{ justifyContent: "center" }}>
            {tools.map((tool, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredTool(index)}
                onMouseLeave={() => setHoveredTool(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  background: hoveredTool === index
                    ? "var(--brand-alpha-weak)"
                    : "var(--surface)",
                  border: `1px solid ${hoveredTool === index ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
                  transform: hoveredTool === index ? "translateY(-6px) scale(1.05)" : "translateY(0)",
                  boxShadow: hoveredTool === index
                    ? "0 15px 40px var(--brand-alpha-medium)"
                    : "0 4px 15px var(--neutral-alpha-weak)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `popIn 0.5s ease ${0.5 + index * 0.08}s both` : "none",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background: hoveredTool === index
                      ? "var(--brand-strong)"
                      : "var(--brand-alpha-weak)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: hoveredTool === index ? "rotate(-5deg)" : "rotate(0)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    width={24}
                    height={24}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <Text
                  variant="body-default-xs"
                  onBackground={hoveredTool === index ? "brand-strong" : "neutral-medium"}
                  style={{ transition: "color 0.3s ease", textAlign: "center" }}
                >
                  {tool.name}
                </Text>
              </div>
            ))}
          </Row>
        </Column>

        {/* Soft Skills - Pill Style */}
        <Column gap="20" horizontal="center" style={{ textAlign: "center" }}>
          <Text variant="heading-strong-s" onBackground="neutral-medium">
            Soft Skills
          </Text>
          <Row wrap gap="12" style={{ justifyContent: "center" }}>
            {softSkills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSoft(index)}
                onMouseLeave={() => setHoveredSoft(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 20px",
                  borderRadius: "50px",
                  background: hoveredSoft === index
                    ? "var(--brand-strong)"
                    : "var(--brand-alpha-weak)",
                  border: `1px solid ${hoveredSoft === index ? "transparent" : "var(--brand-alpha-medium)"}`,
                  transform: hoveredSoft === index ? "scale(1.05)" : "scale(1)",
                  boxShadow: hoveredSoft === index
                    ? "0 10px 30px var(--brand-alpha-strong)"
                    : "none",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `popIn 0.5s ease ${0.7 + index * 0.1}s both` : "none",
                }}
              >
                <Icon
                  name={skill.icon}
                  size="s"
                  onBackground={hoveredSoft === index ? "page" : "brand-strong"}
                />
                <Text
                  variant="body-strong-s"
                  style={{ color: hoveredSoft === index ? "white" : undefined }}
                  onBackground={hoveredSoft === index ? undefined : "brand-strong"}
                >
                  {skill.name}
                </Text>
              </div>
            ))}
          </Row>
        </Column>
      </Column>

      <style jsx global>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
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
