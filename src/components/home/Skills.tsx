"use client";

import {
    Column,
    Heading,
    RevealFx,
    Row,
    Text,
    Flex,
    Icon,
} from "@once-ui-system/core";
import { home } from "@/resources";

export const Skills = () => {
    if (!home.skills.display) return null;

    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="skills"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    {home.skills.title}
                </Heading>
            </RevealFx>

            <Row gap="16" wrap fillWidth horizontal="center" maxWidth="m">
                {home.skills.items.map((skill, index) => (
                    <RevealFx key={`${skill.title}-${index}`} translateY="8" delay={index * 0.05}>
                        <Flex
                            padding="12"
                            border="neutral-alpha-weak"
                            background="neutral-alpha-weak"
                            radius="m"
                            vertical="center"
                            gap="8"
                            minWidth={140}
                        >
                            {skill.icon && <Icon name={skill.icon} size="m" />}
                            <Column fillWidth gap="4">
                                <Text variant="label-default-s">{skill.title}</Text>
                                {/* Simple progress bar representation */}
                                {skill.level && (
                                    <Flex
                                        fillWidth
                                        height="4"
                                        background="neutral-alpha-medium"
                                        radius="full"
                                        overflow="hidden"
                                    >
                                        <Flex
                                            width={`${skill.level}%`}
                                            background="brand-solid-strong"
                                            height="4"
                                        />
                                    </Flex>
                                )}
                            </Column>
                        </Flex>
                    </RevealFx>
                ))}
            </Row>
        </Column>
    );
};
