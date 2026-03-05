"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
    Badge,
    Button,
    Icon,
} from "@once-ui-system/core";
import { home, about } from "@/resources";

export const EducationAndAchievements = () => {
    return (
        <Row
            fillWidth
            paddingY="80"
            gap="32"
            wrap
            maxWidth="l"
            id="education"
        >
            {/* Left Column: Education */}
            <Column fillWidth flex={1} gap="24">
                <RevealFx translateY="4">
                    <Text variant="label-default-s" onBackground="brand-medium">
                        LEARNING JOURNEY
                    </Text>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Heading as="h2" variant="display-strong-xs">
                        {about.studies.title}
                    </Heading>
                </RevealFx>

                <Column fillWidth gap="16">
                    {about.studies.institutions.map((institution, index) => (
                        <RevealFx key={`${institution.name}-${index}`} translateY="8" delay={index * 0.1}>
                            <Column
                                fillWidth
                                padding="24"
                                border="neutral-alpha-weak"
                                radius="l"
                                background="neutral-alpha-weak"
                                gap="8"
                            >
                                <Row vertical="center" gap="12">
                                    <Icon name="chevronRight" size="s" onBackground="brand-medium" />
                                    <Heading as="h3" variant="heading-strong-s">
                                        {institution.name}
                                    </Heading>
                                </Row>
                                <Text variant="body-default-m" onBackground="neutral-weak" style={{ marginLeft: '28px' }}>
                                    {institution.description}
                                </Text>
                            </Column>
                        </RevealFx>
                    ))}
                </Column>
            </Column>

            {/* Right Column: Achievements */}
            <Column fillWidth flex={1} gap="24">
                <RevealFx translateY="4">
                    <Text variant="label-default-s" onBackground="brand-medium">
                        RECOGNITION
                    </Text>
                </RevealFx>
                <RevealFx translateY="8" delay={0.2}>
                    <Heading as="h2" variant="display-strong-xs">
                        {home.achievements.title}
                    </Heading>
                </RevealFx>

                <Column fillWidth gap="16">
                    {home.achievements.items.map((item, index) => (
                        <RevealFx key={`${item.title}-${index}`} translateY="8" delay={index * 0.1}>
                            <Column
                                fillWidth
                                padding="24"
                                border="neutral-alpha-weak"
                                radius="l"
                                background="surface"
                                gap="12"
                                position="relative"
                            >
                                <Row fillWidth horizontal="between" vertical="center" gap="8">
                                    <Heading as="h3" variant="heading-strong-s">
                                        {item.title}
                                    </Heading>
                                    <Badge>
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
                                    <Button
                                        href={item.link}
                                        variant="tertiary"
                                        size="s"
                                        suffixIcon="arrowUpRight"
                                        style={{ marginTop: '8px' }}
                                    >
                                        View Certificate
                                    </Button>
                                )}
                            </Column>
                        </RevealFx>
                    ))}
                </Column>
            </Column>
        </Row>
    );
};
