import React from "react";
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {
  const cardDeck = new CardDeck();
  const card = cardDeck.getCard();
  console.log(card.getScore());
  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank={card.rank} suit={card.suit}/>
      </div>
    </div>
  );
}

export default App;