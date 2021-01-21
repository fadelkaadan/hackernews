import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";
import Content from "../Content";
import { IComment } from "../../../core/types";

describe("Comment content", () => {
  const fakeContent = "Here is some content";
  const fakeContentHTML =
    "<p>Here <span>is</span> some content with <italic>html elements</italic></p>";

  const comment: IComment = {
    by: "fadel",
    id: 1,
    kids: [1, 2, 3],
    parent: 1,
    text: fakeContent,
    time: 1,
    type: "comment",
  };

  const commentHTML: IComment = {
    by: "fadel",
    id: 1,
    kids: [1, 2, 3],
    parent: 1,
    text: fakeContentHTML,
    time: 1,
    type: "comment",
  };

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Content data={comment} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render normal text", () => {
    render(<Content data={comment} />);
    const content: HTMLElement = screen.getByText(fakeContent);
    expect(content.textContent).toEqual(fakeContent);
  });

  it("Should render html elements", () => {
    const { container }: RenderResult = render(<Content data={commentHTML} />);
    const span = container.querySelector("span");
    expect(span).toBeDefined();
  });
});
