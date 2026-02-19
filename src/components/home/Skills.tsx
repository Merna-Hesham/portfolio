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
import { about } from "@/resources";
import { IconName } from "@/resources/icons";

export const Skills = () => {
    if (!about.technical.display) return null;

    return (
        <Column
            fillWidth
            paddingY="80"
            gap="48"
            horizontal="center"
            id="skills"
        >
            <Column horizontal="center" gap="16">
                <RevealFx translateY="4">
                    <Text variant="label-default-s" onBackground="brand-medium">
                        TECHNICAL EXPERTISE
                    </Text>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Heading as="h2" variant="display-strong-xs">
                        {about.technical.title}
                    </Heading>
                </RevealFx>
            </Column>

            <Row gap="24" wrap fillWidth maxWidth="l">
                {about.technical.skills.map((skillGroup, index) => (
                    <RevealFx key={skillGroup.title} translateY="12" delay={index * 0.1} flex={1}>
                        <Column
                            fillWidth
                            padding="32"
                            border="neutral-alpha-weak"
                            background="surface"
                            radius="l"
                            gap="24"
                            style={{ minHeight: '100%' }}
                        >
                            <Heading as="h3" variant="heading-strong-s" onBackground="brand-medium">
                                {skillGroup.title}
                            </Heading>
                            <Text variant="body-default-m" onBackground="neutral-medium">
                                {skillGroup.description}
                            </Text>
                            <Row gap="8" wrap>
                                {skillGroup.tags.map((tag) => (
                                    <Flex
                                        key={tag.name}
                                        paddingX="12"
                                        paddingY="8"
                                        background="neutral-alpha-weak"
                                        radius="m"
                                        vertical="center"
                                        gap="8"
                                    >
                                        <Icon name={tag.icon as IconName} size="s" />
                                        <Text variant="label-default-s">{tag.name}</Text>
                                    </Flex>
                                ))}
                            </Row>
                        </Column>
                    </RevealFx>
                ))}
            </Row>
        </Column>
    );
};
