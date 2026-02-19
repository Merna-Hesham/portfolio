"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Button,
    Icon,
} from "@once-ui-system/core";
import { person, social } from "@/resources";

export const Contact = () => {
    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="contact"
            marginBottom="80"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    Contact Info
                </Heading>
            </RevealFx>

            <RevealFx translateY="8" delay={0.2}>
                <Column horizontal="center" gap="16" align="center">
                    <Column maxWidth="s" horizontal="center">
                        <Text variant="body-default-l" onBackground="neutral-weak" align="center">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </Text>
                    </Column>

                    <Button
                        href={`mailto:${person.email}`}
                        variant="primary"
                        size="l"
                        arrowIcon
                    >
                        Email Me
                    </Button>

                    <Row gap="16" marginTop="16" wrap horizontal="center">
                        {social.map((item) => (
                            item.link && (
                                <Button
                                    key={item.name}
                                    href={item.link}
                                    variant="tertiary"
                                    size="m"
                                    prefixIcon={item.icon}
                                >
                                    {item.name}
                                </Button>
                            )
                        ))}
                    </Row>
                </Column>
            </RevealFx>
        </Column>
    );
};
