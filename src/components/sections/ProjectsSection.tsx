"use client";

import { useEffect, useRef, useState } from "react";
import {
  Column,
  Heading,
  Row,
  Text,
  Tag,
  Button,
} from "@once-ui-system/core";

const projects = [
  {
    title: "Goia",
    description: "AI-powered virtual tour guide app with computer vision integration",
    image: "/images/projects/goia_cover.png",
    tags: ["Flutter", "AI", "Firebase", "Computer Vision"],
    category: "mobile",
    link: "/work/goia",
  },
  {
    title: "Foodiee",
    description: "Food delivery mobile application with real-time tracking",
    image: "/images/projects/foodie_cover.png",
    tags: ["Flutter", "Firebase", "REST API"],
    category: "mobile",
    link: "/work/foodiee",
  },
  {
    title: "Padelytics",
    description: "Sports analytics app for padel players and coaches",
    image: "/images/projects/padelytics_cover.png",
    tags: ["Kotlin", "Android", "ML Kit"],
    category: "mobile",
    link: "/work/padelytics",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "AI/ML", value: "ai" },
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <Column ref={sectionRef} fillWidth gap="48" paddingY="80" id="projects" style={{ position: "relative" }}>

      {/* Background gradients */}
      <div style={{ position: "absolute", top: "20%", right: "-100px", width: "420px", height: "420px", background: "transparent", pointerEvents: "none", animation: isVisible ? "pulse 6s ease-in-out infinite" : "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "15%", left: "-80px", width: "360px", height: "360px", background: "transparent", pointerEvents: "none", animation: isVisible ? "pulse 7s ease-in-out 2s infinite" : "none", zIndex: 0 }} />

      {/* ── Centered header + filters ── */}
      <Column
        gap="20"
        horizontal="center"
        style={{
          textAlign: "center",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-30px)",
          transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 1,
        }}
      >
        <Text variant="label-strong-s" onBackground="brand-strong" style={{ letterSpacing: "4px", textTransform: "uppercase" }}>
          My Work
        </Text>
        <Heading as="h2" variant="display-strong-l">
          Projects
        </Heading>
        <div style={{ width:"48px", height:"3px", borderRadius:"2px", background:"#FF073D", margin:"0 auto" }} />

        <Row gap="8" wrap horizontal="center">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "primary" : "secondary"}
              size="s"
              onClick={() => setActiveFilter(filter.value)}
              style={{
                transform: activeFilter === filter.value ? "scale(1.05)" : "scale(1)",
                boxShadow: activeFilter === filter.value ? "0 8px 25px var(--brand-alpha-medium)" : "none",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {filter.label}
            </Button>
          ))}
          <Button href="/work" variant="secondary" size="s" arrowIcon>
            View All
          </Button>
        </Row>
      </Column>

      {/* ── Showcase project cards ── */}
      <Column gap="24" style={{ zIndex: 1 }}>
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            style={{
              position: "relative",
              borderRadius: "28px",
              border: `1px solid ${hoveredProject === index ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
              overflow: "hidden",
              background: hoveredProject === index ? "var(--brand-alpha-weak)" : "var(--surface)",
              boxShadow: hoveredProject === index ? "0 28px 80px var(--brand-alpha-medium)" : "0 4px 24px var(--neutral-alpha-weak)",
              transform: hoveredProject === index ? "translateY(-6px)" : "translateY(0)",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "default",
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? `popIn 0.5s ease ${0.2 + index * 0.15}s both` : "none",
            }}
          >
            {/* Large faded project number */}
            <div style={{ position: "absolute", top: "-10px", right: "16px", fontSize: "130px", fontWeight: 900, lineHeight: 1, color: hoveredProject === index ? "var(--brand-alpha-medium)" : "var(--brand-alpha-weak)", userSelect: "none", pointerEvents: "none", fontFamily: "var(--font-heading)", transition: "color 0.4s ease", zIndex: 0 }}>
              {String(index + 1).padStart(2, "0")}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {/* Image section */}
              <div
                style={{
                  flex: "1 1 280px",
                  minHeight: "280px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Project image via CSS background for reliable rendering */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: hoveredProject === index ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,7,61,0.85)",
                    opacity: hoveredProject === index ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  <div style={{ padding: "14px 28px", borderRadius: "14px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}>
                    <Text variant="body-strong-m" style={{ color: "white" }}>
                      View Project →
                    </Text>
                  </div>
                </div>
              </div>

              {/* Content section */}
              <div
                style={{
                  flex: "1 1 300px",
                  padding: "36px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Tags */}
                <Row gap="8" wrap>
                  {project.tags.map((tag, i) => (
                    <Tag
                      key={i}
                      size="s"
                      style={{
                        background: hoveredProject === index ? "var(--brand-alpha-weak)" : undefined,
                        borderColor: hoveredProject === index ? "var(--brand-alpha-medium)" : undefined,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </Row>

                {/* Title */}
                <Heading
                  as="h3"
                  variant="display-strong-s"
                  style={{
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.title}
                </Heading>

                {/* Description */}
                <Text variant="body-default-m" onBackground="neutral-weak" style={{ lineHeight: 1.7 }}>
                  {project.description}
                </Text>

                {/* Divider */}
                <div style={{ height: "1px", background: hoveredProject === index ? "rgba(255, 7, 61, 0.25)" : "var(--neutral-alpha-weak)", transition: "all 0.4s ease" }} />

                {/* Link */}
                <div>
                  <a
                    href={project.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 22px",
                      borderRadius: "12px",
                      background: hoveredProject === index ? "#FF073D" : "var(--brand-alpha-weak)",
                      border: `1px solid ${hoveredProject === index ? "transparent" : "var(--brand-alpha-medium)"}`,
                      textDecoration: "none",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      boxShadow: hoveredProject === index ? "0 8px 25px var(--brand-alpha-strong)" : "none",
                    }}
                  >
                    <Text variant="body-strong-s" style={{ color: hoveredProject === index ? "white" : undefined }} onBackground={hoveredProject === index ? undefined : "brand-strong"}>
                      View Project
                    </Text>
                    <Text style={{ color: hoveredProject === index ? "white" : undefined, fontSize: "14px" }} onBackground={hoveredProject === index ? undefined : "brand-strong"}>
                      →
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Column>

      <style jsx global>{`
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
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
