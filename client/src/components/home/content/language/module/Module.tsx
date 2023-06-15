import React from "react";
import styled from "styled-components";
import { IModule } from "../../../../../redux/ducks/tasks/interfaces";
import TaskBlock from "./taskBlock/TaskBlock";
import Theme from "./theme/Theme";


interface Props {
  modules: IModule[] | undefined;
}

const Module = ({modules}: Props) => {

  return (
    <Container>
      {modules?.map((el) => (
        <TaskBlock
          title={el.title}
          child={
            <Theme
              description={el.description}
              tasks={el.tasks}
              lang_id={el.lang_id}
            />
          }
        />
      ))}
    </Container>
  );
};

export default Module;

const Container = styled.div`
  width: 1200px;
  margin: 100px auto 0;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 15px;
`;
