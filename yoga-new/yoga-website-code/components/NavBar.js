import React, { useState, useEffect } from "react";
import { Menu, Container } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const currentPath = router.pathname.substring(1);
  const [activeItem, setActiveItem] = useState("home");

  return (
    <Container>
      {useEffect(() => {
        if (currentPath !== "") {
          setActiveItem(currentPath);
        }
      })}
      <Menu size="huge" text>
        <Link href="/">
          <Menu.Item name="home" active={activeItem === "home"}>
            Home
          </Menu.Item>
        </Link>

        <Link href="about">
          <Menu.Item name="about" active={activeItem === "about"}>
            About
          </Menu.Item>
        </Link>

        <Link href="classes">
          <Menu.Item name="classes" active={activeItem === "classes"}>
            Classes
          </Menu.Item>
        </Link>

        <Link href="covid">
          <Menu.Item name="covid" active={activeItem === "covid"}>
            COVID 19
          </Menu.Item>
        </Link>

        {/* <Link href="newstudents">
        <Menu.Item
          name="newstudents"
          active={activeItem === "newstudents"}
        >
          New Students
        </Menu.Item>
      </Link> */}
      </Menu>
    </Container>
  );
};

export default NavBar;
