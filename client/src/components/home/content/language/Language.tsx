import React from "react";
import styled from "styled-components";
import Module from "./module/Module";
import { MOCK } from "./mock";

const Language = () => {
  return (
    <>
      <Container>
        <SpanHeader>{MOCK.lang_name}</SpanHeader>
        <Module modules={MOCK.modules} />
      </Container>
    </>
  );
};

export default Language;

const Container = styled.div`
  background: #292a2c;
  width: 100%;
  height: max-content;
  min-height: 100vh;
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
