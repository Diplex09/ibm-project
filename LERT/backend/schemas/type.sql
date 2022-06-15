CREATE TABLE Type
(
	Id_Type SERIAL PRIMARY KEY,
	Type_Name Varchar (200),
	Band integer,
	Country Varchar (120),
	Rate integer,
	Date_To_Start DATE,
	Date_To_Finish DATE
);
