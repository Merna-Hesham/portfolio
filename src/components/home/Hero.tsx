"use client";

import {
    Button,
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Badge,
    Avatar,
    Flex,
    Icon,
} from "@once-ui-system/core";
import { home, person, social } from "@/resources";
import { IconName } from "@/resources/icons";

export const Hero = () => {
    return (
        <Row
            fillWidth
            paddingY="80"
            gap="48"
            vertical="center"
            wrap
            maxWidth="l"
        >
            <Column fillWidth flex={1} gap="24" vertical="center" horizontal="start">
                <RevealFx translateY="4">
                    <Text variant="label-default-s" onBackground="brand-medium">
                        HELLO, I'M
                    </Text>
                </RevealFx>

                <RevealFx translateY="8" delay={0.2}>
                    <Heading wrap="balance" variant="display-strong-l">
                        {home.headline}
                    </Heading>
                </RevealFx>

                <RevealFx translateY="12" delay={0.4}>
                    <Text
                        wrap="balance"
                        onBackground="brand-medium"
                        variant="heading-default-xl"
                        style={{ fontWeight: 'bold' }}
                    >
                        {home.subline}
                    </Text>
                </RevealFx>

                <RevealFx translateY="16" delay={0.6}>
                    <Column maxWidth="s">
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="body-default-l"
                        >
                            {home.about.description}
                        </Text>
                    </Column>
                </RevealFx>

                <RevealFx translateY="20" delay={0.8}>
                    <Row gap="16" horizontal="start" wrap>
                        {home.primaryCta?.display && (
                            <Button
                                href={home.primaryCta.href}
                                variant="primary"
                                size="l"
                            >
                                {home.primaryCta.label}
                            </Button>
                        )}
                        {home.secondaryCta?.display && (
                            <Button
                                href={home.secondaryCta.href}
                                variant="secondary"
                                size="l"
                            >
                                {home.secondaryCta.label}
                            </Button>
                        )}
                    </Row>
                </RevealFx>

                <RevealFx translateY="24" delay={1.0}>
                    <Row gap="16" horizontal="start" wrap>
                        {social.map((item) => (
                            item.link && (
                                <Button
                                    key={item.name}
                                    href={item.link}
                                    variant="tertiary"
                                    size="s"
                                    prefixIcon={item.icon as IconName}
                                    style={{ padding: '12px' }}
                                />
                            )
                        ))}
                    </Row>
                </RevealFx>
            </Column>

            <Column fillWidth flex={1} horizontal="center" vertical="center">
                <RevealFx translateY="12" delay={0.4} fillWidth>
                    <Flex
                        position="relative"
                        horizontal="center"
                        vertical="center"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            aspectRatio: '1',
                        }}
                    >
                        {/* Background Aura */}
                        <Flex
                            position="absolute"
                            style={{
                                width: '120%',
                                height: '120%',
                                borderRadius: '100%',
                                background: 'radial-gradient(circle, var(--brand-alpha-medium) 0%, transparent 70%)',
                                filter: 'blur(40px)',
                                zIndex: 0
                            }}
                        />

                        <Flex
                            radius="full"
                            border="brand-alpha-strong"
                            borderWidth={4}
                            padding="8"
                            style={{
                                zIndex: 1,
                                boxShadow: '0 0 30px var(--brand-alpha-medium)'
                            }}
                        >
                            <Avatar
                                src={person.avatar}
                                size="xl"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '100%',
                                }}
                            />
                        </Flex>
                    </Flex>
                </RevealFx>
            </Column>
        </Row>
    );
};
