import React from "react";

import { render } from "@testing-library/react";

import Header from "./Header";

it("Contains the title message", () => {
    const { getByText } = render(<Header />);

    const titleMessage = getByText("Joe Wroe's Blog");

    expect(titleMessage).toBeInTheDocument();
});
