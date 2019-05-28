import React from "react";
import styled from "styled-components";
import HomePageCard from "../HomePageCard";
import Profile from "../Profile";
import Projects from "../Projects";
import Blog from "../Blog";
import { Route } from "react-router-dom";

const CanvasBox = styled.div`
  top: 6vh;
  width: 100vw;
  height: 100%;
  position: fixed;
  text-align: center;
  background-color: #f2f2f2;
  overflow: auto;
`;

const Canvas = () => {
  return (
    <CanvasBox>
      <Route path="/" exact component={HomePageCard} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/blog" exact component={Blog} />
    </CanvasBox>
  );
};

export default Canvas;
