"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Icon,
    Flex,
} from "@once-ui-system/core";
import { home } from "@/resources";
import { IconName } from "@/resources/icons";

export const Services = () => {
    if (!home.services?.display) return null;

    return (
        <Column
            fillWidth
            paddingY="80"
            gap="48"
            horizontal="center"
            id="services"
        >
            <Column horizontal="center" gap="16">
                <RevealFx translateY="4">
                    <Text variant="label-default-s" onBackground="brand-medium">
                        WHAT I OFFER
                    </Text>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Heading as="h2" variant="display-strong-xs">
                        {home.services.title}
                    </Heading>
                </RevealFx>
            </Column>

            <Row
                gap="24"
                wrap
                fillWidth
                horizontal="center"
                maxWidth="l"
            >
                {home.services.items.map((service, index) => (
                    <RevealFx key={`${service.title}-${index}`} translateY="12" delay={index * 0.1} flex={1}>
                        <Column
                            fillWidth
                            padding="40"
                            border="neutral-alpha-weak"
                            radius="xl"
                            background="surface"
                            gap="24"
                            position="relative"
                            style={{ overflow: 'hidden', minHeight: '100%' }}
                        >
                            {/* Background Index Number */}
                            <Text
                                position="absolute"
                                variant="display-strong-xl"
                                style={{
                                    top: '0',
                                    right: '-10px',
                                    fontSize: '150px',
                                    opacity: '0.03',
                                    pointerEvents: 'none',
                                    lineHeight: '1'
                                }}
                            >
                                0{index + 1}
                            </Text>

                            <Flex
                                background="brand-alpha-weak"
                                radius="m"
                                padding="12"
                                horizontal="center"
                                vertical="center"
                                style={{ width: 'fit-content' }}
                            >
                                {service.icon && (
                                    <Icon name={service.icon as IconName} size="l" onBackground="brand-medium" />
                                )}
                            </Flex>

                            <Column gap="12">
                                <Heading as="h3" variant="heading-strong-m">
                                    {service.title}
                                </Heading>
                                <Text variant="body-default-m" onBackground="neutral-weak">
                                    {service.description}
                                </Text>
                            </Column>
                        </Column>
                    </RevealFx>
                ))}
            </Row>
        </Column>
    );
};
