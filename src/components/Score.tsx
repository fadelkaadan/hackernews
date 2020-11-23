import React from "react";

interface ScoreProps {
  score: number;
}

const Score = ({ score }: ScoreProps) => {
  return (
    <div>
      <p>{score} points</p>
    </div>
  );
};

export default Score;
