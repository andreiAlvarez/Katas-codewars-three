//Kata 1

const gearInchCalculator = (chainrings, sprockets) => chainrings.map(c =>
    sprockets.map(sprocket => Math.round(+((26 * c) / sprocket) * 10) / 10)
  );

//Kata 2

const gatesCalculator = (num1, num2) => `%${(num1 / num2) * 100}`;
