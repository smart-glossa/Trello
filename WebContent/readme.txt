My project Trello website
i use sublime text editor in frontend and java coding in eclipse for backend
then i can use Tomcat server to run this project.
 

create database Trello;

create table register(
uId int unique auto_increment,
username varchar(50) primary key,
password varchar(50),
fullName varchar(50));  



create table board(
boardid int auto_increment,
boardname varchar (50),primary key(boardid),
username varchar(50), foreign key(userName) REFERENCES register(userName));