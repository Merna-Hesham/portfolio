import { About, Blog, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Merna",
  lastName: "Hesham",
  name: "Merna Hesham",
  role: "Mobile App Developer",
  avatar: "/images/merna_avatar.jpg", // Replace with your actual avatar image
  email: "mernahesham2003@gmail.com",
  location: "Africa/Cairo",
  languages: ["Arabic", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/", // Update with your GitHub URL
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/", // Update with your LinkedIn URL
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Linktree",
    icon: "link", // ensuring generic link icon is used if linktree not available
    link: "https://linktr.ee/mernahesham",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Merna Hesham</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Goia</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/work/goia",
  },
  subline: (
    <>
      Flutter & Android Native Mobile App Developer
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Set to true if you have a cal.com link
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        AI-driven fresh graduate specializing in mobile development, UI/UX, and AI systems with computer vision integration.
        Co-founder and COO of Goia, an AI-powered virtual tour guide app selected for Egypt’s GenZ Program and Enpact incubation program in Berlin.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Goia",
        timeframe: "Feb 2024 – Present",
        role: "Co-founder & Operations Manager",
        achievements: [
          <>
            Led project from ideation to product launch of an AI-powered virtual tour guide app.
          </>,
          <>
            Contributed to mobile development and AI integration, overseeing content and UX quality.
          </>,
          <>
            Selected for Egypt’s GenZ Program (EGP 1.5M funding) and Enpact incubation program in Berlin.
          </>,
        ],
        images: [],
      },
      {
        company: "DEPI",
        timeframe: "Nov 2025 – Present",
        role: "Intern - Cross Platform Mobile App Development",
        achievements: [
          <>
            Developing cross-platform mobile applications using modern frameworks.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Kafr El-Sheikh University",
        description: <>Bachelor’s in Artificial Intelligence<br />GPA: 3.81 / 4.0 (Excellent)<br />Sep 2021 – Jul 2025</>,
      },
      {
        name: "Sprints x Microsoft Summer Camp",
        description: <>Mobile Development (2025)</>,
      },
      {
        name: "ITI Summer Training",
        description: <>Android Mobile Development (2024)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Mobile Development",
        description: (
          <>Kotlin, Java, Jetpack Compose, Flutter, Dart</>
        ),
        tags: [
          {
            name: "Kotlin",
            icon: "kotlin", // ensuring valid icon or fallback
          },
          {
            name: "Flutter",
            icon: "flutter",
          },
        ],
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: (
          <>Machine Learning, Deep Learning, NLP, Computer Vision</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Cloud",
        description: (
          <>REST APIs, Firebase, Google Cloud</>
        ),
        tags: [
          {
            name: "Firebase",
            icon: "firebase",
          },
        ],
        images: [],
      },
      {
        title: "UI/UX & Tools",
        description: (
          <>Figma, Wireframing, Prototyping, Android Studio, VS Code</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };

