import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import App, {text} from "./App";

test("text renders correctly", async () => {
    const { getByText } = render(<App />)

    expect(getByText(text)).toBeInTheDocument();
});
