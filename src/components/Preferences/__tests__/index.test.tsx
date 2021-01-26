import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";

import Preferences from "../";

describe("Preferences", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Preferences />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render PreferencesButton", () => {
    render(<Preferences />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
