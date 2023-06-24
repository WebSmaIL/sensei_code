import React from "react";
import Editor from "./Editor/Editor";
import styled from "styled-components";
import Output from "./Output/Output";

const EditorMain = () => {
  return (
    <MainWrapper>
      <Editor />
      <Output />
    </MainWrapper>
  );
};
export default EditorMain;

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
