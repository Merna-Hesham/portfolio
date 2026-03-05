"use client";

import {
  Column,
  Heading,
  Icon,
  Row,
  Tag,
  Text,
  Card,
  Avatar,
} from "@once-ui-system/core";
import { about, person, social } from "@/resources";

export const AboutSection = () => {
  if (!about.intro.display) return null;

  return (
    <Column fillWidth gap="l" id="about">
      <Row fillWidth wrap gap="xl" horizontal="center" vertical="start">
        {/* Profile Card */}
        <Card
          padding="l"
          radius="l"
          border="neutral-alpha-weak"
          background="surface"
          style={{ flex: "0 0 280px", maxWidth: "320px" }}
        >
          <Column gap="m" horizontal="center" align="center">
            <Avatar src={person.avatar} size="xl" />
            <Column gap="4" horizontal="center">
              <Heading as="h3" variant="heading-strong-l">
                {person.name}
              </Heading>
              <Text variant="body-default-m" onBackground="brand-medium">
                {person.role}
              </Text>
            </Column>
            <Row gap="8" vertical="center">
              <Icon name="globe" size="s" onBackground="neutral-weak" />
              <Text variant="body-default-s" onBackground="neutral-weak">
                {person.location.replace("_", " ").split("/")[1]}
              </Text>
            </Row>
            {person.languages && (
              <Row wrap gap="8">
                {person.languages.map((lang, i) => (
                  <Tag key={i} size="s">
                    {lang}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        </Card>

        {/* About Content */}
        <Column gap="m" style={{ flex: "1 1 400px", maxWidth: "600px" }}>
          <Heading as="h2" variant="display-strong-s">
            About Me
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-medium">
            {about.intro.description}
          </Text>
        </Column>
      </Row>
    </Column>
  );
};

export const ExperienceSection = () => {
  if (!about.work.display) return null;

  return (
    <Column fillWidth gap="l" id="experience">
      <Column horizontal="center">
        <Heading as="h2" variant="display-strong-s">
          {about.work.title}
        </Heading>
      </Column>
      <Row fillWidth wrap gap="l" horizontal="center">
        {about.work.experiences.map((exp, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 350px", maxWidth: "500px" }}
          >
            <Column gap="m">
              <Row fillWidth horizontal="between" vertical="start">
                <Column gap="4">
                  <Heading as="h3" variant="heading-strong-l">
                    {exp.company}
                  </Heading>
                  <Text variant="body-default-m" onBackground="brand-medium">
                    {exp.role}
                  </Text>
                </Column>
                <Tag size="s">{exp.timeframe}</Tag>
              </Row>
              <Column as="ul" gap="8" paddingLeft="m">
                {exp.achievements.map((achievement, i) => (
                  <Text
                    as="li"
                    key={i}
                    variant="body-default-s"
                    onBackground="neutral-weak"
                  >
                    {achievement}
                  </Text>
                ))}
              </Column>
            </Column>
          </Card>
        ))}
      </Row>
    </Column>
  );
};

export const EducationSection = () => {
  if (!about.studies.display) return null;

  return (
    <Column fillWidth gap="l" id="education">
      <Column horizontal="center">
        <Heading as="h2" variant="display-strong-s">
          {about.studies.title}
        </Heading>
      </Column>
      <Row fillWidth wrap gap="l" horizontal="center">
        {about.studies.institutions.map((inst, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 280px", maxWidth: "380px" }}
          >
            <Column gap="s">
              <Heading as="h3" variant="heading-strong-m">
                {inst.name}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {inst.description}
              </Text>
            </Column>
          </Card>
        ))}
      </Row>
    </Column>
  );
};

export const SkillsSection = () => {
  if (!about.technical.display) return null;

  return (
    <Column fillWidth gap="l" id="skills">
      <Column horizontal="center">
        <Heading as="h2" variant="display-strong-s">
          {about.technical.title}
        </Heading>
      </Column>
      <Row fillWidth wrap gap="l" horizontal="center">
        {about.technical.skills.map((skill, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 280px", maxWidth: "380px" }}
          >
            <Column gap="m">
              <Heading as="h3" variant="heading-strong-m">
                {skill.title}
              </Heading>
              {skill.description && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {skill.description}
                </Text>
              )}
              {skill.tags && skill.tags.length > 0 && (
                <Row wrap gap="8">
                  {skill.tags.map((tag, i) => (
                    <Tag key={i} size="m" prefixIcon={tag.icon}>
                      {tag.name}
                    </Tag>
                  ))}
                </Row>
              )}
            </Column>
          </Card>
        ))}
      </Row>
    </Column>
  );
};
