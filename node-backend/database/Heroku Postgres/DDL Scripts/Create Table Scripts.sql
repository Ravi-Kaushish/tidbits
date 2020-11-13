--users table create table command
CREATE TABLE tidbits.codemymobile_users (
	id int4 primary key NOT NULL,
	"name" varchar(50) NULL,
	email varchar(50) NULL,
	avatar text NULL
);

--friends table create table command
CREATE TABLE tidbits.codemymobile_friends (
	friendship_id serial primary key not null,
	friend1_id int4 NOT NULL,
	friend2_id int4 NOT NULL,
	is_active bool DEFAULT true
);