CREATE TABLE Type
(
	Id_Type SERIAL PRIMARY KEY,
	Type_Name Varchar (200),
	Band Varchar (50),
	Country Varchar (120),
	Rate FLOAT,
	Date_To_Start Varchar (100),
	Date_To_Finish Varchar (100)
);