CREATE TABLE roles
(
    rol_id SERIAL PRIMARY KEY,
    rol_name VARCHAR (100) NOT NULL
);

INSERT INTO roles (rol_name)
VALUES 

(
    'Manager',
    'Operation Manager',
    'ICA Admin'
);