DROP TABLE users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    lifting_total FLOAT,
    bodyweight FLOAT,
    name VARCHAR,
    sumo BOOL,
    peds BOOL
);
