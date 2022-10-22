class Card {
  constructor(
    public suit: string,
    public rank: string,
  ) {}

  getScore() {
    if (this.rank === 'K' || this.rank === 'Q' || this.rank === 'J') {
      return 10;
    } else if (this.rank === 'A') {
      return 11
    } else {
      return parseInt(this.rank);
    }
  }
}

export default Card;