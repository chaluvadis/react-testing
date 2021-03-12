import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UserComponent from "../../containers/user/index";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a name", () => {
    act(() => {
        render(<UserComponent />, container);
    });
    expect(container.textContent).toBe("Hello, Stranger");
    act(() => {
        render(<UserComponent name={"John"} />, container);
    });
    expect(container.textContent).toBe("Hello, John !");
});