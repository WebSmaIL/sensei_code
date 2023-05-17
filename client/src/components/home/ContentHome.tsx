import React from "react";
import styled from "styled-components";
import { SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const ContentHome = () => {
  return (
    <>
      <Container>
        <SpanHeader>Главная</SpanHeader>
        <LanguageSelection>
          <Text>Выберите языки, на которых вы хотите обучаться:</Text>
          <ContainerLanguage>
            <Language to={'/python'} background="#306988" color="#FFD43B">
              <Svg>
                <SiPython />
              </Svg>
              <LanguageText>Python</LanguageText>
            </Language>

            <Language to={'/js'} background="#FFD43B" color="#000">
              <Svg>
                <IoLogoJavascript />
              </Svg>
              <LanguageText>Javascript</LanguageText>
            </Language>
          </ContainerLanguage>
        </LanguageSelection>
      </Container>
    </>
  );
};

export default ContentHome;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  padding: 10px 0;
`;

const SpanHeader = styled.div`
  width: max-content;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  margin-left: 75px;
  border-radius: 5px;
`;

const ContainerLanguage = styled.div`
  display: flex;
`;

const LanguageSelection = styled.div`
  width: 1000px;
  height: max-content;
  min-height: 200px;
  background: rgba(0, 0, 0, 0.4);
  margin: 50px auto;
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;
const Text = styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  padding: 20px;
`;
const Svg = styled.svg`
  width: 70px;
  height: 70px;
  font-size: 50px;
  padding: 10px;
  color: #fff;
  transition: all 500ms ease;
`;

const Language = styled(NavLink)<{ background: string }>`
  text-align: center;
  background: rgba(0, 2, 2, 0.2);
  width: 100px;
  height: 100px;
  text-decoration: none;
  margin: 10px 0px 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 500ms ease;
  
  &:hover {
    transform: scale(1.1);
    background: ${(props) => props.background};
   
  }
  &:hover ${Svg} {
    color: ${(props) => props.color};
  }
`;

const LanguageText = styled.span`
  color: #fff;
`;
