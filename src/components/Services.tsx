"use client";

import { Column, Heading, Icon, Row, Text, Card } from "@once-ui-system/core";
import { services } from "@/resources";

export const Services = () => {
  if (!services.display) return null;

  return (
    <Column fillWidth gap="l" id="services">
      <Column horizontal="center" gap="s">
        <Heading as="h2" variant="display-strong-s">
          {services.title}
        </Heading>
        {services.subtitle && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {services.subtitle}
          </Text>
        )}
      </Column>
      <Row fillWidth wrap gap="l" horizontal="center">
        {services.items.map((service, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 300px", maxWidth: "380px" }}
          >
            <Column gap="m" horizontal="center" align="center">
              <Row
                padding="m"
                radius="full"
                background="brand-alpha-weak"
              >
                <Icon name={service.icon} size="l" onBackground="brand-strong" />
              </Row>
              <Heading as="h3" variant="heading-strong-m">
                {service.title}
              </Heading>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{ textAlign: "center" }}
              >
                {service.description}
              </Text>
            </Column>
          </Card>
        ))}
      </Row>
    </Column>
  );
};
