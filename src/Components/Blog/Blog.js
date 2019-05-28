import React from "react";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const BlogBox = styled.div`
  padding: 1rem;
  overflow: auto;
  margin-bottom: 5rem;
`;

const Blog = () => {
  return (
    <BlogBox>
      <BlogCard />
    </BlogBox>
  );
};

export default Blog;
