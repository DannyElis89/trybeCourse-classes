const upperCase = (string) => {
  return string.toUpperCase();
};

const firstLetter = (string) => {
  return string[0];
}

const concatString = (string1, string2) => {
  return `${string1}${string2}`;
}


// console.log(upperCase('danny'));
// console.log(firstLetter('danny'));
// console.log(concatString('danny', 'elis'));

module.exports = {
  upperCase,
  firstLetter,
  concatString,
};
