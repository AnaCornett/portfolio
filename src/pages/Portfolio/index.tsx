import React from "react";
import { Layout } from "antd";
import Home from "../../components/Home";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const { Content } = Layout;

const Portfolio: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ paddingTop: "64px", backgroundColor: "var(--light-blue-900)" }}>
        <div id="home" style={{ width: "100%" }}>
          <Home />
        </div>
        <div id="about" style={{ width: "100%" }}>
          <About />
        </div>
        <div id="skills" style={{ width: "100%" }}>
          <Skills />
        </div>
        <div id="projects" style={{ width: "100%" }}>
          <Projects />
        </div>
        <div id="contact" style={{ width: "100%" }}>
          <Contact />
        </div>
      </Content>
    </Layout>
  );
};

export default Portfolio;
