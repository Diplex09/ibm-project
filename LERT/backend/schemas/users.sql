/*NOTE: Run this command if you haven't created DB in pgadmin4 before*/
CREATE DATABASE lert;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    full_name VARCHAR ( 100 ) NOT NULL,
    email VARCHAR (100) NOT NULL,
    passwd VARCHAR (300) NOT NULL
);

/*Temporary values*/
INSERT into users (full_name, email, passwd) 
VALUES ('Remy Sharp', 
		'remysharp@ibm.com', 
		'pbkdf2:sha256:260000$zaUZiqIsUom0M1Cq$41505f9ddf53fda2a5cf99ea6f569cb15577a40e574df494370189f39b99ef97');

/*Verify that dev account was created*/
SELECT * FROM users;