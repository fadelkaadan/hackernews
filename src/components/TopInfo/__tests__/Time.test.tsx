import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";
import Time from "../Time";

describe("Time", () => {
  const timeAgo = 1587682800;

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Time time={timeAgo} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render time", () => {
    render(<Time time={timeAgo} />);
    const time: HTMLElement = screen.getByText(/ago/i);
    expect(time).toBeInTheDocument();
  });

  it("Should render time icon", () => {
    const { container }: RenderResult = render(<Time time={timeAgo} />);
    const icon = container.querySelector("svg");
    expect(icon).toBeDefined();
  });
});
