CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE dados_pessoais (
	id_pessoal INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

INSERT INTO dados_pessoais(nome, sobrenome) VALUES
	('Joseph', 'Rodrigues'),
	('André', 'Freeman'),
	('Cíntia', 'Duval'),
	('Fernanda', 'Mendes');

CREATE TABLE contato_telefone (
	id_telefone INT PRIMARY KEY AUTO_INCREMENT,
    id_pessoal INT NOT NULL,
    DDD INT NOT NULL,
    telefone INT NOT NULL,
    FOREIGN KEY (id_pessoal) REFERENCES dados_pessoais(id_pessoal)
)ENGINE=InnoDB;

INSERT INTO contato_telefone(id_pessoal, DDD, telefone) VALUES
	(1, 35, 985521445),
    (2, 47, 995224996),
    (3, 33, 998554669),
    (4, 33, 992001556);

CREATE TABLE contato_email (
	id_email INT PRIMARY KEY AUTO_INCREMENT,
    id_pessoal INT NOT NULL,
    email VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_pessoal) REFERENCES dados_pessoais(id_pessoal)
)ENGINE=InnoDB;

INSERT INTO contato_email(id_pessoal, email) VALUES
	(1, 'jo@gmail.com'),
    (2, 'andre1990@gmail.com'),
    (3, 'cindy@outlook.com'),
    (4, 'fernandamendes@yahoo.com');

CREATE TABLE setores_empresa (
	id_setor INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

INSERT INTO setores_empresa(setor) VALUES
	('Administração'),
    ('Estratégico'),
    ('Marketing'),
	('Operacional'),
    ('Vendas');

CREATE TABLE dados_profissionais (
	id_funcionario INT PRIMARY KEY AUTO_INCREMENT,
    id_pessoal INT NOT NULL,
    data_cadastro DATETIME NOT NULL,
    FOREIGN KEY (id_pessoal) REFERENCES dados_pessoais(id_pessoal)
)ENGINE=InnoDB;

INSERT INTO dados_profissionais(id_pessoal, funcionario_id, data_cadastro) VALUES
	(1, 12, '2020-05-05 08:50:25'),
    (2, 13, '2020-02-05 10:00:00'),
    (3, 14, '2020-05-05 10:55:35'),
	(4, 15, '2020-05-05 11:45:40');

CREATE TABLE funcionario_setor (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_funcionario INT NOT NULL,
    setor1 INT NOT NULL,
    setor2 INT,
	FOREIGN KEY (setor1) REFERENCES setores_empresa(id_setor),
    FOREIGN KEY (setor2) REFERENCES setores_empresa(id_setor),
    FOREIGN KEY (id_funcionario) REFERENCES dados_profissionais(id_funcionario)
)ENGINE=InnoDB;

INSERT INTO funcionario_setor(funcionario_id, setor1, setor2) VALUES
	(12, 1, 5),
    (13, 4, null),
    (14, 2, 5),
	(15,3, null);

/*
USE normalization;
SELECT * FROM contato_email;
SELECT * FROM contato_telefone;
SELECT * FROM dados_pessoais;
SELECT * FROM dados_profissionais;
SELECT * FROM setores_empresa;
*/