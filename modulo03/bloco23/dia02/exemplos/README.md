# Bloco 23: Node.js: Camada de Serviço e Arquitetura Rest e Restful
## Dia 02: Arquitetura de Software - Camada de Controller e Service

![“Organização das Camadas MSC](https://assets.app.betrybe.com/back-end/architecture/msc/msc-part-2/images/architecture_layers-ea1a7edbd08e7a7648a207cacbbadbd1.png)

### Controller:
* Recebe e trata os dados da *Requisição*;
* Recebe as requisições feitas à API e então consulta o *service*, enviando na resposta aquilo que o service deve retornar: uma mensagem de erro (em caso de falha) ou as informações pedidas (em caso de sucesso).
* Ao se comunicar com o *service*, o controller não deve passar toda a *request*, ou seja, as informações devem ser extraídas e apenas o que for necessário para determinada ação deve ser transferido.

### Service:
* Situada entre as camadas de *Controller* e *Model*;
* Aplica as *regras de negócio* da aplicação antes que qualquer comunicação com o banco seja realizada;
* Centraliza o acesso a dados e funções externas;
* Abstrai *regras de negócio* complexas do modelo;

#### Regras de negócio:
* Validações e definições de processos que uma aplicação deve seguir para que seja realizada a tarefa determinada para o sistema;
* Regras de negócio simples:
  * *São regras como "não é possível cadastrar um produto que o nome tenha menos de 5 letras; "não é possível cadastrar um produto que já exista ou "só é permitido listar todos os usuários sendo administrador".*
* Regras de negócio complexas:
  * *São regras como "só é possível vender produtos que tenham estoque" ou "não é permitido parcelar compras em mais de 5x para valores abaixo de R$ 100,00".*

### Exemplos:
