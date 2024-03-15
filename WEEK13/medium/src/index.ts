import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";


// Ts can't read toml files so it doesn't know the type of the DATABASE_URL
export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.route("/api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);


export default app;
