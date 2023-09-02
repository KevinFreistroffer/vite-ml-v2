import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("renders headline", () => {
    render(<h1>Hello World</h1>);
  });
});
