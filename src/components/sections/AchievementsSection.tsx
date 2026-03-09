"use client";

import {
  Column,
  Heading,
  Row,
  Text,
  Card,
  Icon,
} from "@once-ui-system/core";

const achievements = [
  {
    icon: "rocket",
    title: "GenZ Program Egypt",
    description: "Selected for Egypt's GenZ Program with EGP 1.5M funding for Goia startup",
    year: "2024",
  },
  {
    icon: "globe",
    title: "Enpact Berlin Incubation",
    description: "Accepted into Enpact incubation program in Berlin, Germany",
    year: "2024",
  },
  {
    icon: "book",
    title: "Excellent GPA",
    description: "Graduated with 3.81/4.0 GPA in Artificial Intelligence",
    year: "2025",
  },
  {
    icon: "code",
    title: "Co-founder of Goia",
    description: "Built an AI-powered virtual tour guide app from ideation to launch",
    year: "2024",
  },
];

export const AchievementsSection = () => {
  return (
    <Column fillWidth gap="xl" paddingY="80" id="achievements">
      <Column horizontal="center" gap="s">
        <Text variant="label-strong-m" onBackground="brand-medium">
          MILESTONES
        </Text>
        <Heading as="h2" variant="display-strong-l">
          Achievements
        </Heading>
        <div style={{ width:"48px", height:"3px", borderRadius:"2px", background:"#FF073D", margin:"0 auto" }} />
      </Column>

      <Row fillWidth wrap gap="l" horizontal="center">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            padding="xl"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 280px", maxWidth: "320px" }}
          >
            <Column gap="m">
              <Row horizontal="between" vertical="center">
                <Row padding="m" radius="full" background="brand-alpha-weak">
                  <Icon name={achievement.icon} size="l" onBackground="brand-strong" />
                </Row>
                <Text variant="label-strong-s" onBackground="brand-medium">
                  {achievement.year}
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-m">
                {achievement.title}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {achievement.description}
              </Text>
            </Column>
          </Card>
        ))}
      </Row>
    </Column>
  );
};
