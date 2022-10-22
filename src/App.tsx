import React from "react";
import CardView from "./CardView/CardView";

function App() {
  return (
    <div className="App">
      <div className="playingCards faceImages">
        <CardView rank="K" suit="hearts"/>
      </div>
    </div>
  );
}

export default App;
