import { Layout, Menu, MenuProps, Row, Typography } from "antd";
import { useEffect, useState } from "react";

const { Header: AntHeader } = Layout;

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "About",
    key: "about",
  },
  {
    label: "Skills",
    key: "skills",
  },
  {
    label: "Projects",
    key: "projects",
  },
  {
    key: "contact",
    label: "Contact",
  },
];

const Header = () => {
  const [current, setCurrent] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    scrollToSection(e.key);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrent(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AntHeader
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "var(--header-bg, var(--light-blue-900))",
        padding: "0 20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        height: "auto",
      }}
    >
      <Row
        align={"middle"}
        style={{
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Typography.Text
          style={{
            color: "var(--light-blue-50)",
            fontSize: 25,
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("home")}
        >
          Anabele Cornett
        </Typography.Text>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          className="menu-reset"
        />
      </Row>
    </AntHeader>
  );
};

export default Header;
