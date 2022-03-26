const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// console.log(randomNum(0, 100));

module.exports = { randomNum };
