import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import {
  Hero,
  About,
  EducationAndAchievements,
  Skills,
  Projects,
  Experience,
  Services,
  Testimonials,
  Contact
} from "@/components";

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
    <Column id="top" maxWidth="m" gap="xl" paddingY="12" horizontal="center">
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

      <Hero />
      <About />
      <EducationAndAchievements />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />

    </Column>
  );
}
