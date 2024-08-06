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
    mensagem varchar(300),
    file varchar(120),
    created_at timestamp default current_timestamp
);

INSERT INTO post(titulo,mensagem,file) values("teste","teste","1722860286843_download.png")

select * from post;
select * from cadastro;