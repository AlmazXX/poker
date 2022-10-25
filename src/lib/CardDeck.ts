import Card from "./Card";

class CardDeck {
  constructor(
    public cards: Card[] = [],
    private suits: string[] = ["diams", "hearts", "clubs", "spades"],
    private ranks: string[] = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ]
  ) {
    this.suits.forEach(suit => {
      this.ranks.forEach(rank => {
        const card = new Card(suit, rank);
        this.cards.push(card);
      });
    });
  }

  getCard() {
    const randFrom = (number: number) => Math.floor(Math.random() * number);
    return this.cards.splice(randFrom(this.cards.length), 1)[0];
  }

  getCards(howMany: number) {
    const result: Card[] = [];
    for (let i = 0; i < howMany; ++i) {
      result.push(this.getCard())
    }
    return result;
  }
}

export default CardDeck;