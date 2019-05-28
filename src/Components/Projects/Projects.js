import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectsBox = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  margin-bottom: 5rem;
  overflow: auto;
  padding: 1rem;
`;

const Projects = () => {
  return (
    <ProjectsBox>
      <ProjectCard />
    </ProjectsBox>
  );
};

export default Projects;
