import React, { useState } from "react"
import { Menu, Container } from "semantic-ui-react"
// import styled from "styled-components";

const NavBar = () => {

  const [activeItem, setActiveItem] = useState("home")

  return (
    <Container>
      <Menu size="huge" text>
        <Menu.Item
          text
          name="home"
          active={activeItem === "home"}
          onClick={() => setActiveItem("home")}
        >

          Home
        </Menu.Item>

        <Menu.Item
          name="classes"
          active={activeItem === "classes"}
          onClick={() => setActiveItem("classes")}
        >
          Classes
        </Menu.Item>
        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={() => setActiveItem("about")}
        >
          About
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default NavBar