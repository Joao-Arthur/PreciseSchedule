create table event (
	id serial primary key,
    name varchar(64) not null,
    description varchar(256),
    event_date date not null,
    begin_time time,
    end_time time,
    active boolean not null,
    user_id integer not null,
    importance integer not null,
    frequency integer not null,
    category integer not null,
	foreign key (user_id) references user_profile
);