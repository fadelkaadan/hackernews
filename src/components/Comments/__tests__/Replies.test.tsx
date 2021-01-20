import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";

import Replies from "../Replies";

describe("Comment", () => {

  const commentIds = [12, 3324, 32, 434, 5643, 6];
  const commentId = [2921983];
  const replyIds = [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ];

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(<Replies data={commentIds} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render CommentsButton", () => {
    render(<Replies data={commentIds} />);
    const button: HTMLElement = screen.getByRole("button", {name: /replies/i});
    expect(button).toHaveTextContent(`${commentIds.length} replies`);
  });

  it("Should render CommentsButton's title correctly when there's one commentId inside", () => {
    render(<Replies data={commentId} />);
    const button: HTMLElement = screen.getByRole("button");
    expect(button).toHaveTextContent(`${commentId.length} reply`);
  });

  it("Should change title of replies button to hide when clicked", () => {
    render(<Replies data={replyIds} />);
    const button: HTMLElement = screen.getByRole("button", {name: /replies/i});
    userEvent.click(button);
    expect(button.textContent).toContain("hide");
  })

  it("Should show replies when button is clicked", async () => {
    render(<Replies data={replyIds} />);
    const button: HTMLElement = screen.getByRole("button", {name: /replies/i});
    userEvent.click(button);
    const authorOfFirstReply = await screen.findByRole('link', {name: /pchristensen/i});
    const authorOfSecondReply = await screen.findByRole('link', {name: /pstuart/i});
    expect(authorOfFirstReply).toBeInTheDocument();
    expect(authorOfSecondReply).toBeInTheDocument();
  });
});
