-- CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE topAlbums (
  position INT NOT NULL,
  artist VARCHAR(255) NULL,
  album VARCHAR(255) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);
  
SELECT * FROM topAlbums;
