
CREATE TABLE pets (
    id serial, 
    pet_name varchar(50),
    kind varchar(20), 
    age integer
);


INSERT INTO pets(pet_name, kind, age) 
VALUES ('fido', 'dog', 7);