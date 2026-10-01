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

  getWeather() {
    const temperatures = [60, 70, 80, 90, 100];
    const index = Math.floor(Math.random() * temperatures.length);
    return temperatures[index];
  }

  getPrices() {
    return {
      cup: Number((Math.random() * 0.05 + 0.05).toFixed(2)),
      ice: Number((Math.random() * 0.10 + 0.10).toFixed(2)),
      lemon: Number((Math.random() * 0.20 + 0.20).toFixed(2)),
      sugar: Number((Math.random() * 0.15 + 0.15).toFixed(2))
    };
  }

  showDayInfo() {
    const weather = this.getWeather();
    const prices = this.getPrices();

    console.log(`Today's temperature: ${weather}°F`);
    console.log("Supply prices:");
    console.log(`Cup: $${prices.cup.toFixed(2)}`);
    console.log(`Ice: $${prices.ice.toFixed(2)}`);
    console.log(`Lemon: $${prices.lemon.toFixed(2)}`);
    console.log(`Sugar: $${prices.sugar.toFixed(2)}`);
  }
}

const stand = new LemonadeStand();

stand.showStatus();
console.log();
stand.showDayInfo();