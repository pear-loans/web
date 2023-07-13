-- This file clears and sets up a new database with fake data.

DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (Id TEXT PRIMARY KEY, Platform TEXT, Email TEXT);
INSERT INTO Users (Id, Platform, Email) VALUES ('1', 'Google', 'test1@test.com'), ('4', 'Apple', 'test2@test.com');
