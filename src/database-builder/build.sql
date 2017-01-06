BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  post_id        SERIAL          PRIMARY KEY NOT NULL,
  post_title     VARCHAR(100)    NOT NULL,
  post_content   VARCHAR(5000)   NOT NULL,
  creation_date  DATE          NOT NULL
);

COMMIT;
