"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Avatar,
    Flex,
} from "@once-ui-system/core";
import { home, about, person } from "@/resources";

export const AboutSection = () => {
    // using 'home.about' for specific home page structure, or 'about.intro' if preferred. 
    // content.tsx has 'home.about' defined now.
    if (!home.about.display) return null;

    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="about"
        >
            <RevealFx translateY="4" fillWidth>
                <Row gap="32" vertical="center" horizontal="center" wrap mobileDirection="column">
                    {about.avatar.display && (
                        <Flex
                            border="neutral-alpha-medium"
                            radius="full"
                            borderWidth="1"
                            padding="4"
                        >
                            <Avatar
                                src={person.avatar}
                                size="xl"
                            />
                        </Flex>
                    )}

                    <Column maxWidth="m" gap="16">
                        <Heading as="h2" variant="display-strong-s">
                            {home.about.title}
                        </Heading>
                        <Text
                            onBackground="neutral-weak"
                            variant="body-default-l"
                        >
                            {home.about.description}
                        </Text>
                    </Column>
                </Row>
            </RevealFx>
        </Column>
    );
};
