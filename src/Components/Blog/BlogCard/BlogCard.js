import React from "react";
import styled from "styled-components";
import marked from "marked";

const BlogCardBox = styled.div`
  width: 60vw;
  margin: 1rem auto;
  display: grid;
  grid-template-rows: auto 1fr;
  text-align: left;
  font-size: 1.5rem;
  line-height: 1.5;
  overflow: auto;

  & p {
    margin: 1rem;
  }

  @media (max-width: 750px) {
    width: 80vw;
  }

  @media (max-width: 400px) {
    width: 90vw;
    font-size: 1rem;
  }
`;

class BlogCard extends React.Component {
  state = {
    post: ""
  };

  componentDidMount() {
    const readmePath = require("../../../BlogPosts/AboutMe/index.md");

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          post: marked(text)
        });
      });
  }

  render() {
    return (
      <BlogCardBox dangerouslySetInnerHTML={{ __html: this.state.post }} />
    );
  }
}

export default BlogCard;
