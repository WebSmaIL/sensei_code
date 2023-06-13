import React from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import Instructions from "./Instructions";
import { useParams } from "react-router-dom";
import EditorMain from "./editor/EditorMain";


const Tasks = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Container>
        <SpanHeader>Обучение</SpanHeader>
        <ContainerTitle>
          <TitleIcon>
            <FaPlay />
          </TitleIcon>
          <Title>Правила использования print().</Title>
        </ContainerTitle>
        <ContainerBtn>
          <Instruct>Инструкция</Instruct>
          <Exit>Выход</Exit>
        </ContainerBtn>
        <ContentContainer>
          <Instructions />
          <EditorMain />
        </ContentContainer>
      </Container>
    </>
  );
};

export default Tasks;

const Container = styled.div`
  padding: 0 100px;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ContainerTitle = styled.div`
  display: flex;
  gap: 1rem;
  margin: 10px 0;
`;

const TitleIcon = styled.div`
  color: #fff;
  margin-top: 5px;
`;

const Title = styled.div`
  color: #fff;
  font-size: 20px;
`;

const ContainerBtn = styled.div`
  display: flex;
  gap: 1rem;
  font-weight: 600;
`;

const Instruct = styled.div`
  background: #1f1f22;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Exit = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #1f1f22;
  }
`;

const SpanHeader = styled.div`
  width: max-content;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;

  border-radius: 5px;
`;
