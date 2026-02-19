"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Badge,
} from "@once-ui-system/core";
import { about } from "@/resources";

export const Experience = () => {
    if (!about.work.display) return null;

    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="experience"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    {about.work.title}
                </Heading>
            </RevealFx>

            <Column fillWidth maxWidth="m" gap="l">
                {about.work.experiences.map((job, index) => (
                    <RevealFx key={`${job.company}-${index}`} translateY="8" delay={index * 0.1}>
                        <Column
                            fillWidth
                            padding="24"
                            border="neutral-alpha-weak"
                            radius="l"
                            background="surface"
                            gap="12"
                        >
                            <Row fillWidth horizontal="between" vertical="center" wrap gap="8">
                                <Heading as="h3" variant="heading-strong-m">
                                    {job.role}
                                </Heading>
                                <Badge>
                                    {job.timeframe}
                                </Badge>
                            </Row>

                            <Text variant="label-default-m" onBackground="neutral-medium">
                                {job.company}
                            </Text>

                            <Column gap="8" paddingLeft="16">
                                {job.achievements.map((item, i) => (
                                    <Row key={i} gap="8" vertical="start">
                                        <Text variant="body-default-s" onBackground="brand-medium">•</Text>
                                        <Text variant="body-default-s" onBackground="neutral-weak">
                                            {item}
                                        </Text>
                                    </Row>
                                ))}
                            </Column>
                        </Column>
                    </RevealFx>
                ))}
            </Column>
        </Column>
    );
};
