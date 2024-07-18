create database db_recyclenet;
use db_recyclenet;

create table cadastro(
	id int primary key auto_increment,
    email varchar(255),
    senha varchar(20),
    created_at timestamp
);

create table post(
	id int primary key auto_increment,
    titulo varchar(50),
    mensagem varchar(300)
);

select * from post;
select * from cadastro;