-- This file clears and sets up a new database with fake data.
DROP TABLE IF EXISTS Users;

DROP TABLE IF EXISTS 'authjs_accounts';

DROP TABLE IF EXISTS 'authjs_sessions';

DROP TABLE IF EXISTS 'authjs_users';

DROP TABLE IF EXISTS 'authjs_verification_tokens';

-------- Set up the 'Users' table
CREATE TABLE IF NOT EXISTS Users (
	CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	Email TEXT,
	Id TEXT PRIMARY KEY,
	Platform TEXT
);

INSERT INTO
	Users (Id, Platform, Email)
VALUES
	('1', 'Google', 'test1@test.com'),
	('4', 'Apple', 'test2@test.com');

-------- Required Auth.js tables
CREATE TABLE IF NOT EXISTS 'authjs_accounts' (
	'id' text NOT NULL,
	'userId' text NOT NULL DEFAULT NULL,
	'type' text NOT NULL DEFAULT NULL,
	'provider' text NOT NULL DEFAULT NULL,
	'providerAccountId' text NOT NULL DEFAULT NULL,
	'refresh_token' text DEFAULT NULL,
	'access_token' text DEFAULT NULL,
	'expires_at' number DEFAULT NULL,
	'token_type' text DEFAULT NULL,
	'scope' text DEFAULT NULL,
	'id_token' text DEFAULT NULL,
	'session_state' text DEFAULT NULL,
	'oauth_token_secret' text DEFAULT NULL,
	'oauth_token' text DEFAULT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS 'authjs_sessions' (
	'id' text NOT NULL,
	'sessionToken' text NOT NULL,
	'userId' text NOT NULL DEFAULT NULL,
	'expires' datetime NOT NULL DEFAULT NULL,
	PRIMARY KEY (sessionToken)
);

CREATE TABLE IF NOT EXISTS 'authjs_users' (
	'id' text NOT NULL DEFAULT '',
	'name' text DEFAULT NULL,
	'email' text DEFAULT NULL,
	'emailVerified' datetime DEFAULT NULL,
	'image' text DEFAULT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS 'authjs_verification_tokens' (
	'identifier' text NOT NULL,
	'token' text NOT NULL DEFAULT NULL,
	'expires' datetime NOT NULL DEFAULT NULL,
	PRIMARY KEY (token)
);
