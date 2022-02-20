DROP TABLE IF EXISTS songlists CASCADE;

CREATE TABLE "songlists" (
  "id" INT NOT NULL,
  "song_id" INT,
  "created_at" TIMESTAMP,
);