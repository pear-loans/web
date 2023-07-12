DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (UserId TEXT PRIMARY KEY, ContactName TEXT);
INSERT INTO Users (UserId, ContactName) VALUES ('1', 'Maria Anders'), ('4', 'Thomas Hardy');
