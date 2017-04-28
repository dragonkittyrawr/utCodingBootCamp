CREATE DATABASE wish_saver_db;

USE wish_saver_db;

CREATE TABLE wishes(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	wish varchar(255) NOT NULL
	);
INSERT INTO wishes (wish) VALUES ("I wish I was big.");