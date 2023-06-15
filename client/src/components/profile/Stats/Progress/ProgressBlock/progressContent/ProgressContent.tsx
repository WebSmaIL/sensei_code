import React from 'react'
import styled from 'styled-components'



const ProgressContent = () => {
  return (
    <Container>
        <ContainerContent>
            <Title>Статистика:</Title>
            <Text>Ранг: 1</Text>
            <Text>Обучающие задания: 0</Text>
            <Text>Авторские задания: 1</Text>
        </ContainerContent>

        <ContainerContent>
            <Title>Язык:</Title>
            <Text>Всего изучаемых языков: 1</Text>
            <Text>Обучение: 0</Text>
            <Text>Последний язык: JavaScript</Text>
        </ContainerContent>

        <ContainerContent>
            <Title>Обучение:</Title>
            <Text>Python: 0</Text>
            <Text>JavaScript: 0</Text>
            <Text>C++: 0</Text>
        </ContainerContent>
    </Container>
  )
}

export default ProgressContent

const Container = styled.div`
    
    display:grid ;
    grid-template-columns: 400px 1fr 300px;
    
`

const ContainerContent = styled.div`
    
`

const Text = styled.p`
    padding-bottom: 5px ;
`

const Title = styled.h2`
    padding-bottom: 10px;
`