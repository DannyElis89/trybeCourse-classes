function calcula(num1, num2, num3) {
  return new Promise((resolve, reject) =>{
    if(typeof num1 != 'number' || typeof num2 != 'number' || typeof num3 != 'number') {
        return reject(new Error("Informe apenas números"));
      };

    const result = ((num1 + num2) * num3);

    result < 50
      ? reject(new Error("Valor muito baixo"))
      : resolve(result);
    });
};

const randomNumbers = () => Math.floor(Math.random() * 100 + 1);

// console.log(randomNumbers());

// calcula(randomNumbers(), randomNumbers(), randomNumbers())
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));


async function getRandomNumberes(){
  const num1 = randomNumbers();
  const num2 = randomNumbers();
  const num3 = randomNumbers();
  // console.log(num1, num2, num3);

  try {
    const result = await calcula(num1, num2, num3);
    console.log(result);
  } catch(err) {
    console.log(err.message);
  }

};

getRandomNumberes();
