"use client";

import { Avatar, Column, Heading, Icon, Row, Text, Card } from "@once-ui-system/core";
import { testimonials } from "@/resources";

export const Testimonials = () => {
  if (!testimonials.display) return null;

  return (
    <Column fillWidth gap="l" id="testimonials">
      <Column horizontal="center" gap="s">
        <Heading as="h2" variant="display-strong-s">
          {testimonials.title}
        </Heading>
      </Column>
      <Row fillWidth wrap gap="l" horizontal="center">
        {testimonials.items.map((testimonial, index) => (
          <Card
            key={index}
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 320px", maxWidth: "400px" }}
          >
            <Column gap="m">
              <Row gap="4">
                <Icon name="chat" size="l" onBackground="brand-weak" />
              </Row>
              <Text
                variant="body-default-m"
                onBackground="neutral-medium"
                style={{ fontStyle: "italic" }}
              >
                "{testimonial.content}"
              </Text>
              <Row gap="m" vertical="center" paddingTop="m">
                <Avatar
                  src={testimonial.avatar}
                  size="m"
                  value={testimonial.name}
                />
                <Column gap="4">
                  <Text variant="heading-strong-s">{testimonial.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {testimonial.role} at {testimonial.company}
                  </Text>
                </Column>
              </Row>
            </Column>
          </Card>
        ))}
      </Row>
    </Column>
  );
};
