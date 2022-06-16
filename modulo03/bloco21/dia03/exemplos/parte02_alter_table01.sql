USE sakila;

USE sakila;
CREATE TABLE noticia(
    noticia_id INT PRIMARY KEY,
    titulo VARCHAR(100),
    historia VARCHAR(300)
) engine = InnoDB;

SHOW COLUMNS FROM noticia;

-- 01. Adicionar uma nova coluna
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;
SHOW COLUMNS FROM noticia;

-- 02. Modificar o tipo e propriedades de uma coluna
ALTER TABLE noticia MODIFY noticia_id BIGINT;
SHOW COLUMNS FROM noticia;

-- 03. Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;
SHOW COLUMNS FROM noticia;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;
SHOW COLUMNS FROM noticia;

-- 04. Dropar/Excluir uma coluna
ALTER TABLE noticia DROP COLUMN data_postagem;
SHOW COLUMNS FROM noticia;

-- 05. Adicionar uma nova coluna após outra
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;
SHOW COLUMNS FROM noticia;