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
                            <Row fillWidth spaceBetween vertical="center" wrap gap="8">
                                <Heading as="h3" variant="heading-strong-m">
                                    {job.role}
                                </Heading>
                                <Badge variant="neutral" size="s">
                                    {job.timeframe}
                                </Badge>
                            </Row>

                            <Text variant="label-default-m" onBackground="neutral-medium">
                                {job.company}
                            </Text>

                            <Column gap="8" paddingLeft="16">
                                {/* Assuming achievements is an array of ReactNodes */}
                                {job.achievements.map((item, i) => (
                                    <ul key={i} style={{ margin: 0, padding: 0, listStyleType: 'disc' }}>
                                        <li>
                                            <Text variant="body-default-s" onBackground="neutral-weak">
                                                {item}
                                            </Text>
                                        </li>
                                    </ul>
                                ))}
                            </Column>
                        </Column>
                    </RevealFx>
                ))}
            </Column>
        </Column>
    );
};
