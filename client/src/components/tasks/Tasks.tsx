import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../sidebar/Sidebar';
import HeaderUser from '../header/HeaderUser';
import { FaPlay } from 'react-icons/fa';
import Instructions from './Instructions';

const Tasks = () => {
    return (
        <>
            <HeaderUser />
            <HeaderNav />
            <Container>
                <SpanHeader>Обучение</SpanHeader>
                <ContainerTitle>
                    <TitleIcon>
                        <FaPlay />
                    </TitleIcon>
                    <Title>Задание 1 Знакомство с Python, написание первого кода на языке прогроммирования.</Title>
                </ContainerTitle>
                <ContainerBtn>
                    <Instruct>Инструкция</Instruct>
                    <Exit>Выход</Exit>
                </ContainerBtn>
                <Instructions/>
            </Container>
        </>
    );
};

export default Tasks;

const Container = styled.div`
padding: 0 100px;
`;

const ContainerTitle = styled.div`
    display: flex;
    gap: 1rem;
    margin: 10px 0;
`;

const TitleIcon = styled.div`
    color: #fff;
    margin-top: 5px;
`;

const Title = styled.div`
    color: #fff;
    font-size: 20px;
`;

const ContainerBtn = styled.div`
    display: flex;
    gap: 1rem;
    font-weight: 600;
`;

const Instruct = styled.div`
background: #1f1f22;
padding: 5px 10px;
border-radius: 5px;
`;

const Exit = styled.div`
background: rgba(0, 0, 0, 0.4);
padding: 5px 10px;
border-radius: 5px;
cursor: pointer;
&:hover {
    background: #1f1f22;
}
`;

const SpanHeader = styled.div`
    width: max-content;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    padding: 10px;
    
    border-radius: 5px;
`;
