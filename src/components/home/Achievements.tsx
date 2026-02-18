"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Badge,
    Button
} from "@once-ui-system/core";
import { home } from "@/resources";

export const Achievements = () => {
    if (!home.achievements?.display) return null;

    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="achievements"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    {home.achievements.title}
                </Heading>
            </RevealFx>

            <Column fillWidth maxWidth="s" gap="s">
                {home.achievements.items.map((item, index) => (
                    <RevealFx key={`${item.title}-${index}`} translateY="8" delay={index * 0.1}>
                        <Column
                            fillWidth
                            padding="16"
                            border="neutral-alpha-weak"
                            radius="m"
                            background="surface"
                            gap="8"
                        >
                            <Row fillWidth spaceBetween vertical="center" wrap gap="8">
                                <Heading as="h3" variant="heading-strong-s">
                                    {item.title}
                                </Heading>
                                <Badge variant="neutral" size="s">
                                    {item.date}
                                </Badge>
                            </Row>
                            <Text variant="label-default-s" onBackground="neutral-medium">
                                {item.organization}
                            </Text>
                            {item.description && (
                                <Text variant="body-default-s" onBackground="neutral-weak">
                                    {item.description}
                                </Text>
                            )}
                            {item.link && (
                                <Button href={item.link} variant="tertiary" size="s" width="fit">
                                    View Verified Credential
                                </Button>
                            )}
                        </Column>
                    </RevealFx>
                ))}
            </Column>
        </Column>
    );
};
