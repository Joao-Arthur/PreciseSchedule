create table user_profile (
    id serial primary key,
    name varchar(256) not null,
    gender gender_enum not null,
    birthdate date not null,
    email varchar(256) not null,
    username varchar(256) not null,
    iterations integer not null,
    salt varchar(1024) not null,
    hash varchar(1024) not null
);