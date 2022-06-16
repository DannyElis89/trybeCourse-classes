DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

CREATE TABLE regiao_zoo (
	area_id INT PRIMARY KEY AUTO_INCREMENT,
    area_name VARCHAR(50) NOT NULL
);

CREATE TABLE gerentes (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes(gerente_id)
);

CREATE TABLE especies(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    especie_name VARCHAR(50) NOT NULL,
    area_id INT NOT NULL,
    FOREIGN KEY (area_id) REFERENCES regiao_zoo(area_id)
);

CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    animal_name VARCHAR(50) NOT NULL,
    animal_gender VARCHAR(50) NOT NULL,
    animal_birth DATE NOT NULL,
    especie_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especies(especie_id)
);

CREATE TABLE animal_cuidador(
	id INT PRIMARY KEY AUTO_INCREMENT,
    animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
);