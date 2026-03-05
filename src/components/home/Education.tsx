"use client";

import {
    Column,
    Heading,
    Text,
    RevealFx,
    Row,
} from "@once-ui-system/core";
import { about } from "@/resources";

export const Education = () => {
    if (!about.studies.display) return null;

    return (
        <Column
            fillWidth
            paddingY="32"
            gap="l"
            horizontal="center"
            id="education"
        >
            <RevealFx translateY="4">
                <Heading as="h2" variant="display-strong-xs" marginBottom="16">
                    {about.studies.title}
                </Heading>
            </RevealFx>

            <Column fillWidth maxWidth="m" gap="l">
                {about.studies.institutions.map((institution, index) => (
                    <RevealFx key={`${institution.name}-${index}`} translateY="8" delay={index * 0.1} fillWidth>
                        <Column
                            fillWidth
                            padding="16"
                            border="neutral-alpha-weak"
                            radius="m"
                            background="neutral-alpha-weak"
                        >
                            <Heading as="h3" variant="heading-strong-s" marginBottom="4">
                                {institution.name}
                            </Heading>
                            <Text variant="body-default-m" onBackground="neutral-weak">
                                {institution.description}
                            </Text>
                        </Column>
                    </RevealFx>
                ))}
            </Column>
        </Column>
    );
};
