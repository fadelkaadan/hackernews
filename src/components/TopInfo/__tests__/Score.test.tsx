import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";
import Score from "../Score";

describe("Score", () => {
  const count = 123;

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Score count={count} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render score number", () => {
    render(<Score count={count} />);
    const author: HTMLElement = screen.getByText(`${count}`);
    expect(author).toBeInTheDocument();
  });

  it("Should render score icon", () => {
    const { container }: RenderResult = render(<Score count={count} />);
    const userIcon = container.querySelector("svg");
    expect(userIcon).toBeDefined();
  });

});
