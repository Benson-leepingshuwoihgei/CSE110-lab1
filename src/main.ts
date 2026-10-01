import * as readline from "readline";

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

  buySupplies(
    cups: number,
    ice: number,
    lemons: number,
    sugar: number,
    prices: { cup: number; ice: number; lemon: number; sugar: number }
  ) {
    const totalCost =
      cups * prices.cup +
      ice * prices.ice +
      lemons * prices.lemon +
      sugar * prices.sugar;

    if (totalCost > this.cash) {
      console.log("You do not have enough cash.");
      return;
    }

    this.cash -= totalCost;
    this.cups += cups;
    this.ice += ice;
    this.lemons += lemons;
    this.sugar += sugar;

    console.log(`You spent $${totalCost.toFixed(2)}.`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  const stand = new LemonadeStand();

  const weather = stand.getWeather();
  const prices = stand.getPrices();

  console.log(`Today's temperature: ${weather}°F`);
  console.log("Supply prices:");
  console.log(`Cup: $${prices.cup.toFixed(2)}`);
  console.log(`Ice: $${prices.ice.toFixed(2)}`);
  console.log(`Lemon: $${prices.lemon.toFixed(2)}`);
  console.log(`Sugar: $${prices.sugar.toFixed(2)}`);

  const cups = Number(await askQuestion("How many cups do you want to buy? "));
  const ice = Number(await askQuestion("How much ice do you want to buy? "));
  const lemons = Number(await askQuestion("How many lemons do you want to buy? "));
  const sugar = Number(await askQuestion("How much sugar do you want to buy? "));

  stand.buySupplies(cups, ice, lemons, sugar, prices);

  console.log();
  stand.showStatus();

  rl.close();
}

main();