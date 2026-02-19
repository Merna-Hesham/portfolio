"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Icon,
} from "@once-ui-system/core";
import { home } from "@/resources";

export const Services = () => {
    if (!home.services?.display) return null;

    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="services"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    {home.services.title}
                </Heading>
            </RevealFx>

            <Row
                gap="l"
                wrap
                fillWidth
                horizontal="center"
                maxWidth="l"
            >
                {home.services.items.map((service, index) => (
                    <RevealFx key={`${service.title}-${index}`} translateY="8" delay={index * 0.1}>
                        <Column
                            fillWidth
                            padding="24"
                            border="neutral-alpha-weak"
                            radius="l"
                            background="surface"
                            gap="16"
                            height="full"
                            align="center"
                            minWidth={240}
                            maxWidth={320}
                        >
                            {service.icon && (
                                <Icon name={service.icon} size="xl" onBackground="brand-medium" />
                            )}
                            <Heading as="h3" variant="heading-strong-m" align="center">
                                {service.title}
                            </Heading>

                            <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                                {service.description}
                            </Text>
                        </Column>
                    </RevealFx>
                ))}
            </Row>
        </Column>
    );
};
