"use client";

import { useEffect, useRef, useState } from "react";
import { Column, Heading, Row, Text, Icon } from "@once-ui-system/core";
import { testimonials } from "@/resources";

export const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered,   setHovered]   = useState<number | null>(null);
  const [featured,  setFeatured]  = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  if (!testimonials.display) return null;

  const items = testimonials.items;
  const featuredItem = items[featured];
  const sideItems    = items.filter((_, i) => i !== featured);

  return (
    <Column ref={sectionRef} fillWidth gap="48" paddingY="80" id="testimonials" style={{ position:"relative" }}>

      {/* Ambient glows — same as Experience */}
      <div style={{ position:"absolute", top:"10%", left:"-100px", width:"420px", height:"420px", background:"radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 60%)", pointerEvents:"none", animation: isVisible ? "pulse 5s ease-in-out infinite" : "none", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:"10%", right:"-80px", width:"350px", height:"350px", background:"radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 65%)", pointerEvents:"none", animation: isVisible ? "pulse 6s ease-in-out 1.5s infinite" : "none", zIndex:0 }} />

      {/* ── Section title ── */}
      <Column gap="12" horizontal="center" style={{ textAlign:"center", opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(-30px)", transition:"all 0.8s cubic-bezier(0.16, 1, 0.3, 1)", zIndex:1 }}>
        <Text variant="label-strong-s" onBackground="brand-strong" style={{ letterSpacing:"4px", textTransform:"uppercase" }}>What Others Say</Text>
        <Heading as="h2" variant="display-strong-l">Testimonials</Heading>
      </Column>

      {/* ── Layout: featured left + side stack right ── */}
      <Row gap="64" wrap style={{ zIndex:1 }}>

        {/* ── Featured card (left, larger) ── */}
        <div style={{
          flex:"2 1 400px", minWidth:"300px",
          position:"relative", borderRadius:"24px",
          background:"var(--brand-alpha-weak)",
          border:"1px solid var(--brand-alpha-medium)",
          boxShadow:"0 24px 70px var(--brand-alpha-medium)",
          overflow:"hidden", cursor:"default",
          display:"flex", flexDirection:"column", gap:"22px",
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? "popIn 0.5s ease 0.15s both" : "none",
        }}>
          {/* Watermark */}
          <div style={{ position:"absolute", top:"-10px", right:"16px", fontSize:"130px", fontWeight:900, lineHeight:1, color:"var(--brand-alpha-medium)", pointerEvents:"none", userSelect:"none", fontFamily:"var(--font-heading)" }}>&#8220;</div>
          {/* Corner glow */}
          <div style={{ position:"absolute", top:0, left:0, width:"200px", height:"200px", background:"radial-gradient(circle at top left, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
          {/* Left accent bar — glows on featured */}
          <div style={{ position:"absolute", left:0, top:"20px", bottom:"20px", width:"4px", borderRadius:"0 4px 4px 0", background:"#FF073D", boxShadow:"0 0 10px var(--brand-alpha-strong)" }} />

          <div style={{ padding:"28px 28px 28px 36px", display:"flex", flexDirection:"column", gap:"22px" }}>
            {/* Stars */}
            <Row gap="4">
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ fontSize:"17px", color:"var(--brand-strong)" }}>★</span>
              ))}
            </Row>

            {/* Quote */}
            <Text variant="body-default-l" onBackground="neutral-medium" style={{ lineHeight:1.85, fontStyle:"italic", flex:1, position:"relative", zIndex:1 }}>
              &#8220;{featuredItem.content}&#8221;
            </Text>

            {/* Divider */}
            <div style={{ height:"1px", background:"var(--brand-alpha-medium)" }} />

            {/* Person */}
            <Row gap="14" vertical="center">
              <div style={{ width:"52px", height:"52px", minWidth:"52px", borderRadius:"50%", background:"var(--brand-strong)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 6px 22px var(--brand-alpha-strong)" }}>
                <Text variant="heading-strong-m" onBackground="page">{featuredItem.name.charAt(0)}</Text>
              </div>
              <Column gap="3">
                <Text variant="body-strong-m">{featuredItem.name}</Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">{featuredItem.role}</Text>
                <div style={{ display:"inline-flex", padding:"3px 10px", borderRadius:"8px", background:"var(--brand-alpha-weak)", border:"1px solid var(--brand-alpha-medium)", width:"fit-content" }}>
                  <Text variant="label-strong-xs" onBackground="brand-strong">{featuredItem.company}</Text>
                </div>
              </Column>
            </Row>

            {/* Tab dots */}
            <Row gap="8">
              {items.map((_, i) => (
                <button key={i} onClick={() => setFeatured(i)} style={{ width: i === featured ? "24px" : "8px", height:"8px", borderRadius:"10px", background: i === featured ? "var(--brand-strong)" : "var(--brand-alpha-medium)", border:"none", cursor:"pointer", transition:"all .35s cubic-bezier(.16,1,.3,1)", boxShadow: i === featured ? "0 0 8px var(--brand-alpha-strong)" : "none", padding:0 }} />
              ))}
            </Row>
          </div>
        </div>

        {/* ── Side cards stack (right) ── */}
        <Column gap="20" style={{ flex:"1 1 260px", minWidth:"220px" }}>
          {sideItems.map((item, si) => {
            const origIdx = items.findIndex(t => t.name === item.name);
            return (
              <div
                key={si}
                onMouseEnter={() => setHovered(origIdx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setFeatured(origIdx)}
                style={{
                  flex:1,
                  position:"relative", borderRadius:"20px",
                  background: hovered === origIdx ? "var(--brand-alpha-weak)" : "var(--surface)",
                  border:`1px solid ${hovered === origIdx ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)"}`,
                  boxShadow: hovered === origIdx ? "0 24px 70px var(--brand-alpha-medium)" : "0 4px 24px var(--neutral-alpha-weak)",
                  transform: hovered === origIdx ? "translateY(-6px)" : "translateY(0)",
                  transition:"all .4s cubic-bezier(.16,1,.3,1)",
                  cursor:"pointer", overflow:"hidden",
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `popIn .5s ease ${.25+si*.12}s both` : "none",
                }}
              >
                {/* Watermark number */}
                <div style={{ position:"absolute", top:"-10px", right:"12px", fontSize:"90px", fontWeight:900, lineHeight:1, color: hovered === origIdx ? "var(--brand-alpha-medium)" : "var(--brand-alpha-weak)", pointerEvents:"none", userSelect:"none", fontFamily:"var(--font-heading)", transition:"color .4s ease" }}>
                  {String(origIdx + 1).padStart(2, "0")}
                </div>
                {/* Corner glow */}
                <div style={{ position:"absolute", top:0, left:0, width:"120px", height:"120px", background:"radial-gradient(circle at top left, var(--brand-alpha-weak) 0%, transparent 70%)", pointerEvents:"none" }} />
                {/* Left accent bar */}
                <div style={{ position:"absolute", left:0, top:"16px", bottom:"16px", width:"4px", borderRadius:"0 4px 4px 0", background: hovered === origIdx ? "#FF073D" : "var(--brand-alpha-medium)", transition:"all .4s ease" }} />

                <div style={{ padding:"22px 22px 22px 30px", display:"flex", flexDirection:"column", gap:"14px" }}>
                  {/* Stars (small) */}
                  <Row gap="3">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} style={{ fontSize:"13px", color:"var(--brand-strong)", transition:"color .3s ease" }}>★</span>
                    ))}
                  </Row>

                  {/* Quote snippet */}
                  <Text variant="body-default-s" onBackground="neutral-medium" style={{ fontStyle:"italic", lineHeight:1.7, display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical" as any, overflow:"hidden", position:"relative", zIndex:1 }}>
                    &#8220;{item.content}&#8221;
                  </Text>

                  {/* Divider */}
                  <div style={{ height:"1px", background: hovered === origIdx ? "var(--brand-alpha-medium)" : "var(--neutral-alpha-weak)", transition:"all .4s ease" }} />

                  {/* Person */}
                  <Row gap="10" vertical="center">
                    <div style={{ width:"38px", height:"38px", minWidth:"38px", borderRadius:"50%", background: hovered === origIdx ? "var(--brand-strong)" : "var(--brand-alpha-weak)", border:`1.5px solid ${hovered === origIdx ? "transparent" : "var(--brand-alpha-medium)"}`, display:"flex", alignItems:"center", justifyContent:"center", boxShadow: hovered === origIdx ? "0 4px 14px var(--brand-alpha-strong)" : "none", transition:"all .35s ease" }}>
                      <Text variant="body-strong-s" onBackground={hovered === origIdx ? "page" : "brand-strong"}>{item.name.charAt(0)}</Text>
                    </div>
                    <Column gap="1" style={{ flex:1, minWidth:0 }}>
                      <Text variant="body-strong-s">{item.name}</Text>
                      <Text variant="body-default-xs" onBackground="neutral-weak">{item.company}</Text>
                    </Column>
                    <div style={{ opacity: hovered === origIdx ? 1 : 0, transition:"opacity .3s ease" }}>
                      <Icon name="arrowRight" size="s" onBackground="brand-strong" />
                    </div>
                  </Row>
                </div>
              </div>
            );
          })}

        </Column>
      </Row>

      <style jsx global>{`
        @keyframes popIn { from{opacity:0;transform:scale(.9) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.5;transform:scale(1.1)} }
      `}</style>
    </Column>
  );
};
