create table agent(agent_id uuid not null PRIMARY KEY, name varchar(255) not null, email VARCHAR(255), passwords varchar(255) status varchar(255) DEFAULT 'available', availability BOOLEAN DEFAULT true, roles varchar(255) )

