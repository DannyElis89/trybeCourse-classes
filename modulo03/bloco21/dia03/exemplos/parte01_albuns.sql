/*
Criando um banco de dados: sintaxe:
CREATE TABLE nome_tabela (
	coluna1 tipo constraint,
    coluna2 tipo constraint,
    coluna3 tipo constraint,
    coluna4 tipo constraint,
    ...
) ENGINE = 'nome_engine'
*/

-- comando para criar banco de dados com verificação se este já não existe:
CREATE DATABASE IF NOT EXISTS albuns;
