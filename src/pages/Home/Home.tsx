import PageLayout from "../../components/PageLayout";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

export const Home = (): JSX.Element => {
  return (
    <PageLayout data-testid="home-page">
      <Typography variant="h2" gutterBottom color={"secondary"}>
        Select an algorithm
      </Typography>
      <div>
        <Button
          size="large"
          variant="outlined"
          sx={{ mr: 1 }}
          color="secondary"
        >
          <Link to="/linear-regression">Linear Regression</Link>
        </Button>
        <Button size="large" variant="outlined" sx={{ mr: 1 }}>
          <Link to="/logistic-regression">Logistic Regression</Link>
        </Button>
      </div>
      {/* <StyledSelectionContainer>
        <StyledOverlay />
        <StyledSelection>
          <StyledIcon>
            <EmojiObjectsIcon />
          </StyledIcon>
          <StyledAlgorithmName>Linear Regression</StyledAlgorithmName>
        </StyledSelection>
        <StyledSelection>
          <StyledIcon>
            <EmojiObjectsIcon />
          </StyledIcon>
          <StyledAlgorithmName>Logistic Regression</StyledAlgorithmName>
        </StyledSelection>
      </StyledSelectionContainer> */}
    </PageLayout>
  );
};
