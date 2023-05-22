import React from 'react'
import styled from "styled-components";
import Python from '../../python/Python';
import HeaderNav from '../../sidebar/Sidebar';
import HeaderUser from '../../header/HeaderUser';

const LanguagePython = () => {
  return (
    <>
        <HeaderUser/>
        <HeaderNav/>
      <Container>
      <SpanHeader>Python</SpanHeader>
        <Python/>
      </Container>
    </>
  )
}

export default LanguagePython

const Container = styled.div`
  background: #292A2C;
  width: 100%;
  height: max-content;
  min-height: 100vh;
  padding: 10px 0;
`

const SpanHeader = styled.div`
  width: max-content;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  margin-left: 75px;
  border-radius: 5px;
`;