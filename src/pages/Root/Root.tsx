import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = styled.main`
  // display: flex;
  width: 100%
  height: 100%;
  // flex-direction: column;
  // align-items: center;
  // justify-content: flex-start;
`;

export const Root = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};
