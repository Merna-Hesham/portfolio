"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Heading, Text } from "@once-ui-system/core";
import { testimonials } from "@/resources";

const BRAND = "#FF073D";
const AUTO_DELAY = 5000;

export const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive]       = useState(0);
  const [dir, setDir]             = useState<"left" | "right">("right");
  const [hoveredSide, setHoveredSide]   = useState<"prev" | "next" | null>(null);
  const [hoveredArrow, setHoveredArrow] = useState<"prev" | "next" | null>(null);
  const [hoveredCard, setHoveredCard]   = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lockedRef  = useRef(false);
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback((next: number, direction: "left" | "right") => {
    if (lockedRef.current) return;
    lockedRef.current = true;
    setDir(direction);
    setActive(next);
    setHoveredCard(false);
    setTimeout(() => { lockedRef.current = false; }, 300);
  }, []);

  const prev = useCallback(() => {
    goTo((active - 1 + testimonials.items.length) % testimonials.items.length, "left");
  }, [active, goTo]);

  const next = useCallback(() => {
    goTo((active + 1) % testimonials.items.length, "right");
  }, [active, goTo]);

  useEffect(() => {
    if (!isVisible) return;
    timerRef.current = setTimeout(next, AUTO_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [isVisible, active, next]);

  if (!testimonials.display) return null;

  const items   = testimonials.items;
  const prevIdx = (active - 1 + items.length) % items.length;
  const nextIdx = (active + 1) % items.length;

  return (
    <div
      ref={sectionRef}
      id="testimonials"
      style={{ width: "100%", padding: "80px 0", position: "relative" }}
    >
      {/* Section title */}
      <div style={{
        textAlign: "center",
        marginBottom: "48px",
        opacity:   isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-30px)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <Text variant="label-strong-s" onBackground="brand-strong"
          style={{ letterSpacing: "4px", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
          What Others Say
        </Text>
        <Heading as="h2" variant="display-strong-l">Testimonials</Heading>
        <div style={{ width: "48px", height: "3px", borderRadius: "2px", background: BRAND, margin: "12px auto 0" }} />
      </div>

      {/* Carousel */}
      <div style={{
        opacity:   isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
        display: "flex", flexDirection: "column", gap: "36px", alignItems: "center",
      }}>

        {/* Three-card row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", width: "100%" }}>

          {/* Ghost prev */}
          <div
            className="t-ghost"
            onClick={prev}
            onMouseEnter={() => setHoveredSide("prev")}
            onMouseLeave={() => setHoveredSide(null)}
            style={{
              flex: "0 0 220px", maxWidth: "220px",
              borderRadius: "20px",
              background: hoveredSide === "prev" ? `${BRAND}08` : "transparent",
              border: `1px solid ${hoveredSide === "prev" ? `${BRAND}25` : `${BRAND}10`}`,
              padding: "24px 20px",
              opacity: hoveredSide === "prev" ? 0.7 : 0.38,
              transform: `scale(${hoveredSide === "prev" ? 0.91 : 0.87}) translateX(18px)`,
              transition: "all 0.25s cubic-bezier(0.2,0,0,1)",
              cursor: "pointer",
              overflow: "hidden",
              display: "flex", flexDirection: "column", gap: "12px",
            }}
          >
            <GhostCardContent item={items[prevIdx]} />
          </div>

          {/* Active card */}
          <div
            key={`${active}-${dir}`}
            onMouseEnter={() => setHoveredCard(true)}
            onMouseLeave={() => setHoveredCard(false)}
            style={{
              flex: "0 1 540px", maxWidth: "540px",
              position: "relative",
              borderRadius: "28px",
              background: hoveredCard ? `${BRAND}06` : "transparent",
              border: `1.5px solid ${hoveredCard ? `${BRAND}50` : `${BRAND}28`}`,
              boxShadow: hoveredCard
                ? `0 40px 100px ${BRAND}20, 0 8px 32px ${BRAND}15`
                : `0 20px 60px ${BRAND}10`,
              overflow: "hidden",
              transform: hoveredCard ? "translateY(-6px)" : "translateY(0)",
              transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s cubic-bezier(0.2,0,0,1)",
              animation: `tCardIn 0.28s cubic-bezier(0.2,0,0,1) both`,
            }}
          >
            {/* Top gradient bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "3px",
              background: `linear-gradient(90deg, transparent, ${BRAND}, transparent)`,
              opacity: hoveredCard ? 1 : 0.6,
              transition: "opacity 0.25s ease",
            }} />

            {/* Watermark quote */}
            <div style={{
              position: "absolute", top: "-8px", right: "20px",
              fontSize: "140px", fontWeight: 900, lineHeight: 1,
              color: `${BRAND}${hoveredCard ? "18" : "0C"}`,
              fontFamily: "var(--font-heading)", pointerEvents: "none", userSelect: "none",
              transition: "color 0.25s ease",
            }}>&#8220;</div>

            <div className="t-card-inner" style={{ padding: "40px 40px 36px", display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{
                    fontSize: "18px", color: BRAND,
                    filter: `drop-shadow(0 0 ${hoveredCard ? "8px" : "4px"} ${BRAND}${hoveredCard ? "CC" : "80"})`,
                    transition: "filter 0.25s ease",
                  }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <Text variant="body-default-l" onBackground="neutral-medium"
                style={{ lineHeight: 1.8, fontStyle: "italic" }}>
                &#8220;{items[active].content}&#8221;
              </Text>

              <div style={{ height: "1px", background: `${BRAND}${hoveredCard ? "35" : "18"}`, transition: "background 0.25s ease" }} />

              {/* Person row */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  width: "52px", height: "52px", minWidth: "52px", borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg, ${BRAND}, #FF4D6D)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 8px 24px ${BRAND}${hoveredCard ? "60" : "35"}`,
                  transition: "box-shadow 0.25s ease",
                }}>
                  <Text variant="heading-strong-m" style={{ color: "white", lineHeight: 1 }}>
                    {items[active].name.charAt(0)}
                  </Text>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                  <Text variant="body-strong-l">{items[active].name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">{items[active].role}</Text>
                  {items[active].company && (
                    <div style={{
                      display: "inline-flex", padding: "3px 12px", borderRadius: "100px",
                      background: `${BRAND}12`, border: `1px solid ${BRAND}30`, width: "fit-content",
                    }}>
                      <Text variant="label-strong-xs" style={{ color: BRAND }}>{items[active].company}</Text>
                    </div>
                  )}
                </div>

                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
                  background: `${BRAND}${hoveredCard ? "18" : "0C"}`,
                  border: `1px solid ${BRAND}${hoveredCard ? "40" : "22"}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.25s ease, border-color 0.25s ease",
                }}>
                  <Text variant="display-strong-s" style={{ color: BRAND, lineHeight: 1 }}>
                    {String(active + 1).padStart(2, "0")}
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Ghost next */}
          <div
            className="t-ghost"
            onClick={next}
            onMouseEnter={() => setHoveredSide("next")}
            onMouseLeave={() => setHoveredSide(null)}
            style={{
              flex: "0 0 220px", maxWidth: "220px",
              borderRadius: "20px",
              background: hoveredSide === "next" ? `${BRAND}08` : "transparent",
              border: `1px solid ${hoveredSide === "next" ? `${BRAND}25` : `${BRAND}10`}`,
              padding: "24px 20px",
              opacity: hoveredSide === "next" ? 0.7 : 0.38,
              transform: `scale(${hoveredSide === "next" ? 0.91 : 0.87}) translateX(-18px)`,
              transition: "all 0.25s cubic-bezier(0.2,0,0,1)",
              cursor: "pointer",
              overflow: "hidden",
              display: "flex", flexDirection: "column", gap: "12px",
            }}
          >
            <GhostCardContent item={items[nextIdx]} />
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {/* Prev arrow */}
          <button
            onClick={prev}
            onMouseEnter={() => setHoveredArrow("prev")}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Previous"
            style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: hoveredArrow === "prev" ? BRAND : "transparent",
              border: `1.5px solid ${hoveredArrow === "prev" ? BRAND : `${BRAND}35`}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", flexShrink: 0,
              transition: "background 0.18s ease, border-color 0.18s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke={hoveredArrow === "prev" ? "white" : BRAND}
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: "stroke 0.18s ease" }}
              />
            </svg>
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (i !== active) goTo(i, i > active ? "right" : "left"); }}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px", borderRadius: "100px",
                  background: i === active ? BRAND : `${BRAND}30`,
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.22s cubic-bezier(0.2,0,0,1)",
                  boxShadow: i === active ? `0 0 12px ${BRAND}70` : "none",
                }}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            onMouseEnter={() => setHoveredArrow("next")}
            onMouseLeave={() => setHoveredArrow(null)}
            aria-label="Next"
            style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: hoveredArrow === "next" ? BRAND : "transparent",
              border: `1.5px solid ${hoveredArrow === "next" ? BRAND : `${BRAND}35`}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", flexShrink: 0,
              transition: "background 0.18s ease, border-color 0.18s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke={hoveredArrow === "next" ? "white" : BRAND}
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: "stroke 0.18s ease" }}
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes tCardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const GhostCardContent = ({ item }: { item: typeof testimonials.items[0] }) => (
  <>
    <div style={{ display: "flex", gap: "3px" }}>
      {[1,2,3,4,5].map(s => <span key={s} style={{ fontSize: "13px", color: `${BRAND}60` }}>★</span>)}
    </div>
    <Text variant="body-default-s" onBackground="neutral-weak"
      style={{
        lineHeight: 1.6, fontStyle: "italic",
        display: "-webkit-box", WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical", overflow: "hidden",
      } as React.CSSProperties}
    >
      &#8220;{item.content}&#8221;
    </Text>
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "4px" }}>
      <div style={{
        width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
        background: `${BRAND}18`, display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Text variant="body-strong-s" style={{ color: BRAND, lineHeight: 1 }}>{item.name.charAt(0)}</Text>
      </div>
      <Text variant="body-strong-s" onBackground="neutral-medium">{item.name}</Text>
    </div>
  </>
);
