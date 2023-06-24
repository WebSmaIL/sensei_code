import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { TfiLock } from "react-icons/tfi";

const CardFront = () => {
  return (
    <CardFrontContainer>
      <CenterWrap>
        <Section>
          <Title>Log In</Title>
          <FormGroup>
            <Input type="email" placeholder="Email" />
            <Icon><MdAlternateEmail/></Icon>
            
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password" />
            <Icon><TfiLock/></Icon>
          </FormGroup>
          <SubmitButton>Login</SubmitButton>
          <p>
            <Link>Forgot your password?</Link>
          </p>
        </Section>
      </CenterWrap>
    </CardFrontContainer>
  );
};

export default CardFront;

const Link = styled.a`
  text-decoration: none;
  color: #ffeba7;
  cursor: pointer;

  &:hover {
    color: #c4c3ca;
  }
`;

const Section = styled.div`
  position: relative;
  width: fit-content;
  display: block;
  margin: 0 auto;
`;

const CardFrontContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2b2e38;
  position: absolute;
  border-radius: 6px;
  -webkit-transform-style: preserve-3d;
`;

const CenterWrap = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
`;

const Title = styled.h4`
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffeba7;
`;

const FormGroup = styled.div`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 13px 20px;
  padding-left: 55px;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #c4c3ca;
  background-color: #1f2029;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
  
  &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active{
    box-shadow: 0 0 0 30px #1f2029 inset !important;
    -webkit-text-fill-color: #c4c3ca;
  }
   
  
`;

const SubmitButton = styled.button`
  margin-bottom: 20px;
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  align-items: center;
  background-color: #ffeba7;
  color: #000000;

  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 5px;
  left: 14px;
  height: 48px;
  font-size: 28px;
  line-height: 48px;
  text-align: left;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  color: #ffeba7;
`;
