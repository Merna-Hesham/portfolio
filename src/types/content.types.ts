import { IconName } from "@/resources/icons";
import { zones } from "tzdata";
import React from "react";

/**
 * IANA time zone string (e.g., 'Asia/Calcutta', 'Europe/Vienna').
 * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type IANATimeZone = Extract<keyof typeof zones, string>; // Narrow to string keys for React usage

/**
 * Represents a person featured in the portfolio.
 */
export type Person = {
  /** First name of the person */
  firstName: string;
  /** Last name of the person */
  lastName: string;
  /** The name you want to display, allows variations like nicknames */
  name: string;
  /** Role or job title */
  role: string;
  /** Path to avatar image */
  avatar: string;
  /** Email address */
  email: string;
  /** IANA time zone location */
  location: IANATimeZone;
  /** Languages spoken */
  languages?: string[];
};

/**
 * Newsletter Section
 * @description The below information will be displayed on the Home page in Newsletter block
 */
export type Newsletter = {
  /** Whether to display the newsletter section */
  display: boolean;
  /** Title of the newsletter   */
  title: React.ReactNode;
  /** Description of the newsletter */
  description: React.ReactNode;
};

/**
 * Social link configuration.
 */
export type Social = Array<{
  /** Name of the social platform */
  name: string;
  /** Icon for the social platform
   * The icons are a part of "src/resources/icons.ts" file.
   * If you need a different icon, import it there and reference it everywhere else
   */
  icon: IconName;
  /**
   * The link to the social platform
   *
   * The link is not validated by code, make sure it's correct
   */
  link: string;
  /** Whether this social link is essential and should be displayed on the about page */
  essential?: boolean;
}>;

/**
 * Base interface for page configuration with common properties.
 */
export interface BasePageConfig {
  /** Path to the page
   *
   * The path should be relative to the public directory
   */
  path: `/${string}` | string;
  /** Label for navigation or display */
  label: string;
  /** Title of the page */
  title: string;
  /** Description for SEO and metadata */
  description: string;
  /** OG Image should be put inside `public/images` folder */
  image?: `/images/${string}` | string;
}


/**
 * Service configuration.
 */
export type Service = {
  /** Title of the service */
  title: string;
  /** Description of the service */
  description: string;
  /** Icon for the service (optional) */
  icon?: string;
};

/**
 * Testimonial configuration.
 */
export type Testimonial = {
  /** Name of the person providing the testimonial */
  name: string;
  /** Role/Title of the person */
  role: string;
  /** The testimonial text */
  text: string;
  /** Avatar image of the person (optional) */
  avatar?: string;
};

/**
 * Achievement configuration.
 */
export type Achievement = {
  /** Title of the achievement/certification */
  title: string;
  /** Organization or Issuer */
  organization: string;
  /** Date of achievement */
  date: string;
  /** Description (optional) */
  description?: string;
  /** Link to credential (optional) */
  link?: string;
};

/**
 * Home page configuration.
 */
export interface Home extends BasePageConfig {
  /** The image to be displayed in metadata */
  image: `/images/${string}` | string;
  /** The headline of the home page */
  headline: React.ReactNode;
  /** Featured badge, which appears above the headline */
  featured: {
    display: boolean;
    title: React.ReactNode;
    href: string;
  };
  /** The sub text which appears below the headline */
  subline: React.ReactNode;
  /** Primary CTA button */
  primaryCta?: {
    display: boolean;
    label: string;
    href: string;
  };
  /** Secondary CTA button */
  secondaryCta?: {
    display: boolean;
    label: string;
    href: string;
  };
  /** About section on Home */
  about: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  /** Skills section configuration */
  skills: {
    display: boolean;
    title: string;
    items: Array<{
      title: string;
      icon?: string;
      level?: number; // 0-100
    }>;
  };
  /** Services section configuration */
  services: {
    display: boolean;
    title: string;
    items: Service[];
  };
  /** Testimonials section configuration */
  testimonials: {
    display: boolean;
    title: string;
    items: Testimonial[];
  };
  /** Achievements section configuration */
  achievements: {
    display: boolean;
    title: string;
    items: Achievement[];
  };
}

/**
 * About page configuration.
 * @description Configuration for the About page.
 */
export interface About extends BasePageConfig {
  /** Table of contents configuration */
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  /** Avatar section configuration */
  avatar: {
    display: boolean;
  };
  /** Calendar section configuration */
  calendar: {
    display: boolean;
    link: string;
  };
  /** Introduction section */
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  /** Work experience section */
  work: {
    display: boolean;
    title: string;
    experiences: Array<{
      company: string;
      timeframe: string;
      role: string;
      achievements: React.ReactNode[];
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
  /** Studies/education section */
  studies: {
    display: boolean;
    title: string;
    institutions: Array<{
      name: string;
      description: React.ReactNode;
    }>;
  };
  /** Technical skills section (keeping for backward compatibility if needed, or migration) */
  technical: {
    display: boolean;
    title: string;
    skills: Array<{
      title: string;
      description?: React.ReactNode;
      tags?: Array<{
        name: string;
        icon?: string;
      }>;
      images?: Array<{
        src: string;
        alt: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

/**
 * Blog page configuration.
 */
export interface Blog extends BasePageConfig { }

/**
 * Work/projects page configuration.
 */
export interface Work extends BasePageConfig { }

/**
 * Gallery page configuration.
 */
export interface Gallery extends BasePageConfig {
  images: Array<{
    src: string;
    alt: string;
    orientation: string;
  }>;
}
