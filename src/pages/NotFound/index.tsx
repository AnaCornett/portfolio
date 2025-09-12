import React from "react";
import { Space, Typography } from "antd";

const { Title } = Typography;

const NotFound: React.FC = () => {
  return (
    <Space 
      direction="vertical" 
      align="center" 
      style={{ 
        width: "100%", 
        height: "100vh", 
        justifyContent: "center" 
      }}
    >
      <Title level={1}>404 - Not Found</Title>
    </Space>
  );
};

export default NotFound;
