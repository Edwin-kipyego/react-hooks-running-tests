import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
test("renders a paragraph element", () => {
  render(<Article />);
  const paragraphElement = screen.getByText("please pass this test");
  expect(paragraphElement.tagName).toBe("P");
});

test("renders the correct text content", () => {
  render(<Article />);
  expect(screen.getByText("please pass this test")).toHaveTextContent("please pass this test");
});

test("renders a div as the parent element", () => {
  render(<Article />);
  const parentDiv = screen.getByText("please pass this test").parentElement;
  expect(parentDiv.tagName).toBe("DIV");
});
