import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export const Error = (): JSX.Element => {
  return (
    <Container>
      <h1>Error</h1>
      <Link to="/">Go Home</Link>
    </Container>
  );
};
