import React from "react";
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {
  const card = new Card('hearts', 'A')
  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank={card.rank} suit={card.suit}/>
      </div>
    </div>
  );
}

export default App;
