import React from "react";

interface CardViewProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardViewProps> = (props) => {
  const selector = `card rank-${props.rank.toLowerCase()} ${props.suit}`;
  let suit = "";
  switch (props.suit) {
    case "diams":
      suit = "♦";
      break;
    case "hearts":
      suit = "♥";
      break;
    case "clubs":
      suit = "♣";
      break;
    case "spades":
      suit = "♠";
      break;
  }

  return (
    <span className={selector}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{suit}</span>
    </span>
  );
};

export default CardView;
