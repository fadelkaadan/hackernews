import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";

import Footer from "../index";

describe("Footer", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render Footer", () => {
    render(<Footer />);
    const contentInfo: HTMLElement = screen.getByRole("contentinfo");
    expect(contentInfo).toBeInTheDocument();
  });

  it("Should render link with a person's name", () => {
    render(<Footer />);
    const link: HTMLElement = screen.getByRole("link", {
      name: /Fadel Kaadan/i,
    });
    expect(link).toBeInTheDocument();
  });
});
