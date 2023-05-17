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
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin: 50px auto;
`;
