import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";

import ThemePreferences from "../ThemePreferences";

describe("ThemePreferences", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<ThemePreferences />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render 3 preference buttons", () => {
    render(<ThemePreferences />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBe(2);
  });
});
