import { client } from "..";
import { createTables } from "./setup";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
// createTables();

export async function createUser(
  username: string,
  password: string,
  name: string
) {
  client.connect();
  const insertQuery =
    "INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *; ";
  const values = [username, password, name];
  const res = await client.query(insertQuery, values);
  console.log(res.rows[0]);
  await client.end();
  return res.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  client.connect();
  const insertQuery = `SELECT * FROM users WHERE id = $1 RETURNING *; `;
  const values = [userId];
  const res = await client.query(insertQuery, values);
  console.log(res);
  await client.end();
  return res.rows[0];
}
