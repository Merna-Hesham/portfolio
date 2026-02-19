"use client";

import {
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Button,
  Carousel,
  Badge,
  Row,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  images: string[];
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
}

export const ProjectCard = ({
  href,
  images = [],
  title,
  description,
  tags = [],
  link,
  github,
}: ProjectCardProps) => {
  return (
    <Column
      fillWidth
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      style={{ overflow: 'hidden' }}
    >
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={images.map((image) => ({
          slide: image,
          alt: title,
        }))}
      />
      <Column
        fillWidth
        paddingX="24"
        paddingBottom="24"
        paddingTop="16"
        gap="16"
      >
        <Column gap="8">
          <Row horizontal="between" vertical="center" fillWidth>
            <Heading as="h2" variant="heading-strong-l">
              {title}
            </Heading>
            <Badge>Project</Badge>
          </Row>
          <Row gap="8" wrap>
            {tags?.map((tag) => (
              <Badge key={tag} size="s">{tag}</Badge>
            ))}
          </Row>
        </Column>

        <Text variant="body-default-m" onBackground="neutral-weak">
          {description}
        </Text>

        <Row gap="16" wrap>
          {link && (
            <Button
              href={link}
              size="s"
              variant="primary"
              suffixIcon="arrowUpRight"
            >
              Live Demo
            </Button>
          )}
          {github && (
            <Button
              href={github}
              size="s"
              variant="secondary"
              prefixIcon="github"
            >
              GitHub
            </Button>
          )}
          {href && (
            <Button
              href={href}
              size="s"
              variant="tertiary"
            >
              Case Study
            </Button>
          )}
        </Row>
      </Column>
    </Column>
  );
};
