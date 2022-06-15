CREATE TABLE Expenses
(
    id SERIAL PRIMARY KEY,
    employee_mail Varchar(150),
    date_limit Varchar(150),
    cost float,
    comment varchar(255),
    id_ICA integer,
    id_Type integer,
    ica_manager Varchar(255),
    administrator Varchar(255),

    Foreign Key(id_type) REFERENCES Type(id_type),
    Foreign Key(Id_ICA) REFERENCES ICA(Id_ICA)
    
)