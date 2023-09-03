import { render, within, screen } from "@testing-library/react";

import Error from "../pages/Error";
import Home from "../pages/Home";
import LinearRegression from "../pages/LinearRegression";
import LogisticRegression from "../pages/LogisticRegression";
import Root from "../pages/Root";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export const customRender = (options?: any) => {
  const ui = (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="linear-regression" element={<LinearRegression />} />
          <Route path="logistic-regression" element={<LogisticRegression />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
  render(ui, { ...options });
};

export const getHeader = () => screen.getByTestId("app-header");
export const getNavItems = () => within(getHeader()).getAllByRole("link");

// re-export everything
export * from "@testing-library/react";
