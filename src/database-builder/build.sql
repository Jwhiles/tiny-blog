BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE posts (
  post_id        SERIAL           PRIMARY KEY NOT NULL,
  post_content   VARCHAR(1000)   NOT NULL,
  creation_date    DATE       NOT NULL,
  user_id          INTEGER         NOT NULL
);

COMMIT;
