import React from "react";
import styled from "styled-components";

const ProjectCardBox = styled.div`
  width: 50vw;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-gap: 1rem;
  height: auto;
  margin: 1rem;
  text-align: left;
  box-shadow: 10px 10px 5px grey;
  background-color: #fff0b3;
`;

const ProjectCardLeft = styled.div`
  width: 100%;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ProjectCardRight = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: rgba(92, 238, 231, 0.5);
  font-size: 1.3rem;

  & p {
    margin: 1rem 0;
  }
`;

const ProjectCard = props => {
  return (
    <React.Fragment>
      <ProjectCardBox>
        <ProjectCardLeft>
          <img
            src={require("../ProjectData/ProfileWeb/cover.jpg")}
            alt="cover"
          />
        </ProjectCardLeft>
        <ProjectCardRight>
          <strong>Web Project: Personal Profile</strong>
          <p>
            <strong>Description: </strong>This is a single page application
            developed for the purpose of showcasing my personal profile.
          </p>
          <p>
            <strong>Implementation: </strong>React, React Router, Styled
            Component, Marked
          </p>
        </ProjectCardRight>
      </ProjectCardBox>
    </React.Fragment>
  );
};

export default ProjectCard;
