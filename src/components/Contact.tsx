"use client";

import { useState } from "react";
import {
  Button,
  Column,
  Heading,
  Icon,
  Input,
  Row,
  Text,
  Textarea,
  Card,
} from "@once-ui-system/core";
import { contact, social } from "@/resources";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (!contact.display) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Create mailto link as fallback
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");

    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Column fillWidth gap="l" id="contact">
      <Column horizontal="center" gap="s">
        <Heading as="h2" variant="display-strong-s">
          {contact.title}
        </Heading>
        {contact.subtitle && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {contact.subtitle}
          </Text>
        )}
      </Column>
      <Row fillWidth wrap gap="xl" horizontal="center">
        {/* Contact Info */}
        <Column gap="l" style={{ flex: "1 1 280px", maxWidth: "400px" }}>
          <Card padding="l" radius="l" border="neutral-alpha-weak" background="surface">
            <Column gap="l">
              <Row gap="m" vertical="center">
                <Row padding="s" radius="full" background="brand-alpha-weak">
                  <Icon name="email" size="m" onBackground="brand-strong" />
                </Row>
                <Column gap="4">
                  <Text variant="label-strong-s" onBackground="neutral-weak">
                    Email
                  </Text>
                  <Text variant="body-default-m">{contact.email}</Text>
                </Column>
              </Row>
              {contact.phone && (
                <Row gap="m" vertical="center">
                  <Row padding="s" radius="full" background="brand-alpha-weak">
                    <Icon name="phone" size="m" onBackground="brand-strong" />
                  </Row>
                  <Column gap="4">
                    <Text variant="label-strong-s" onBackground="neutral-weak">
                      Phone
                    </Text>
                    <Text variant="body-default-m">{contact.phone}</Text>
                  </Column>
                </Row>
              )}
              {contact.location && (
                <Row gap="m" vertical="center">
                  <Row padding="s" radius="full" background="brand-alpha-weak">
                    <Icon name="mapPin" size="m" onBackground="brand-strong" />
                  </Row>
                  <Column gap="4">
                    <Text variant="label-strong-s" onBackground="neutral-weak">
                      Location
                    </Text>
                    <Text variant="body-default-m">{contact.location}</Text>
                  </Column>
                </Row>
              )}
              {/* Social Links */}
              <Row gap="8" paddingTop="m" wrap>
                {social
                  .filter((item) => item.essential)
                  .map((item) => (
                    <Button
                      key={item.name}
                      href={item.link}
                      variant="secondary"
                      size="s"
                      prefixIcon={item.icon}
                    />
                  ))}
              </Row>
            </Column>
          </Card>
        </Column>

        {/* Contact Form */}
        {contact.showForm && (
          <Card
            padding="l"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 400px", maxWidth: "500px" }}
          >
            <form onSubmit={handleSubmit}>
              <Column gap="m">
                <Input
                  id="name"
                  name="name"
                  label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="subject"
                  name="subject"
                  label="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  id="message"
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="l"
                  fillWidth
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Message Sent!"
                    : "Send Message"}
                </Button>
              </Column>
            </form>
          </Card>
        )}
      </Row>
    </Column>
  );
};
