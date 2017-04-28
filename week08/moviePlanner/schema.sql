-- Make a database called moviePlannerDB

CREATE DATABASE moviePlannerDB;
USE moviePlannerDB;

-- Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.
CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
movie varchar(255) NOT NULL
);


INSERT INTO movies (movie) VALUES ("The Neverending Story");
