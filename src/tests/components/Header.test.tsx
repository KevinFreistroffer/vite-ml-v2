import { describe, expect, test } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Root from "../../pages/Root";
import {
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
  createMemoryRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LogisticRegression from "../../pages/LogisticRegression";
import LinearRegression from "../../pages/LinearRegression";
import Error from "../../pages/Error";
import Home from "../../pages/Home";

describe("Header", () => {
  test("renders headline, nav items, and nav items navigate to expected pages", async function () {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Root />} errorElement={<Error />}>
            <Route index element={<Home />} />
            <Route path="linear-regression" element={<LinearRegression />} />
            <Route
              path="logistic-regression"
              element={<LogisticRegression />}
            />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const getHeader = () => screen.getByTestId("app-header");
    const getNavItems = () => within(getHeader()).getAllByRole("link");

    expect(getNavItems()).toHaveLength(2);
    expect(
      within(getHeader()).getByText("ML With TensorFlow", { exact: false })
    ).toBeInTheDocument();
    expect(getNavItems()[0]).toHaveTextContent("Linear Regression");
    expect(getNavItems()[1]).toHaveTextContent("Logistic Regression");

    // Select the "Linear Regression" nav item
    userEvent.click(getNavItems()[0]);
    await waitFor(() => {
      expect(screen.getByTestId("linear-regression-page")).toBeInTheDocument();
    });

    // Header nav items updates
    expect(getNavItems()).toHaveLength(2);
    expect(getNavItems()[0]).toHaveTextContent("Home");
    expect(getNavItems()[1]).toHaveTextContent("Logistic Regression");
    // Select the "Logistic Regression" nav item
    userEvent.click(getNavItems()[1]);
    await waitFor(() => {
      expect(
        screen.getByTestId("logistic-regression-page")
      ).toBeInTheDocument();
    });

    // Header nav items updates
    expect(getNavItems()).toHaveLength(2);
    expect(getNavItems()[0]).toHaveTextContent("Home");
    expect(getNavItems()[1]).toHaveTextContent("Linear Regression");
    // Select the "Home" nav item
    userEvent.click(getNavItems()[0]);
    await waitFor(() => {
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });
    // Header nav items updates
    expect(getNavItems()).toHaveLength(2);
    expect(getNavItems()[0]).toHaveTextContent("Linear Regression");
    expect(getNavItems()[1]).toHaveTextContent("Logistic Regression");
  });
});
