import {
  CloudOutlined,
  CodeOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Card, Col, Layout, Row, Space, Tag, Typography } from "antd";
import React from "react";

const { Content } = Layout;

const { Title, Text } = Typography;

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <CodeOutlined />,
      skills: [
        "TypeScript",
        "React",
        "React Native",
        "JavaScript",
        "Tailwind",
        "Responsive Design",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Backend & Database",
      icon: <DatabaseOutlined />,
      skills: ["Ruby on Rails", "RESTful APIs", "PostgreSQL", "Redis"],
    },
    {
      title: "Tools & Technologies",
      icon: <CloudOutlined />,
      skills: [
        "Docker",
        "Git",
        "Linux",
        "macOS",
        "Component Architecture",
        "UI/UX Development",
        "Full-Stack Integration",
      ],
    },
  ];

  return (
    <Content
      style={{
        padding: "60px 20px",
        backgroundColor: "var(--light-blue-700)",
        background:
          "linear-gradient(180deg, var(--light-blue-700) 0%, var(--light-blue-600) 100%)",
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Space
        direction="vertical"
        style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
      >
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%", marginBottom: "40px" }}
        >
          <Title level={2} style={{ color: "white" }}>
            Skills & Technologies
          </Title>
          <Text
            style={{
              fontSize: "18px",
              color: "var(--light-blue-50)",
            }}
          >
            Here are the technologies I work with
          </Text>
        </Space>

        <Row gutter={[24, 24]}>
          {skillCategories.map((category, index) => (
            <Col xs={24} lg={8} key={index}>
              <Card
                style={{
                  height: "100%",
                  backgroundColor: "var(--card-bg, #ffffff)",
                  borderColor: "var(--border-color, #e0e0e0)",
                }}
                title={
                  <Space align="center">
                    <span style={{ color: "var(--primary, #03a9f4)" }}>
                      {category.icon}
                    </span>
                    <span style={{ color: "var(--text-primary, #212121)" }}>
                      {category.title}
                    </span>
                  </Space>
                }
              >
                <Space wrap size="small">
                  {category.skills.map((skill, skillIndex) => (
                    <Tag
                      key={skillIndex}
                      style={{
                        padding: "6px 12px",
                        fontSize: "14px",
                        backgroundColor: "var(--primary, #03a9f4)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "16px",
                      }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </Content>
  );
};

export default Skills;
