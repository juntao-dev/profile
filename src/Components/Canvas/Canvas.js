import React from "react";
import styled from "styled-components";
import ProfileCard from "../ProfileCard";
import { Route } from "react-router-dom";

const CanvasBox = styled.div`
  ${"" /* border: 1px solid red; */}
  width: 100%;
  top: 10vh;
  height: 90vh;
  width: 100vw;
  position: fixed;
  text-align: center;
`;

const Canvas = () => {
  return (
    <CanvasBox>
      <Route path="/" exact component={ProfileCard} />
    </CanvasBox>
  );
};

export default Canvas;
