import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App, { text } from "./App";

test("displays text", () => {
  const { getByText } = render(<App />);

  expect(getByText(text)).toBeInTheDocument();
});
