CREATE TABLE employee
(
    Id_Employee SERIAL PRIMARY KEY,
    employee_name Varchar(150),
    employee_lastname Varchar(150),
    mail Varchar(255),
    country_origin varchar(255),
    Id_ICA integer,
    country_residence Varchar(255),
    Id_Type integer,
    band integer,
    squad Varchar(150),
    Start_Date Date,
	End_Date Date,
    Foreign Key(id_type) REFERENCES Type(id_type),
    Foreign Key(Id_ICA) REFERENCES ICA(Id_ICA)
)