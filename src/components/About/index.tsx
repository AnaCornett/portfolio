import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Layout, Row, Space, Typography } from "antd";
import React from "react";

const { Content } = Layout;

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  return (
    <Content
      style={{
        padding: "80px 20px",
        backgroundColor: "var(--light-blue-800)",
        background:
          "linear-gradient(180deg, var(--light-blue-800) 0%, var(--light-blue-700) 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Space
        direction="vertical"
        style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
      >
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={10}>
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <Avatar
                size={200}
                icon={<UserOutlined />}
                style={{
                  backgroundColor: "var(--primary, #03a9f4)",
                }}
              />
            </Space>
          </Col>
          <Col xs={24} md={14}>
            <Title level={2} style={{ color: "white" }}>
              About Me
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "var(--light-blue-50)",
                lineHeight: "1.8",
              }}
            >
              Experienced Full-Stack Software Developer with 4+ years of
              expertise in Ruby on Rails and modern frontend frameworks. Strong
              focus on TypeScript/React development with comprehensive
              experience in both frontend and backend technologies.
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "var(--light-blue-50)",
                lineHeight: "1.8",
              }}
            >
              I primarily focus on frontend development using React and
              TypeScript to create responsive, intuitive user interfaces. I
              design and build reusable, type-safe React components and develop
              end-to-end features that connect frontend with backend systems.
            </Paragraph>

            <Row gutter={[16, 16]} style={{ marginTop: "40px" }}>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: "var(--card-bg, #ffffff)" }}
                >
                  <Space
                    direction="vertical"
                    align="center"
                    style={{ width: "100%" }}
                  >
                    <Title
                      level={4}
                      style={{ margin: 0, color: "var(--primary, #03a9f4)" }}
                    >
                      4+
                    </Title>
                    <Typography.Text
                      style={{ color: "var(--text-secondary, #757575)" }}
                    >
                      Years Experience
                    </Typography.Text>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card
                  size="small"
                  style={{ backgroundColor: "var(--card-bg, #ffffff)" }}
                >
                  <Space
                    direction="vertical"
                    align="center"
                    style={{ width: "100%" }}
                  >
                    <Title
                      level={4}
                      style={{ margin: 0, color: "var(--primary, #03a9f4)" }}
                    >
                      3
                    </Title>
                    <Typography.Text
                      style={{ color: "var(--text-secondary, #757575)" }}
                    >
                      Languages Spoken
                    </Typography.Text>
                  </Space>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Space>
    </Content>
  );
};

export default About;
