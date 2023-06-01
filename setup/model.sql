CREATE DATABASE taxiapp;
CREATE EXTENSION pgcrypto;



create table orders (
	order_id serial not null primary key,
	phone_number varchar(12) not null,
	user_name varchar(24) not null,
	service_name varchar(24) not null
);

