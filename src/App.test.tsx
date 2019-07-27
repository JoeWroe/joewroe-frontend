import React from "react";

import { render } from '@testing-library/react';

import App from "./App";

it("renders a welcome message", () => {
	const { getByText } = render(<App />);
	
	const welcomeMessage = getByText("Learn React");

	expect(welcomeMessage).toBeInTheDocument();
});
