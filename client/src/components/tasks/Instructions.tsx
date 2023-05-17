import React from 'react'
import styled from 'styled-components';

const Instructions = () => {
  return (
    <>
        <Container>
            <Paragraph>Язык Python разработал голландский программист Гвидо Ван Россум (Guido van Rossum) в 1991 году. Гвидо был фанатом британского комедийного сериала «Monty Python’s Flying Circus», откуда и пришло название языка.</Paragraph>
            <Paragraph>Давайте научим нашу программу писать сообщения и отображать их на экран!
                        Выбрав среду программирования, без лишних раздумий и колебаний создаем новый файл .py, пишем свою первую программу:</Paragraph>
            <Paragraph>print(“Hello world”)</Paragraph>
            <Paragraph>После ее запуска будет выведено сообщение: Hello world.</Paragraph>
            <Hr/>
        
        </Container>
    </>
  )
}

export default Instructions

const Container = styled.div`
    overflow: scroll;
    overflow-x:hidden;
    
    background: #1f1f22;
    width: 750px;
    height: 800px;
    
    border-radius: 10px;
    margin-top: 10px;
    padding: 10px 15px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        background: #1f1f22;
    }
    &::-webkit-scrollbar-thumb {
        background: #111;
        
        border-radius: 8px;
    }
`

const Paragraph = styled.p`
    padding: 5px 0;
    text-align: justify;
`

const Hr = styled.hr`
    display: block;
    height: 1px;
    background: #213336;
    background-position: center center;
    background-size: 100% 1px;
    border-color: transparent;
`