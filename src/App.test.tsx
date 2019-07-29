import React from "react";

import { render } from "@testing-library/react";

import App from "./App";

it("displays the application header", () => {
    const { getByText } = render(<App />);

    const headerText = getByText("Joe Wroe's Blog");

    expect(headerText).toBeInTheDocument();
});
