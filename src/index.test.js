import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./dashboard/Dashboard";

test("testing if dashboard renders", () => {
  render(<Dashboard />);
});
