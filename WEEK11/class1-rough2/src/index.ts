import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("light"));

  if (body) {
    return c.json({body: body})
  } else {
    return c.json({body: "No body"})
  }
})

export default app