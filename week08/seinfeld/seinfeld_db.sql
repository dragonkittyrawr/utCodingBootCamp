-- Create a seinfeld_db database with an actors table.
-- The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).
-- Add in four actors with different names, coolness_points, and attitudes.




CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
coolness_points INT(10) NOT NULL,
attitude VARCHAR(50) NOT NULL
);

INSERT INTO actors(name, coolness_points, attitude) VALUES ("Jerry", 90, "relaxed");
INSERT INTO actors(name, coolness_points, attitude) VALUES ("Elaine", 80, "righteous");
INSERT INTO actors(name, coolness_points, attitude) VALUES ("George", 50, "selfish");
INSERT INTO actors(name, coolness_points, attitude) VALUES ("Kramer", 20, "doofus");