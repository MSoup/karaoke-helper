# Database Planning
```sql
Table users {
  id int [pk, increment]
  first_name varchar
  last_name varchar
  email varchar
  password varchar
  created_at timestamp
}
 
Table songlists {
  id int
  song_id int
  created_at timestamp
 }

Table user_lists {
  id [pk, increment]
  user_id int
  songlist_id int
  title varchar
}

Ref: user_lists.user_id > users.id
Ref: user_lists.songlist_id > songlists.id
```