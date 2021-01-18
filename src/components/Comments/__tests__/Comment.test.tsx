import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";
import Comment from "../Comment";
import { IComment } from "../../../core/types";

describe("Comment", () => {

  const fakeContent = "Here is some content";

  const comment: IComment = {
    by: "fadel",
    id: 1,
    kids: [1, 2, 3],
    parent: 1,
    text: fakeContent,
    time: 1,
    type: "comment",
  };

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Comment data={comment} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render TopInfo", () => {
    render(<Comment data={comment} />);
    const author: HTMLElement = screen.getByText(comment.by);
    expect(author.textContent).toEqual(comment.by);
  });

  it("Should render Content", () => {
    render(<Comment data={comment} />);
    const content: HTMLElement = screen.getByText(fakeContent);
    expect(content.textContent).toEqual(fakeContent);
  });
});
