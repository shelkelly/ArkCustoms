
CREATE DATABASE arkstore_db;
USE arkstore_db;

CREATE TABLE retail
(
	id int NOT NULL AUTO_INCREMENT,
	product varchar(255) NOT NULL,
    description varchar(1000) NOT NULL,
    optiontype boolean default false,
    optiontype2 boolean default false,
    price varchar(10) NOT NULL,
    imgurl varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE customdefault
(
	id int NOT NULL AUTO_INCREMENT,
	product varchar(255) NOT NULL,
    engravingtext varchar(25) NULL,
    engravingfont varchar(50) NULL,
    engravingimg varchar(100) NULL,
    optiontype boolean default false,
    optiontype2 boolean default false,
	PRIMARY KEY (id)
);

CREATE TABLE customsubmission
(
    id int NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    cusdescription varchar(1000) NOT NULL,
    submission varchar(500) NOT NULL,
    useremail varchar (50) NOT NULL,
    username varchar (50) NOT NULL,
    othercontact varchar(50) NULL,
    PRIMARY KEY (id)
)

SELECT * FROM arkstore_db.retail;
