import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  test("renders headline", function () {
    render(<div>Test</div>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
