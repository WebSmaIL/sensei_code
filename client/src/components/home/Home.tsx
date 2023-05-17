import React from 'react'

import styled from "styled-components";

import ContentHome from './ContentHome';
import HeaderNav from './HeaderNav';
import HeaderUser from './HeaderUser';

const Home = () => {
  return (
    <>
    <Container>
      <HeaderNav/>
      <HeaderUser/>
      <ContentHome/>
    </Container>
    </>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  background: #292A2C;
  height: 100vh;
  
`