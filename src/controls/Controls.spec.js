import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("does control render", () => {
  render(<Controls />);
});

test("Provides buttons to toggle the closed and lock states", () => {
  const { getByText, rerender } = render(<Controls closed locked />);
  getByText(/unlock gate/i);
  getByText(/open gate/i);

  rerender(<Controls closed={false} locked={false} />);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

test("Button text changes to reflect the open or closed gate state when clicked", () => {
  const { getByText, findByText, rerender } = render(
    <Controls closed={false} />
  );
  const button = getByText(/close gate/i);
  fireEvent.click(button);
  findByText(/open gate/i);

  rerender(<Controls closed />);

  fireEvent.click(button);
  findByText(/close gate/i);
});
