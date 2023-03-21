# Projeto TING (Trybe is not Google)!

<summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br/>

Neste projeto, foi implementado um programa que simula um algoritmo de indexação de documentos semelhante ao utilizado pelo Google. O programa tem como objetivo identificar ocorrências de termos em arquivos no formato TXT.

Para alcançar esse objetivo, o programa desenvolvido é composto por dois módulos distintos:

- **Módulo de gerenciamento de arquivos:** responsável por permitir a anexação de arquivos de texto no formato TXT;
- **Módulo de busca:** responsável por operar funções de busca sobre os arquivos anexados.

<details>
<summary><strong>🚵 Habilidades exercitadas</strong></summary>

 - Manipulação Pilhas;

 - Manipulação Deque;

 - Manipulação Nó & Listas Ligadas e;

 - Manipulação Listas Duplamente Ligadas.
</details>

<details>
<summary><strong>🧱 Estrutura do Projeto</strong></summary><br/>

O projeto em questão já foi iniciado com um template que fornece uma estrutura de diretórios e arquivos, tanto de código quanto de testes, criados pela Trybe.  Abaixo, você pode conferir mais detalhes sobre essa estrutura:

  ```
  Legenda:
  🔸Arquivos fornecidos pela Trybe
  🔹Arquivos com código autoral
  .
  ├──🔸dev-requirements.txt
  ├──🔸pyproject.toml
  ├──🔸README.md
  ├──🔸requirements.txt
  ├──🔸setup.cfg
  ├──🔸setup.py
  ├──statics
  │   ├──🔸arquivo_teste.csv
  │   ├──🔸arquivo_teste.txt
  │   ├──🔸nome_pedro.txt
  │   ├──🔸novo_paradigma_globalizado-min.txt
  │   └──🔸novo_paradigma_globalizado.txt
  ├──tests
  │   └──🔸__init__.py
  ├──ting_file_management
  │   ├──🔹file_management.py
  │   ├──🔹file_process.py
  │   ├──🔸__init__.py
  │   └──🔹queue.py
  └──ting_word_searches
      ├──🔸__init__.py
      └──🔹word_search.py

  ```
</details>

<details>
<summary><strong> 🏕️ Ambiente Virtual </strong></summary><br/>

O Python oferece um recurso chamado ambiente virtual que permite que sua máquina execute diferentes tipos de projetos com diferentes versões de bibliotecas sem conflitos. Para executra este projeto, siga os passos abaixo:

1. **Criar o ambiente virtual**

```bash
$ python3 -m venv .venv
```

2. **Ativar o ambiente virtual**

```bash
$ source .venv/bin/activate
```

3. **Instalar as dependências no ambiente virtual**

```bash
$ python3 -m pip install -r dev-requirements.txt
```

Com o ambiente virtual ativado, as dependências serão instaladas nesse ambiente, permitindo que o projeto seja executado com tranquilidade.

</details>

<details>
<summary><strong> 🛠 Testes </strong></summary><br/>

👀 **Para executar os testes certifique-se de que você está com o ambiente virtual ativado.**

<strong>Executar os testes</strong>

```bash
$ python3 -m pytest
```
</details>

-----

## Requisitos
### *Pacote `ting_file_management`*

<details>
<summary><strong> 1 - Implementação de uma fila para armazenar os arquivos a serem lidos. </strong></summary><br/>

> Desenvolvido em `queue.py`;

A classe `Queue` foi desenvolvida utilizando a estrutura `FIFO` (First In, First Out). Ela implementa os métodos de inserção (`enqueue`), remoção (`dequeue`) e busca (`search`).

O tamanho da fila pode ser obtido utilizando o método `__len__`, o qual permite o uso do comando `len(instancia_da_fila)` para se obter o tamanho atual da fila.

Durante a busca, caso seja passado um índice inválido, será lançada uma exceção do tipo `IndexError`. Em uma fila com `N` elementos, índices válidos são inteiros entre `0` e `N-1`.

</details>

<details>
<summary><strong> 2 - Implementação de uma função capaz de importar notícias a partir de um arquivo TXT, utilizando '<i>\n</i>' como separador. </strong></summary><br/>

> Desenvolvido em `file_management.py`;

A função `txt_importer` realiza a leitura de um arquivo no formato `TXT` e retorna uma lista contendo as linhas do arquivo.

Se o arquivo `TXT` não existir, a mensagem `Arquivo {path_file} não encontrado` será exibida na `stderr`, onde `{path_file}` representa o caminho do arquivo.

Caso a extensão do arquivo seja diferente de .txt, a mensagem `Formato inválido` será exibida na `stderr`.
</details>


<details>
<summary><strong> 3 - Implementação de uma função capaz de transformar o resultado da função desenvolvida no <i>Requisito 1</i> em um dicionário armazenado dentro da <i>Queue</i> </strong></summary><br/>

> Desenvolvido em `file_process.py`;

A função `process` é responsável por receber como parâmetro um objeto da fila implementada no *Requisito 1* e o caminho para um arquivo. Esse objeto é utilizado para registrar o processamento dos arquivos e gerar um dicionário com as seguintes informações:

```python
{
    "nome_do_arquivo": "arquivo_teste.txt", # Caminho do arquivo recém adicionado
    "qtd_linhas": 3,                        # Quantidade de linhas existentes no arquivo
    "linhas_do_arquivo": [...]              # linhas retornadas pela função do requisito 2
}
```
</details>

<details>
<summary><strong> 4 - Implementação de uma função capaz de remover o primeiro arquivo processado </strong></summary><br/>

> Desenvolvido em `file_process.py`;

A função `remove` é responsável por remover o primeiro arquivo processado da fila implementada no *Requisito 1*. Caso não existam arquivos na fila, a função emite a mensagem `Não há elementos` na saída padrão.

Em caso de sucesso, é emitida a mensagem `Arquivo {path_file} removido com sucesso` na saída padrão, em que `{path_file}` é o caminho do arquivo removido.

</details>

<details>
<summary><strong> 5 - Implementação de função capaz de apresentar as informações superficiais de um arquivo processado. </strong></summary><br/>

> Desenvolvido em `file_process.py`;

A função `file_metadata` tem como parâmetros a fila implementada no *Requisito 1* e o índice a ser buscado.
Caso a posição não exista, a função exibe a mensagem de erro `Posição inválida` via `stderr`;

Caso a posição seja válida, as informações relacionadas ao arquivo são mostradas na  `stdout`,  seguindo a estrutura de exemplo abaixo:

```python
{
    "nome_do_arquivo": "arquivo_teste.txt",
    "qtd_linhas": 3,
    "linhas_do_arquivo": [...]
}
```
</details>

<details>
<summary><strong> 6 - Implementação dos testes para a classe <i>PriorityQueue</i> </strong></summary><br/>

> Desenvolvido em `tests/priority_queue/test_priority_queue.py`;

A implementação da classe `PriorityQueue` foi testada para verificar o comportamento correto dos seus métodos (`enqueue`, `dequeue` e `search`).

Foram realizados testes específicos para garantir que arquivos com menos de 5 linhas são armazenados com prioridade na fila, o que afeta o resultado dos métodos `dequeue` e `search`. Dessa forma, é assegurado que a lógica de prioridade está sendo respeitada pela classe.
</details>

<details>
<summary><strong> 7 - Implementação de uma função que verifica a existência de uma palavra em todos os arquivos processados</strong></summary><br/>

> Desenvolvido em `word_search.py`;

A função `exists_word` recebe como parâmetros a palavra a ser buscada e a fila implementada no *Requisito 1* e retorna uma lista com as informações de cada arquivo e suas linhas em que a palavra foi encontrada (`_case insensitive_`), conforme exemplo da estrutura de retorno:

```python
[{
  "palavra": "de",
  "arquivo": "arquivo_teste.txt",
  "ocorrencias": [
    {
      "linha": 2
    },
    {
      "linha": 7
    }
  ]
}]
```
Caso a palavra não seja encontrada em nenhum arquivo, é retornada uma lista vazia.
</details>
