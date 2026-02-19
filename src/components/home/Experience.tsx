"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Badge,
    Flex,
} from "@once-ui-system/core";
import { about } from "@/resources";

export const Experience = () => {
    if (!about.work.display) return null;

    return (
        <Column
            fillWidth
            paddingY="80"
            gap="48"
            horizontal="center"
            id="experience"
        >
            <Column horizontal="center" gap="16">
                <RevealFx translateY="4">
                    <Text variant="label-default-s" onBackground="brand-medium">
                        CAREER PATH
                    </Text>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Heading as="h2" variant="display-strong-xs">
                        {about.work.title}
                    </Heading>
                </RevealFx>
            </Column>

            <Column fillWidth maxWidth="l" position="relative">
                {/* Timeline vertical line */}
                <Flex
                    position="absolute"
                    style={{
                        left: '12px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'var(--neutral-alpha-medium)',
                        zIndex: 0
                    }}
                />

                <Column fillWidth gap="48">
                    {about.work.experiences.map((job, index) => (
                        <Row key={`${job.company}-${index}`} fillWidth gap="32" vertical="start">
                            {/* Timeline Dot */}
                            <Flex
                                position="relative"
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    marginTop: '8px',
                                    zIndex: 1
                                }}
                                horizontal="center"
                                vertical="center"
                            >
                                <Flex
                                    radius="full"
                                    background="brand-medium"
                                    style={{ width: '12px', height: '12px', boxShadow: '0 0 10px var(--brand-alpha-medium)' }}
                                />
                            </Flex>

                            {/* Experience Content Card */}
                            <RevealFx translateY="12" delay={index * 0.1} fillWidth>
                                <Column
                                    fillWidth
                                    padding="32"
                                    border="neutral-alpha-weak"
                                    radius="l"
                                    background="surface"
                                    gap="24"
                                >
                                    <Row fillWidth horizontal="between" vertical="center" wrap gap="16">
                                        <Column gap="4">
                                            <Heading as="h3" variant="heading-strong-l">
                                                {job.role}
                                            </Heading>
                                            <Text variant="heading-default-s" onBackground="brand-medium">
                                                {job.company}
                                            </Text>
                                        </Column>
                                        <Badge>
                                            {job.timeframe}
                                        </Badge>
                                    </Row>

                                    <Column gap="16">
                                        {job.achievements.map((item, i) => (
                                            <Row key={i} gap="12" vertical="start">
                                                <Badge>
                                                    {i === 0 ? "Goal" : i === 1 ? "Action" : "Result"}
                                                </Badge>
                                                <Text variant="body-default-m" onBackground="neutral-weak">
                                                    {item}
                                                </Text>
                                            </Row>
                                        ))}
                                    </Column>
                                </Column>
                            </RevealFx>
                        </Row>
                    ))}
                </Column>
            </Column>
        </Column>
    );
};
