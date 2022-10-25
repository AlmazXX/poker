import React, { useState } from "react";
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const dealCards = () => {
    const cardDeck = new CardDeck();
    const pokerHand = new PokerHand(cardDeck.getCards(5));
    setCards(pokerHand.hand);
    console.log(pokerHand.getOutcome());
  };

  const dealCardsBtn = <button onClick={dealCards}>Deal cards</button>;

  if (cards.length) {
    return (
      <div className="App">
        {dealCardsBtn}
        <div className="playingCards faceImages">
          <CardView rank={cards[0].rank} suit={cards[0].suit} />
          <CardView rank={cards[1].rank} suit={cards[1].suit} />
          <CardView rank={cards[2].rank} suit={cards[2].suit} />
          <CardView rank={cards[3].rank} suit={cards[3].suit} />
          <CardView rank={cards[4].rank} suit={cards[4].suit} />
        </div>
      </div>
    );
  }

  return dealCardsBtn;
}

export default App;