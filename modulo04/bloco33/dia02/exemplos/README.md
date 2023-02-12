# Módulo 04 - Ciência da Computação
## Bloco 33: Padrões de Projeto
### Dia 02: Padrões - Iterator, Adapter, Strategy
#### Exemplos:

##### Iterator:
1. Em seu terminal Python, crie uma lista (do conhecido tipo `list`) com alguns elementos. Agora, chame a função nativa `iter()`, passando essa lista como parâmetro, e veja que é retornado um objeto iterador do tipo `list_iterator`.
2. Guarde este objeto iterador em uma variável e veja o que acontece quando chamar a função nativa `next()` passando esse objeto como parâmetro.

   ```python
    >>> lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    >>> iter(lista)
    <list_iterator object at 0x7f4641c72dc0>
    >>> next(interador_lista)
    1
    >>> next(interador_lista)
    2
    >>> next(interador_lista)
    3
    >>> next(interador_lista)
    4
   ```

##### Adapter:
