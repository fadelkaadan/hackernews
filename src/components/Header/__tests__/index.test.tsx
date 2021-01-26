import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";

import Header from "../index";

describe("Header", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render Header", () => {
    render(<Header />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("Should render Preferences button", () => {
    render(<Header />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
