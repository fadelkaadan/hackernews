import React from "react";
import { render, screen, RenderResult } from "../../../utilities/test-utils";
import { faReply } from "@fortawesome/free-solid-svg-icons";

import CommentsButton from "../CommentsButton";

describe("CommentsButton", () => {
  const commentIds = [
    2922097,
    2922429,
    2924562,
    2922709,
    2922573,
    2922140,
    2922141,
  ];

  it("Should match the snapshot", () => {
    const { container }: RenderResult = render(
      <CommentsButton
        comments={commentIds}
        isOpen={false}
        onClick={() => {}}
        label={"replies"}
        icon={faReply}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Should render CommentsButton", () => {
    render(
      <CommentsButton
        comments={commentIds}
        isOpen={false}
        onClick={() => {}}
        label={"replies"}
        icon={faReply}
      />
    );
    const button: HTMLElement = screen.getByRole("button", {
      name: /replies/i,
    });
    expect(button).toHaveTextContent(`${commentIds.length} replies`);
  });
});
