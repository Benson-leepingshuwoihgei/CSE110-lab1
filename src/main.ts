class LemonadeStand {
  cash: number;
  cups: number;
  ice: number;
  lemons: number;
  sugar: number;

  constructor() {
    this.cash = 20;
    this.cups = 0;
    this.ice = 0;
    this.lemons = 0;
    this.sugar = 0;
  }

  showStatus() {
    console.log(`Cash: $${this.cash.toFixed(2)}`);
    console.log(`Cups: ${this.cups}`);
    console.log(`Ice: ${this.ice}`);
    console.log(`Lemons: ${this.lemons}`);
    console.log(`Sugar: ${this.sugar}`);
  }
}

const stand = new LemonadeStand();
stand.showStatus();