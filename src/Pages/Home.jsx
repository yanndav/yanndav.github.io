import "../App.css";

import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;

const HomeStyle = styled.div`
  margin: 70px auto;
  width: 800px;
  max-width: 100%;
`;

const Home = () => {
  return (
    <>
      <HomeStyle>
        <Title>Bienvenue</Title>
      </HomeStyle>
    </>
  );
};

export default Home;
