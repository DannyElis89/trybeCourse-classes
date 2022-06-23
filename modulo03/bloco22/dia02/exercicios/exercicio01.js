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

calcula(10, 20, 30)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));

calcula('a', 10, 20)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));
