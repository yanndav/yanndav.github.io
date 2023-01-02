import "../App.css";
import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { AppContext } from "../AppContext";
import FrenchCV from "./fichiers/CV_Yann_DAVID_FR.pdf";
import EnglishCV from "./fichiers/CV_Yann_DAVID_EN.pdf";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiTwotoneMail,
  AiOutlineDownload,
} from "react-icons/ai";

const presEN = `
My name is Yann. Passionate about the challenges of ecological transition and public policies, I work at the [CIRED](http://www.centre-cired.fr/en/) as a data scientist and web developer. 

Before that, I graduated in Applied economics from the [Paris School of Economics](https://www.parisschoolofeconomics.eu/en/) and in Public Affairs from [Sciences Po](https://www.sciencespo.fr/en/).
`;

const presFR = `
Je suis Yann. Passioné par les défis des politiques publiques de transition écologique, je travaille actuellement au [CIRED](http://www.centre-cired.fr/) en tant que développeur web et data scientist.

Avant cela, j'ai obtenu un master en économie appliquée de l'[Ecole d'économie de Paris](https://www.parisschoolofeconomics.eu/) et un master en affaires publiques de [Sciences Po](https://www.sciencespo.fr/fr/).
 
`;

const projectsEN = [
  `where I develop [ecolometrics.fr](https://ecolometrics.fr/).

The objective with this website is to provide interactive and territory-relevant data analyses for policy-makers. We use heterogeneous open data sources as inputs, and turn them into automated territory-relevant analyses with graphs, tables, maps and texts.
`,
];

const projectsFR = [
  `où je co-construis [ecolometrics.fr](https://ecolometrics.fr).

L'objectif avec ce site est de créer un assistant pour le pilotage des transitions territoriales, en mettant à disposition des utilisateurs des analyses de données territorialisées et interactives. `,
];

const Presentation = styled.div`
  width: 800px;
  line-height: 2em;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & a {
    color: #d89923;
    font-weight: bold;
    text-decoration: none;
    transition: text-decoration 1s ease-in-out;
  }
  & a:hover {
    color: #d89923;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline solid 6px;
  }
  & a:active {
    color: #d89923;
    font-weight: bold;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

const HomeStyle = styled.div`
  margin: 70px auto;
  width: 900px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Icon = styled.a`
  color: #353535;
  font-size: 2em;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #d89923;
    cursor: pointer;
  }
`;

const CV = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: #ffffff;
  font-weight: bold;
  background-color: #353535;
  transition: color 0.2s ease-in-out;

  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: #d89923;
    cursor: pointer;
  }
  text-decoration: none;
`;

const Home = () => {
  const { isFrench } = useContext(AppContext);
  return (
    <>
      <HomeStyle>
        <Presentation>
          <Title>{isFrench ? "Bienvenue," : "Welcome,"}</Title>
          <ReactMarkdown
            children={isFrench ? presFR : presEN}
            linkTarget={"_blank"}
          />
        </Presentation>
        <CV download={"CV Yann David"} href={isFrench ? FrenchCV : EnglishCV}>
          <AiOutlineDownload />
          {isFrench ? "Télecharger le CV" : "Download CV"}
        </CV>
        <IconsContainer>
          <Icon href="https://www.linkedin.com/in/ydavid/" target="_blank">
            <AiFillLinkedin />
          </Icon>
          <Icon href="https://github.com/yanndav" target="_blank">
            <AiFillGithub />
          </Icon>
          <Icon href="mailto:yann.collindavid@gmail.com" target="_blank">
            <AiTwotoneMail />
          </Icon>
        </IconsContainer>
      </HomeStyle>
    </>
  );
};

export default Home;
