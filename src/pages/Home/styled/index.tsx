import styled from "styled-components";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

export const StyledCaption = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const StyledSelectionContainer = styled.div`
  position: relative;
  width: 70%;
  height: 70vh;
  min-height: 450px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid grey;
  border-radius: 0.25rem;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  opacity: 0.5;
`;

export const StyledSelection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  transition: all 0.1s linear;
  z-index: 10;
  background-color: #f5f5f5;

  &:first-child {
  }

  &:last-child {
    background-color: #e0e0e0;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const StyledAlgorithmName = styled.p`
  position: relative;
  z-index: 2;
  font-weight: bold;
  font-size: 3rem;
`;

export const StyledIcon = styled(EmojiObjectsIcon)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  color: blue;
`;
