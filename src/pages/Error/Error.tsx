import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const Error = (): JSX.Element => {
  return (
    <Container>
      <h1>Error</h1>
      <StyledLink to="/">Go Home</StyledLink>
    </Container>
  );
};
