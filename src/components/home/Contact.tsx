"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Button,
    Icon,
    Flex,
    Input,
} from "@once-ui-system/core";
import { person, social } from "@/resources";
import { IconName } from "@/resources/icons";

export const Contact = () => {
    return (
        <Column
            fillWidth
            paddingY="80"
            gap="48"
            horizontal="center"
            id="contact"
            marginBottom="80"
        >
            <Row gap="48" vertical="start" wrap maxWidth="l">
                {/* Left Side: Get in Touch */}
                <Column fillWidth flex={1} gap="32">
                    <RevealFx translateY="4">
                        <Text variant="label-default-s" onBackground="brand-medium">
                            GET IN TOUCH
                        </Text>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Heading as="h2" variant="display-strong-s">
                            Let's Build Something Great Together
                        </Heading>
                    </RevealFx>

                    <Column gap="24">
                        <RevealFx translateY="12" delay={0.4}>
                            <Row gap="16" vertical="center">
                                <Flex
                                    background="brand-alpha-weak"
                                    radius="m"
                                    padding="12"
                                >
                                    <Icon name="email" size="m" onBackground="brand-medium" />
                                </Flex>
                                <Column gap="4">
                                    <Text variant="label-default-s" onBackground="neutral-medium">EMAIL</Text>
                                    <Text variant="body-default-m">{person.email}</Text>
                                </Column>
                            </Row>
                        </RevealFx>

                        <RevealFx translateY="16" delay={0.6}>
                            <Row gap="16" vertical="center">
                                <Flex
                                    background="brand-alpha-weak"
                                    radius="m"
                                    padding="12"
                                >
                                    <Icon name="location" size="m" onBackground="brand-medium" />
                                </Flex>
                                <Column gap="4">
                                    <Text variant="label-default-s" onBackground="neutral-medium">LOCATION</Text>
                                    <Text variant="body-default-m">Cairo, Egypt (Remote/On-site)</Text>
                                </Column>
                            </Row>
                        </RevealFx>
                    </Column>

                    <RevealFx translateY="20" delay={0.8}>
                        <Row gap="16" wrap>
                            {social.map((item) => (
                                item.link && (
                                    <Button
                                        key={item.name}
                                        href={item.link}
                                        variant="secondary"
                                        size="s"
                                        prefixIcon={item.icon as IconName}
                                        style={{ padding: '12px' }}
                                    />
                                )
                            ))}
                        </Row>
                    </RevealFx>
                </Column>

                {/* Right Side: Contact Form */}
                <Column fillWidth style={{ flex: 1.2 }} gap="24">
                    <RevealFx translateY="12" delay={0.4} fillWidth>
                        <Column
                            fillWidth
                            padding="40"
                            background="surface"
                            border="neutral-alpha-weak"
                            radius="xl"
                            gap="24"
                        >
                            <Row gap="16" wrap>
                                <Column fillWidth flex={1} gap="8">
                                    <Text variant="label-default-s">Full Name</Text>
                                    <Input id="name" placeholder="Your Name" />
                                </Column>
                                <Column fillWidth flex={1} gap="8">
                                    <Text variant="label-default-s">Email Address</Text>
                                    <Input id="email" placeholder="email@example.com" />
                                </Column>
                            </Row>
                            <Column gap="8">
                                <Text variant="label-default-s">Subject</Text>
                                <Input id="subject" placeholder="What is this about?" />
                            </Column>
                            <Column gap="8">
                                <Text variant="label-default-s">Message</Text>
                                <Input id="message" placeholder="Your message here..." />
                            </Column>
                            <Button variant="primary" size="l" fillWidth style={{ marginTop: '8px' }}>
                                Send Message
                            </Button>
                        </Column>
                    </RevealFx>
                </Column>
            </Row>
        </Column>
    );
};
