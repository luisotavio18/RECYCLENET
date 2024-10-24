create database db_recyclenet;
use db_recyclenet;

create table cadastro(
	id int primary key auto_increment,
    email varchar(255),
    senha varchar(20),
    created_at timestamp default current_timestamp
);

create table post(
	id int primary key auto_increment,
    titulo varchar(50),
    mensagem varchar(300),
    file varchar(120),
    created_at timestamp default current_timestamp
);

drop table post, cadastro;

select * from post;
select * from cadastro;	