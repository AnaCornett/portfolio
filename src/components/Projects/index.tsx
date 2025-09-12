import { GithubOutlined } from "@ant-design/icons";
import { Button, Card, Col, Layout, Row, Space, Tag, Typography } from "antd";
import React from "react";

const { Content } = Layout;

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Travel Itinerary",
      description:
        "Ruby on Rails application for managing travel itineraries with Docker containerization. Features standard Rails architecture with comprehensive setup for travel planning and organization.",
      image: "https://via.placeholder.com/300x200?text=Travel+Itinerary",
      technologies: ["Ruby on Rails", "Docker", "Tailwind"],
      category: "fullstack",
      githubUrl: "https://github.com/AnaCornett/travel_itinerary",
      liveUrl: null,
      featured: true,
    },
    {
      id: 2,
      title: "Time Capsule",
      description:
        "Full-stack application with TypeScript frontend, mobile component, and server backend. Multi-platform project showcasing modern TypeScript development across different environments.",
      image: "https://via.placeholder.com/300x200?text=Time+Capsule",
      technologies: ["TypeScript", "JavaScript", "CSS"],
      category: "fullstack",
      githubUrl: "https://github.com/AnaCornett/time_capsule",
      liveUrl: null,
      featured: true,
    },
    {
      id: 3,
      title: "Discord Clone",
      description:
        "Discord main page interface recreation featuring group chat layout built with React and TypeScript. Replicates Discord's UI design and chat functionality with modern web technologies.",
      image: "https://via.placeholder.com/300x200?text=Discord+Clone",
      technologies: ["React", "TypeScript", "HTML"],
      category: "frontend",
      githubUrl: "https://github.com/AnaCornett/discord",
      liveUrl: null,
      featured: false,
    },
    {
      id: 4,
      title: "Rockeatfy",
      description:
        "Kanban-style task management application with drag-and-drop card functionality. Interactive project board allowing users to move task cards between different columns for workflow organization.",
      image: "https://via.placeholder.com/300x200?text=Rockeatfy",
      technologies: ["JavaScript", "HTML", "Yarn"],
      category: "frontend",
      githubUrl: "https://github.com/AnaCornett/rockeatfy",
      liveUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: "Tesla Clone",
      description:
        "Tesla website clone built with React and TypeScript. Modern automotive website interface showcasing responsive design and contemporary web development practices using Create React App.",
      image: "https://via.placeholder.com/300x200?text=Tesla+Clone",
      technologies: ["React", "TypeScript", "HTML"],
      category: "frontend",
      githubUrl: "https://github.com/AnaCornett/tesla",
      liveUrl: null,
      featured: false,
    },
    {
      id: 6,
      title: "Vault",
      description:
        "React TypeScript application with modern styling and component architecture. Secure data management interface built with contemporary web technologies and responsive CSS design.",
      image: "https://via.placeholder.com/300x200?text=Vault",
      technologies: ["React", "TypeScript", "CSS", "HTML"],
      category: "frontend",
      githubUrl: "https://github.com/AnaCornett/Vault",
      liveUrl: null,
      featured: false,
    },
  ];

  const filteredProjects = projects;

  return (
    <Content
      style={{
        padding: "80px 20px",
        backgroundColor: "var(--light-blue-600)",
        background:
          "linear-gradient(180deg, var(--light-blue-600) 0%, var(--light-blue-500) 100%)",
        minHeight: "100vh",
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
          style={{ width: "100%", marginBottom: "60px" }}
        >
          <Title level={2} style={{ color: "white" }}>
            My Projects
          </Title>
          <Text
            style={{
              fontSize: "18px",
              color: "var(--light-blue-50)",
            }}
          >
            Here are some of the projects I've worked on
          </Text>
        </Space>

        <Row gutter={[24, 24]}>
          {filteredProjects.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.id}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  backgroundColor: "var(--card-bg, #ffffff)",
                  borderColor: "var(--border-color, #e0e0e0)",
                  display: "flex",
                  flexDirection: "column",
                }}
                bodyStyle={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: "16px",
                  position: "relative",
                  minHeight: "200px",
                }}
              >
                <Meta
                  title={
                    <Space align="center">
                      <span style={{ color: "var(--text-primary, #212121)" }}>
                        {project.title}
                      </span>
                    </Space>
                  }
                  description={
                    <Space
                      direction="vertical"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Typography.Text
                        style={{
                          color: "var(--text-secondary, #757575)",
                          height: "4.8em",
                          lineHeight: "1.2em",
                          fontSize: "14px",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {project.description}
                      </Typography.Text>
                      <Space wrap size="small">
                        {project.technologies.map((tech, index) => (
                          <Tag
                            key={index}
                            style={{
                              backgroundColor: "var(--primary, #03a9f4)",
                              color: "#ffffff",
                              border: "none",
                            }}
                          >
                            {tech}
                          </Tag>
                        ))}
                      </Space>
                      <Button
                        type="text"
                        icon={<GithubOutlined />}
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        style={{
                          position: "absolute",
                          bottom: "16px",
                          left: "16px",
                          right: "16px",
                          width: "calc(100% - 32px)",
                          color: "var(--text-secondary, #757575)",
                          backgroundColor: "transparent",
                          border: "1px solid var(--border-color, #e0e0e0)",
                        }}
                      >
                        Code
                      </Button>
                    </Space>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </Content>
  );
};

export default Projects;
