import React from "react";
import { render, rerender } from "@testing-library/react";
import Display from "./Display";

test("display locked if true", () => {
  const { getByText, rerender } = render(<Display locked={true} />);
  getByText(/^locked$/i);

  rerender(<Display locked={false} />);
  getByText(/^unlocked$/i);
});

test("display closed if true", () => {
  const { getByText, rerender } = render(<Display closed />);
  getByText(/^closed$/i);

  rerender(<Display closed={false} />);
  getByText(/^open$/i);
});
