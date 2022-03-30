import React from "react";
import styled from "styled-components";

const BlogStyle = styled.div`
  width: fit-content;
  margin: 70px auto;
  font-size: 20px;
`;
const Blog = () => {
  return (
    <BlogStyle>
      {" "}
      Le blog est en construction... Comme l'ensemble de ce site
    </BlogStyle>
  );
};

export default Blog;
