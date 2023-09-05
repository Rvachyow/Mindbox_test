import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "../app/App";

test("Renders the main page", () => {
  render(<App />);
  const wrapper = screen.getByText("todos");

  expect(wrapper).toBeInTheDocument();
});
