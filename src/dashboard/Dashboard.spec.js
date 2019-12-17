import React from "react";
import { render } from "@testing-library/react";
import Display from "../display/Display";
import Controls from "../controls/Controls";

test("shows the controls and display", () => {
  render(<Display />, <Controls />);
});

test("locked is false and closed is false", () => {});
