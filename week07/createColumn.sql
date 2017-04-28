SELECT * FROM programming_db.programming_languages;
USE programming_db;
INSERT INTO programming_languages (languages, rating)
VALUES ("javascript", 100);
INSERT INTO programming_languages (languages, rating)
VALUES ("html", 10);
INSERT INTO programming_languages (languages, rating)
VALUES ("css", 25);
USE programming_db;
ALTER TABLE programming_languages
ADD mastered BOOLEAN NOT NULL DEFAULT 1;
