import "../App.css";
import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const textEN = `
Passionate about the challenges of transitions public policies, I work at the [CIRED](http://www.centre-cired.fr/en/) where I co-construct [comparater.fr](https://comparater.fr/).

The objective with this website is to provide interactive and territory-relevant data analyses for transition policy-makers. We use heterogeneous open data sources as inputs, and turn them into automated territory-relevant analyses with graphs, tables, maps and texts.

`;

const textFR = `
Passioné par les défis des politiques publiques de transition, je travaille au [CIRED](http://www.centre-cired.fr/) où je co-construis [comparater.fr](https://comparater.fr).

L'objectif avec ce site est de créer un assistant pour le pilotage des transitions territoriales, en mettant à disposition des utilisateurs des analyses de données territorialisées et interactives. 
 
`;

const Presentation = styled.div`
  margin-top: 30px;
  width: 800px;
  & a {
    color: #75000097;
    text-decoration: none;
  }
  & a:hover {
    color: #580000;
    cursor: pointer;
  }
  & a:active {
    color: #75000097;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
`;

const HomeStyle = styled.div`
  margin: 70px auto;
  width: 900px;
  max-width: 100%;
`;

const Home = () => {
  const { isFrench } = useContext(AppContext);
  return (
    <>
      <HomeStyle>
        <Title>{isFrench ? "Bonjour 👋" : "Hi, I'm Yann 👋"}</Title>
        <Presentation>
          <ReactMarkdown
            children={isFrench ? textFR : textEN}
            linkTarget={"_blank"}
          />
        </Presentation>
      </HomeStyle>
    </>
  );
};

export default Home;
