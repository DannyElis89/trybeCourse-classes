# Módulo 04 - Ciência da Computação
## Bloco 33: Padrões de Projeto
### Dia 02: Padrões - Iterator, Adapter, Strategy
#### Exercício 1:

**Exercício 1: Abaixo temos parte da implementação de um jogo do mundo de Star Wars. Porém, esse código está com um erro. Encontre-o e corrija-o sem alterar o código das classes de personagens (Soldier e Jedi).**


**Exercício 2: Dado o código de um baralho e suas cartas, você deve transformá-lo em um iterador sequencial que fornece as cartas em sua ordem tradicional, começando de `<A de copas>` até `<K de paus>`.**


**Exercício 3: Com o baralho tradicional pronto, implemente uma subclasse de Baralho chamada BaralhoInverso, que produz um iterador para fornecer as cartas na ordem inversa. Ou seja, sem embaralhar, a primeira carta deve ser o `<K de paus>` em vez do `<A de copas>`, como acontece na implementação atual.**

**Exercício 4: Agora que você tem duas formas diferentes de dar cartas para o seu baralho, refatore o código para não precisar mais de dois baralhos e dois iteradores isolados, mas sim usar um único iterador com duas estratégias diferentes de iteração.**

**Exercício 5: Você tem a implementação de uma classe capaz de renderizar imagens através de uma interface que utiliza o método `draw`. Porém, no momento ela só suporta formato PNG e você também precisa ser capaz de renderizar imagens em SVG. Altere o código, sem modificar a classe `SvgImage`, para que isso seja possível.**

**Exercício 6: Você está trabalhando em um sistema de orçamentos que faz cálculos de impostos e precisa ser refatorado para adicionar novos, que no caso são o `PIS` (0,65%) e o `COFINS` (3%). Mas durante a refatoração, você se depara com uma má prática de código. Encontre essa má prática e a solucione em conjunto com a refatoração.**
