import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
const Python = () => {
  return (
    <>
    
      <Container>
        <Title>Начинай свой путь программиста на Python, с каждым прохождение задачи уровень сложности возрастает.</Title>
        <Title>Выбор задания:</Title>
        <Tasks>
          <Number to='/task1'>
            <NumberText>1</NumberText>
            <Description>Знакомство с Python, написание первого кода на языке прогроммирования.</Description>
          </Number>

          <Number to='/task2'>
            <NumberText>2</NumberText>
            <Description>Создание первого калькулятора с сложение, вычитание, умножение и делением. Создаем проверку на деление на 0.</Description>
          </Number>
        </Tasks>
      </Container>
    </>
  )
}

export default Python

const Container = styled.div`
  width: 1200px;
  height: max-content;
  background: rgba(0, 0, 0, 0.4);
  margin: 50px auto;
  border-radius: 15px;
  padding: 0 50px;
  padding: 0 0 50px;
  
`

const Title = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 20px 0px;
`

const Tasks = styled.div`

`

const Number = styled(NavLink)`
  display: grid;
  grid-template-columns: max-content 1fr;
  text-decoration: none;
  margin: 10px 20px;
  padding: 10px 10px;
  background: #222;
  border-radius: 5px;
  transition: all 500ms ease;
  cursor: pointer;
  &:hover {
    background: #333;
  }
`

const NumberText = styled.span`
height: 45px;
  background: #306988;
  font-size: 25px;
  font-weight: 700;
  padding: 5px 15px;
  
  border-radius: 10px;
  color: #FFD43B;
`

const Description = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 10px;
`