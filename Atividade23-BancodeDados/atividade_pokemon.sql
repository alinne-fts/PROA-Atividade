create database pokemon_database;

drop database pokemon_database;

use pokemon_database;

create table tb_treinador(
    pk_id_treinador int primary key auto_increment not null,
    nome_treinador varchar(100) not null,
    data_nasc_treinador date,
    aparencia_treinador enum('Jovem', 'Adulto', 'Idoso', 'Lenda'),
    gostos_treinador text
);

describe tb_treinador;

create table tb_pokemon(
    pk_id_pokemon int primary key auto_increment not null,
    nome_pokemon varchar(50) not null,
    especie_pokemon varchar(50),
    forma enum('Normal', 'Female', 'Male', 'Mega', 'Gigantamax'),
    tipo_1 enum('Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison',
               'Ground','Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark',
               'Steel','Fairy') not null,
    tipo_2 enum('Normal','Fire','Water','Electric','Grass','Ice','Fighting','Poison',
               'Ground','Flying','Psychic','Bug','Rock','Ghost','Dragon','Dark',
               'Steel','Fairy', 'None'),
    HP int not null,
    ataque int not null,
    defesa int not null,
    ataque_especial int not null,
    defesa_especial int not null,
    agilidade int not null,
    geracao int not null
);

describe tb_pokemon;

create table tb_time(
    pk_id_time int primary key auto_increment not null,
    nome_equipe varchar(100),
    qtd_pokemons int default 0,
    fk_id_treinador int unique not null
);

describe tb_time;

create table tb_fazenda(
    pk_id_fazenda int primary key auto_increment not null,
    localidade varchar(150),
    capacidade int default 50,
    fk_id_treinador int unique not null
);

describe tb_fazenda;

alter table tb_time
add constraint fk_time_treinador 
foreign key (fk_id_treinador) references tb_treinador(pk_id_treinador);

alter table tb_fazenda
add constraint fk_fazenda_treinador
foreign key (fk_id_treinador) references tb_treinador(pk_id_treinador);

create table tb_time_pokemon(
    pk_id_time_pokemon int primary key auto_increment not null,
    fk_id_time int not null,
    fk_id_pokemon int not null,
    posicao_time enum('1','2','3','4','5','6')
);

create table tb_fazenda_pokemon(
    pk_id_fazenda_pokemon int primary key auto_increment not null,
    fk_id_fazenda int not null,
    fk_id_pokemon int not null,
    data_armazenamento date
);

alter table tb_time_pokemon
add constraint fk_time_pokemon_time
foreign key (fk_id_time) references tb_time(pk_id_time),
add constraint fk_time_pokemon_pokemon
foreign key (fk_id_pokemon) references tb_pokemon(pk_id_pokemon);

alter table tb_fazenda_pokemon
add constraint fk_fazenda_pokemon_fazenda
foreign key (fk_id_fazenda) references tb_fazenda(pk_id_fazenda),
add constraint fk_fazenda_pokemon_pokemon
foreign key (fk_id_pokemon) references tb_pokemon(pk_id_pokemon);

insert into tb_pokemon (numero_pokedex, nome_pokemon, especie_pokemon, forma, tipo_1, tipo_2, HP, ataque, defesa, ataque_especial, defesa_especial, agilidade, geracao) values
(1, "Bulbasaur", "Semente", "Normal", "Grass", "Poison", 45, 49, 49, 65, 65, 45, 1),
(2, "Ivysaur", "Semente", "Normal", "Grass", "Poison", 60, 62, 63, 80, 80, 60, 1),
(3, "Venusaur", "Semente", "Normal", "Grass", "Poison", 80, 82, 83, 100, 100, 80, 1);

select * from tb_pokemon;

show tables;

alter table tb_pokemon 
add column numero_pokedex int unique after pk_id_pokemon;

describe tb_pokemon;

insert into tb_treinador (nome_treinador, data_nasc_treinador, aparencia_treinador, gostos_treinador) values
("Ash Ketchum", "1990-05-22", "Jovem", "Explorar, batalhar, fazer novos amigos"),
("Misty", "1992-07-12", "Jovem", "Pokémons água, natação, competições");

select t.nome_treinador, tm.nome_equipe 
from tb_treinador t 
join tb_time tm on t.pk_id_treinador = tm.fk_id_treinador;

select t.nome_treinador, p.nome_pokemon, tp.posicao_time
from tb_treinador t
join tb_time tm on t.pk_id_treinador = tm.fk_id_treinador
join tb_time_pokemon tp on tm.pk_id_time = tp.fk_id_time
join tb_pokemon p on tp.fk_id_pokemon = p.pk_id_pokemon;

update tb_time set qtd_pokemons = 2 where pk_id_time = 1;
update tb_time set qtd_pokemons = 0 where pk_id_time = 2;
