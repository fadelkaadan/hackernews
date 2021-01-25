import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";
import Author from "../Author";

describe("Author", () => {
  const name = "fadel";

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Author name={name} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render author name", () => {
    render(<Author name={name} />);
    const author: HTMLElement = screen.getByRole("link", {name: name});
    expect(author).toBeInTheDocument();
  });

  it("Should render author name", () => {
    const { container }: RenderResult = render(<Author name={name} />);
    const userIcon = container.querySelector("svg");
    expect(userIcon).toBeDefined();
  });

});
