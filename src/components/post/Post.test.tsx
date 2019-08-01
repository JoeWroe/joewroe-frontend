import React from "react";

import {
    cleanup,
    render,
    waitForElement
} from "@testing-library/react";
import axios from "axios";

import Post from "./Post";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(cleanup);

it("Should load post on render", async () => {
    mockedAxios.get.mockResolvedValue({ data: { body: "Some interesting blog post text", title: "Posty McPostface" } });
    
    const { getByText } = render(<Post />);

    expect(mockedAxios.get).not.toHaveBeenCalled;

    const postTitle = await waitForElement(() => getByText("Posty McPostface"));
    const postBody = await waitForElement(() => getByText("Some interesting blog post text"));

    expect(postTitle).toBeVisible();
    expect(postBody).toBeVisible();
});
