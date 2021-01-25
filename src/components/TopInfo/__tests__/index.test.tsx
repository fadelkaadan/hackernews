import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";
import TopInfo from "../";

describe("TopInfo", () => {
  const topInfo = {
    author: "fadel",
    time: 1587682800,
    score: 123,
  };

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(
      <TopInfo
        author={topInfo.author}
        time={topInfo.time}
        score={topInfo.score}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render top info", () => {
    render(
      <TopInfo
        author={topInfo.author}
        time={topInfo.time}
        score={topInfo.score}
      />
    );
    const time: HTMLElement = screen.getByText(/ago/i);
    expect(time).toBeInTheDocument();

    const author: HTMLElement = screen.getByRole("link", {
      name: topInfo.author,
    });
    expect(author).toBeInTheDocument();

    const score: HTMLElement = screen.getByText(`${topInfo.score}`);
    expect(score).toBeInTheDocument();
  });
});
