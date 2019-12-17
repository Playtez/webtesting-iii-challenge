import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";

test("does control render", () => {
  render(<Controls />);
});

// test("the closed toggle button is disabled if the gate is locked", () => {
//   const { getByText, findByText } = render(<Controls  />);
// });
