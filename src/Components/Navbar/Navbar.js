import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarBox = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  text-decoration: none;
  list-style-type: none;
  text-align: center;
  background: rgb(255, 255, 255);
  color: black;
`;

const Ul = styled.ul`
  display: block;
`;

const Li = styled.li`
  margin: 1rem;
  text-decoration: none;
  list-style-type: none;
  display: inline-block;

  &:hover {
    transform: translateY(-10%);
    box-shadow: 10px 10px 5px grey;
  }

  &:active {
    transform: translateY(-5%);
    box-shadow: 5px 5px 2px grey;
  }
`;

const linkStyles = {
  color: "black",
  textDecoration: "none"
};

const Navbar = () => {
  return (
    <React.Fragment>
      <NavbarBox>
        <Ul>
          <Li>
            <Link to="/" style={linkStyles}>
              <h1>Home</h1>
            </Link>
          </Li>
          <Li>
            <Link to="/profile" style={linkStyles}>
              <h1>Profile</h1>
            </Link>
          </Li>
          <Li>
            <Link to="/projects" style={linkStyles}>
              <h1>Projects</h1>
            </Link>
          </Li>
          <Li>
            <Link to="/blog" style={linkStyles}>
              <h1>Blog</h1>
            </Link>
          </Li>
        </Ul>
      </NavbarBox>
    </React.Fragment>
  );
};

export default Navbar;
