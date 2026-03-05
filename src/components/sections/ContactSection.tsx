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

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  if (!contact.display) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

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
    <Column fillWidth gap="xl" paddingY="80" id="contact">
      <Column horizontal="center" gap="s">
        <Text variant="label-strong-m" onBackground="brand-medium">
          GET IN TOUCH
        </Text>
        <Heading as="h2" variant="display-strong-l">
          Contact Info
        </Heading>
      </Column>

      <Row fillWidth wrap gap="xl" horizontal="center">
        {/* Contact Info Cards */}
        <Column gap="l" style={{ flex: "1 1 320px", maxWidth: "400px" }}>
          {/* Email Card */}
          <Card padding="l" radius="l" border="neutral-alpha-weak" background="surface">
            <Row gap="m" vertical="center">
              <Row padding="m" radius="full" background="brand-alpha-weak">
                <Icon name="email" size="l" onBackground="brand-strong" />
              </Row>
              <Column gap="4">
                <Text variant="label-strong-s" onBackground="neutral-weak">
                  Email
                </Text>
                <Text variant="body-default-m">{contact.email}</Text>
              </Column>
            </Row>
          </Card>

          {/* Phone Card */}
          {contact.phone && (
            <Card padding="l" radius="l" border="neutral-alpha-weak" background="surface">
              <Row gap="m" vertical="center">
                <Row padding="m" radius="full" background="brand-alpha-weak">
                  <Icon name="phone" size="l" onBackground="brand-strong" />
                </Row>
                <Column gap="4">
                  <Text variant="label-strong-s" onBackground="neutral-weak">
                    Phone
                  </Text>
                  <Text variant="body-default-m">{contact.phone}</Text>
                </Column>
              </Row>
            </Card>
          )}

          {/* Location Card */}
          {contact.location && (
            <Card padding="l" radius="l" border="neutral-alpha-weak" background="surface">
              <Row gap="m" vertical="center">
                <Row padding="m" radius="full" background="brand-alpha-weak">
                  <Icon name="mapPin" size="l" onBackground="brand-strong" />
                </Row>
                <Column gap="4">
                  <Text variant="label-strong-s" onBackground="neutral-weak">
                    Location
                  </Text>
                  <Text variant="body-default-m">{contact.location}</Text>
                </Column>
              </Row>
            </Card>
          )}

          {/* Social Links */}
          <Row gap="8" paddingTop="8" wrap>
            {social
              .filter((item) => item.essential)
              .map((item) => (
                <Button
                  key={item.name}
                  href={item.link}
                  variant="secondary"
                  size="m"
                  prefixIcon={item.icon}
                  className="glass-btn-secondary"
                >
                  {item.name}
                </Button>
              ))}
          </Row>
        </Column>

        {/* Contact Form */}
        {contact.showForm && (
          <Card
            padding="xl"
            radius="l"
            border="neutral-alpha-weak"
            background="surface"
            style={{ flex: "1 1 450px", maxWidth: "550px" }}
          >
            <form onSubmit={handleSubmit}>
              <Column gap="l">
                <Heading as="h3" variant="heading-strong-m">
                  Send a Message
                </Heading>
                <Row gap="m" wrap>
                  <Column style={{ flex: "1 1 200px" }}>
                    <Input
                      id="name"
                      name="name"
                      label="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Column>
                  <Column style={{ flex: "1 1 200px" }}>
                    <Input
                      id="email"
                      name="email"
                      label="Your Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Column>
                </Row>
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
                  label="Your Message"
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
                  className="glass-btn-primary"
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
