import React from "react";
import { render, RenderResult } from "../../../utilities/test-utils";

import LoadingIndicator from "../index";

describe("LoadingIndicator", () => {
  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<LoadingIndicator />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render LoadingIndicator", () => {
    const { container }: RenderResult = render(<LoadingIndicator />);
    const icon = container.querySelector("svg");
    expect(icon).toBeDefined();
  });
});
