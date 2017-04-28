-- Instructions:

-- For the table favorite_foods...

-- Create the column "food" which can take in a 50 character string and cannot be NULL
-- Create the column "score" which can take in an integer
-- For the table favorite_songs...

-- Create the column "song" which can take in a 100 character string and cannot be NULL
-- Create the column "artist" which can take in a 50 character string
-- Create the column "score" which can take in an integer
-- For the table favorite_movies...

-- Create the column "film" which can take in a string and cannot be NULL
-- Create the column "five_times" which can take in a boolean
-- create the column "score" which can take in an integer
-- BONUS: Go online and look into how one might go about adding data into a table.

CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --
USE favorite_db; 

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(30) NOT NULL,
  -- Make an numeric column called "score" --

  score NUMERIC(10),
);

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null 
  -- 
  song VARCHAR(30) NOT NULL,
  -- Make a string column called "artist" --
  artist VARCHAR(30),

  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
id INTEGER(10) AUTO_INCREMENT NOT NULL,

  -- Create a string column called "movie" which cannot be null --

  movie VARCHAR(30) NOT NULL,
  -- Create a boolean column called "five_times" that sets the default value to FALSE if nothing is entered --

  five_times BOOLEAN DEFAULT 0,
  -- Make an integer column called "score" --

  score INTEGER(10),
  -- Set the primary key of the table to id --

  PRIMARY KEY (id)
);
