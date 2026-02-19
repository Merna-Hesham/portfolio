"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Avatar,
    Flex
} from "@once-ui-system/core";
import { home } from "@/resources";

export const Testimonials = () => {
    if (!home.testimonials?.display) return null;

    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="testimonials"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    {home.testimonials.title}
                </Heading>
            </RevealFx>

            <Row gap="16" wrap fillWidth horizontal="center" maxWidth="m">
                {home.testimonials.items.map((item, index) => (
                    <RevealFx key={`${item.name}-${index}`} translateY="8" delay={index * 0.1}>
                        <Column
                            fillWidth
                            padding="24"
                            border="neutral-alpha-weak"
                            radius="l"
                            background="surface"
                            gap="16"
                            maxWidth="s"
                        >
                            <Text variant="body-default-m" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
                                &ldquo;{item.text}&rdquo;
                            </Text>

                            <Row gap="12" vertical="center">
                                {item.avatar && (
                                    <Avatar src={item.avatar} size="m" />
                                )}
                                {!item.avatar && (
                                    <Flex
                                        style={{ width: "32px", height: "32px" }}
                                        radius="full"
                                        background="neutral-weak"
                                        horizontal="center"
                                        vertical="center"
                                    >
                                        <Text variant="label-default-s">{item.name.charAt(0)}</Text>
                                    </Flex>
                                )}
                                <Column>
                                    <Text variant="label-default-s">
                                        {item.name}
                                    </Text>
                                    <Text variant="body-default-xs" onBackground="neutral-medium">
                                        {item.role}
                                    </Text>
                                </Column>
                            </Row>
                        </Column>
                    </RevealFx>
                ))}
            </Row>
        </Column>
    );
};
