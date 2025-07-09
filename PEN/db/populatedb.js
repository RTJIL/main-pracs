import { Client } from "pg"

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
    console.log("sending...")
    const client = new Client({
        connectionString: "postgresql://rtjil:125364@localhost:5432/top_users",
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("done")
}

main()