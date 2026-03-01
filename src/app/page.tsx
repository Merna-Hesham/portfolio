import {
  Column,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import {
  HeroSection,
  AboutMeSection,
  EducationSection,
  SkillsSection,
  ExperienceSection,
  ServicesSection,
  ProjectsSection,
  TestimonialsSection,
} from "@/components/sections";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column fillWidth horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* All sections in a single-page layout */}
      <Column fillWidth maxWidth="l" paddingX="l" gap="0">

        {/* 1. Cover / Hero */}
        <HeroSection />

        {/* 2. About Me */}
        <AboutMeSection />

        {/* 3. Education */}
        <EducationSection />

        {/* 4. Skills */}
        <SkillsSection />

        {/* 5. Work Experience */}
        <ExperienceSection />

        {/* 6. Services */}
        <ServicesSection />

        {/* 7. Projects */}
        <ProjectsSection />

        {/* 8. Testimonials */}
        <TestimonialsSection />

      </Column>
    </Column>
  );
}
