"use client";

import {
    Button,
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Badge,
    Line,
} from "@once-ui-system/core";
import { home } from "@/resources";

export const Hero = () => {
    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            position="relative"
        >
            <Column maxWidth="m" horizontal="center" gap="m" align="center">
                {home.featured.display && (
                    <RevealFx translateY="4">
                        <Badge
                            href={home.featured.href}
                            arrow
                            background="brand-alpha-weak"
                            onBackground="brand-medium"
                        >
                            {home.featured.title}
                        </Badge>
                    </RevealFx>
                )}

                <RevealFx translateY="8" delay={0.2}>
                    <Heading wrap="balance" variant="display-strong-l" align="center">
                        {home.headline}
                    </Heading>
                </RevealFx>

                <RevealFx translateY="12" delay={0.4}>
                    <Text
                        wrap="balance"
                        onBackground="neutral-weak"
                        variant="heading-default-xl"
                        align="center"
                    >
                        {home.subline}
                    </Text>
                </RevealFx>

                <RevealFx translateY="16" delay={0.6}>
                    <Row gap="16" horizontal="center" wrap>
                        {home.primaryCta?.display && (
                            <Button
                                href={home.primaryCta.href}
                                variant="primary"
                                size="l"
                                arrowIcon
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
            </Column>
        </Column>
    );
};
