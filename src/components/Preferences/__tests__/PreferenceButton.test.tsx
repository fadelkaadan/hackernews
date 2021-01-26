import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";

import PreferencesButton from "../PreferencesButton";

describe("PreferencesButton", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<PreferencesButton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render PreferencesButton", () => {
    render(<PreferencesButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
