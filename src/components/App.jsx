import React from 'react';
import styled from "styled-components";
import {Title} from "./Title";
import {Flex} from "./Flex";
import {Console} from "./Console";
import {Button} from "./Button";


const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background-color: black;
color: white;`

export const App = () => {
  return(
      <AppWrapper>
          <Flex just={"center"}>
              <Title color={"red"}>
                  Console cmd LINCODE. 2024
              </Title>
          </Flex>
          <Flex direction="column" margin="40px 0 0 0">
              <Console />
              <Button align="flex-end" outline color={"green"}>
                  Отправить
              </Button>
          </Flex>
      </AppWrapper>
  )
}