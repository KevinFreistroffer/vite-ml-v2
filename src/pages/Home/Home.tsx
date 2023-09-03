import PageLayout from "../../components/PageLayout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "styled-components";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import {
  StyledAlgorithmName,
  StyledCaption,
  StyledIcon,
  StyledOverlay,
  StyledSelection,
  StyledSelectionContainer,
} from "./styled";

export const Home = (): JSX.Element => {
  return (
    <PageLayout data-testid="home-page">
      <StyledCaption>Select an algorithm </StyledCaption>
      <StyledSelectionContainer>
        <StyledOverlay />
        {/* Linear Regression */}
        <StyledSelection>
          <StyledIcon>
            <EmojiObjectsIcon />
          </StyledIcon>
          <StyledAlgorithmName>Linear Regression</StyledAlgorithmName>
        </StyledSelection>
        {/* Logistic Regression */}
        <StyledSelection>
          <StyledIcon>
            <EmojiObjectsIcon />
          </StyledIcon>
          <StyledAlgorithmName>Logistic Regression</StyledAlgorithmName>
        </StyledSelection>
      </StyledSelectionContainer>
    </PageLayout>
  );
};
