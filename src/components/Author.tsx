import React from "react";

interface AuthorProps {
  name: string;
}

const Author = ({ name }: AuthorProps) => {
  return (
    <div>
      <p>by {name}</p>
    </div>
  );
};

export default Author;
