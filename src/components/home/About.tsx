"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Flex,
    Icon,
} from "@once-ui-system/core";
import { home } from "@/resources";

export const AboutSection = () => {
    if (!home.about.display) return null;

    const stats = [
        { label: "Year Exp.", value: "1+" },
        { label: "Projects", value: "8+" },
        { label: "Awards", value: "2" },
        { label: "GPA", value: "3.81" },
    ];

    return (
        <Column
            fillWidth
            paddingY="80"
            gap="48"
            horizontal="center"
            id="about"
        >
            <Row gap="48" vertical="start" wrap maxWidth="l">
                {/* Left Side: Illustration and Stats */}
                <Column fillWidth flex={1} gap="32" horizontal="center">
                    <RevealFx translateY="8">
                        <Flex
                            background="neutral-alpha-weak"
                            radius="xl"
                            padding="48"
                            horizontal="center"
                            vertical="center"
                            style={{ width: '100%', maxWidth: '300px', aspectRatio: '1' }}
                        >
                            <Icon name="code" size="xl" onBackground="brand-medium" style={{ fontSize: '120px' }} />
                        </Flex>
                    </RevealFx>

                    <Row gap="16" wrap horizontal="center" fillWidth>
                        {stats.map((stat, index) => (
                            <RevealFx key={stat.label} translateY="8" delay={index * 0.1}>
                                <Column
                                    padding="20"
                                    background="neutral-alpha-weak"
                                    radius="m"
                                    horizontal="center"
                                    gap="4"
                                    style={{ minWidth: '120px' }}
                                >
                                    <Heading variant="heading-strong-l" onBackground="brand-medium">
                                        {stat.value}
                                    </Heading>
                                    <Text variant="label-default-s" onBackground="neutral-weak">
                                        {stat.label}
                                    </Text>
                                </Column>
                            </RevealFx>
                        ))}
                    </Row>
                </Column>

                {/* Right Side: Description */}
                <Column fillWidth flex={1.5} gap="24">
                    <RevealFx translateY="4">
                        <Text variant="label-default-s" onBackground="brand-medium">
                            ABOUT ME
                        </Text>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Heading as="h2" variant="display-strong-s">
                            {home.about.title}
                        </Heading>
                    </RevealFx>
                    <RevealFx translateY="12" delay={0.4}>
                        <Text
                            onBackground="neutral-weak"
                            variant="body-default-xl"
                            style={{ lineHeight: '1.6' }}
                        >
                            {home.about.description}
                        </Text>
                    </RevealFx>

                    <RevealFx translateY="16" delay={0.6}>
                        <Row gap="16" vertical="center">
                            <Column gap="8">
                                <Text variant="body-default-m" onBackground="neutral-medium">
                                    I am a fresh graduate from the Faculty of Artificial Intelligence at Kafr El-Sheikh University.
                                    My journey started with a deep fascination for AI and mobile development, which led me to co-found Goia,
                                    where I combined my technical skills with business leadership.
                                    I focus on building AI-driven mobile solutions that solve real-world problems.
                                </Text>
                            </Column>
                        </Row>
                    </RevealFx>
                </Column>
            </Row>
        </Column>
    );
};
