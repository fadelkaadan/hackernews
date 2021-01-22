import React from "react";
import { render, screen, cleanup, RenderResult } from "../../../utilities/test-utils";
import Comments from "../";
import { IComment } from "../../../core/types";

describe("Comments", () => {
  afterEach(cleanup);

  const fakeContent = "Here is some content";
  const fakeContent2 = "Here is some content 2";

  const comments: IComment[] = [
    {
      by: "fadel",
      id: 1,
      kids: [1, 2, 3],
      parent: 12,
      text: fakeContent,
      time: 1,
      type: "comment",
    },
    {
      by: "adel",
      id: 2,
      kids: [4, 5, 6],
      parent: 22,
      text: fakeContent2,
      time: 2,
      type: "comment",
    },
  ];

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(
      <Comments data={comments} isPending={false} errorMessage={{}} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render Comments", () => {
    render(<Comments data={comments} isPending={false} errorMessage={{}} />);
    const authors: HTMLElement[] = screen.getAllByRole("link");
    expect(authors.length).toEqual(2);
    const content: HTMLElement = screen.getByText(fakeContent);
    expect(content.textContent).toEqual(fakeContent);
    const content2: HTMLElement = screen.getByText(fakeContent2);
    expect(content2.textContent).toEqual(fakeContent2);
    const buttons: HTMLElement[] = screen.getAllByRole("button");
    expect(buttons.length).toEqual(2);
  });

  it("Should render a loading indicator when content is loading", () => {
    const { container } = render(<Comments data={comments} isPending={true} errorMessage={{}} />);
    const authors: HTMLElement[] = screen.queryAllByRole("link");
    expect(authors.length).toBe(0);
    const loadingIndicator: SVGSVGElement | null = container.querySelector("svg");
    expect(loadingIndicator).toBeTruthy();
  });
});
