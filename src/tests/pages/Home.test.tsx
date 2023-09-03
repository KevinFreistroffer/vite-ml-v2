import { describe, expect, test } from "vitest";
import { screen, waitFor, within } from "@testing-library/react";
import { customRender } from "../test-utils";

describe("Home", () => {
  // test home page is rendered
  test("renders home page", () => {
    customRender();
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });
});
