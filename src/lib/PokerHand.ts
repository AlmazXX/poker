import Card from "./Card";
class PokerHand {
  constructor(public hand: Card[]) {}

  isFlush(): boolean {
    const suit = this.hand[0].suit;
    return this.hand.every((card) => card.suit === suit);
  }
  hasPairs() {
    const tally: { [rank: string]: number } = {};
    this.hand.forEach((card) => {
      const rank = card.rank;
      tally[rank] = (tally[rank] || 0) + 1;
    });

    return Object.values(tally);
  }
  isStraight() {
    let high: number;
    let low: number;
    const scores: number[] = [];
    high = low = this.hand[0].getScore();

    for (let i = 0; i < this.hand.length; ++i) {
      const score = this.hand[i].getScore();
      if (scores.indexOf(score) !== -1) {
        return false;
      }

      scores.push(score);

      if (high < score) high = score;
      if (low > score) low = score;
    }

    if (
      scores.includes(14) &&
      scores.includes(2) &&
      scores.includes(3) &&
      scores.includes(4) &&
      scores.includes(5)
    ) {
      low = 1;
      high = 5;
    }
    return high - low === 4;
  }

  getOutcome() {
    if (this.isFlush() && this.isStraight()) {
      let royalCounter = 0;
      const isRoyal = this.hand.some((card) => {
        const rank = card.rank;
        if (rank === "A" || rank === "K") royalCounter++;

        return royalCounter === 2;
      });

      if (isRoyal) {
        return "You have Royal Flush!";
      } else {
        return "You have Straight Flush!";
      }
    }

    const pairs = this.hasPairs();

    if (pairs.length === 2) {
      if (pairs.includes(4)) {
        return "You have Four of a kind!";
      } else {
        return "You have Full house!";
      }
    }

    if (this.isFlush()) return "You have Flush!";

    if (this.isStraight()) return "You have Straight!";

    if (pairs.length === 3) {
      if (pairs.includes(3)) {
        return "You have Three of a kind!";
      } else {
        return "You have Two pairs";
      }
    }

    if (pairs.length === 4) return "You have a pair";

    return "You have nothing";
  }
}

export default PokerHand;