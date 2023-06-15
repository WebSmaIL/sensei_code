import React from 'react'
import styled from 'styled-components';

const Instructions = () => {
  return (
    <>
        <Container>
            <Paragraph>Print работает с круглыми скобками. Вот корректный синтаксис: <Code>print()</Code></Paragraph>
            <Paragraph>Если нужно вывести текст, то его необходимо заключить в скобки: <Code>print("Hello World")</Code>.</Paragraph>
            <Paragraph>Символ <Code>#</Code> используется для добавления комментариев в текст. Эти комментарии не выполняются и не выводятся. Они выступают всего лишь заметками для тех, кто работает с кодом.</Paragraph>
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

const Code = styled.code`
    background: #97959519;
    font-size: 16px;
    padding: 2px 5px;
`