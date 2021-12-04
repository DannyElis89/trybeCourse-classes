// 05 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//    Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//    Um ângulo será considerado inválido se não tiver um valor positivo.


function anguloTriangulo(x, y, z){
  return x + y + z === 180;
};

const lado1 = 45;
const lado2 = 45;
const lado3 = 90;
console.log('É um triângulo? ' + anguloTriangulo(lado1, lado2, lado3));


