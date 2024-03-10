import { client } from "..";
import { createTables } from "./setup";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
createTables();

export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  client.connect();
  const insertQuery =
    "INSERT INTO todos (user_id, title, description) VALUES ($!, $2, $3) RETURNING *; ";
  const values = [userId, title, description];
  const res = await client.query(insertQuery, values);
  console.log(res);
  await client.end();
  return res.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  client.connect();
  const insertQuery = `
    UPDATE todos
    SET done = true
    WHERE id = $1
    RETURNING *; 
  `;
  const values = [todoId];
  const res = await client.query(insertQuery, values);
  console.log(res);
  await client.end();
  return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    client.connect();
    const insertQuery = "SELECT * FROM todos WHERE user_id = $1 RETURNING *; ";
    const values = [userId];
    const res = await client.query(insertQuery, values);
    console.log(res);
    await client.end();
    return res.rows[0];
}
