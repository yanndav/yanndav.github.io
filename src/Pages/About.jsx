import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const textEN = `### Hi, I'm Yann!
- I work at the [CIRED](http://www.centre-cired.fr/en/) as a Research Officer on a very cool project: the [Biovallée](https://biovallee.net/). My task is to develop a monitoring tool (a dashboard) incorporating material flow analysis and socioeconomic indicators at a very local level.
- By rank of confidence, I speak R and Python, and I'm also learning Html/CSS/Javascript/React
- I graduated in september 2021 in Applied Economics at the Paris School of Economics, and in Public Policy at Sciences Po
- Feel free to reach out at [yann.collindavid@gmail.com](mailto:yann.collindavid@gmail.com)
- You can find further information about my ongoing projects at https://yanndav.github.io/  (hold on, I need to update this page someday)
`;

const textFR = `
  ### Bonjour, c'est Yann
  - Je suis chargé d'études au [CIRED](http://www.centre-cired.fr/)
`;

const Presentation = styled.div`
  margin: 70px auto;
  width: 800px;
  max-width: 80%;
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

const About = ({ isFrench }) => {
  return (
    <Presentation>
      <ReactMarkdown
        children={isFrench ? textFR : textEN}
        linkTarget={"_blank"}
      />
    </Presentation>
  );
};

export default About;
