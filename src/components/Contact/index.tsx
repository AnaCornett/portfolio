import { GithubOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import {
  Typography as AntTypography,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import React from "react";

const { Content } = Layout;

const { Link } = AntTypography;

const { Title, Text } = Typography;
const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log("Contact form values:", values);
    // Here you would typically send the form data to your backend
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <MailOutlined />,
      label: "Email",
      value: "anabelecornett@gmail.com",
      link: "mailto:anabelecornett@gmail.com",
    },
    {
      icon: <PhoneOutlined />,
      label: "Phone",
      value: "(937) 212-7053",
      link: "tel:+19372127053",
    },
    {
      icon: <GithubOutlined />,
      label: "GitHub",
      value: "github.com/AnaCornett",
      link: "https://github.com/AnaCornett",
    },
  ];

  return (
    <Content
      style={{
        padding: "80px 20px",
        backgroundColor: "var(--light-blue-500)",
        background:
          "linear-gradient(180deg, var(--light-blue-500) 0%, var(--light-blue-400) 100%)",
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
            Get In Touch
          </Title>
          <Text
            style={{
              fontSize: "18px",
              color: "var(--light-blue-50)",
            }}
          >
            I'm always interested in hearing about new opportunities and
            projects
          </Text>
        </Space>

        <Row gutter={[24, 24]} justify="center">
          {contactInfo.map((info, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <Card
                hoverable
                style={{
                  height: "100%",
                  backgroundColor: "var(--card-bg, #ffffff)",
                  borderColor: "var(--border-color, #e0e0e0)",
                  textAlign: "center",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                bodyStyle={{
                  padding: "32px 24px",
                }}
              >
                <Space direction="vertical" align="center" style={{ width: "100%" }} size="large">
                  <div
                    style={{
                      backgroundColor: "var(--primary, #03a9f4)",
                      borderRadius: "50%",
                      width: "60px",
                      height: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: "24px",
                    }}
                  >
                    {info.icon}
                  </div>
                  <Space direction="vertical" align="center" size="small">
                    <Typography.Title
                      level={4}
                      style={{
                        margin: 0,
                        color: "var(--text-primary, #212121)",
                        fontSize: "18px",
                      }}
                    >
                      {info.label}
                    </Typography.Title>
                    <Link
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      style={{
                        color: "var(--text-secondary, #757575)",
                        fontSize: "14px",
                        textDecoration: "none",
                      }}
                    >
                      {info.value}
                    </Link>
                  </Space>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </Content>
  );
};

export default Contact;
