/*NOTE: Run this command if you haven't created DB in pgadmin4 before*/
CREATE DATABASE lert;

/*NOTE: Create ROLES table BEFORE Users*/

CREATE TABLE Users 
(
	Id_user SERIAL PRIMARY KEY ,
	FullName varchar (100) NOT NULL,
	Mail varchar(100) NOT NULL,
	Passwd varchar (300) NOT NULL,
	Rol int,
	CONSTRAINT user_rol
      		FOREIGN KEY(Rol) 
	  			REFERENCES Roles(id)
);


/*Temporary values*/
INSERT into Users (FullName, Mail, Passwd, Rol) 
VALUES ('Remy Sharp', 
		'remysharp@ibm.com', 
		'pbkdf2:sha256:260000$zaUZiqIsUom0M1Cq$41505f9ddf53fda2a5cf99ea6f569cb15577a40e574df494370189f39b99ef97', 
		1);
        
/*Verify that dev account was created*/
SELECT * FROM users;