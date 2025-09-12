import { Typography, Space } from "antd";
import React from "react";

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Space
      direction="vertical"
      align="center"
      style={{
        width: "100%",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "var(--light-blue-900)",
        background: "linear-gradient(180deg, var(--light-blue-900) 0%, var(--light-blue-800) 100%)",
      }}
    >
      <Typography.Title
        level={1}
        style={{
          color: "white",
          fontSize: "60px",
          margin: 0,
          fontWeight: "bold",
        }}
      >
        Anabele Cornett
      </Typography.Title>
      <Typography.Text
        style={{
          color: "white",
          fontSize: "24px",
          marginTop: "10px",
        }}
      >
        Full-Stack Software Developer
      </Typography.Text>
    </Space>
  );
};

export default Home;
