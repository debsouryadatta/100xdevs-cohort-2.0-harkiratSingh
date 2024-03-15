import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { signupInput, signinInput } from "@100xdevs/medium-common";


// Ts can't read toml files so it doesn't know the type of the DATABASE_URL
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
    }
  }>();

// In Workers environment, global initialization of Client is not supported
userRouter.post("/signup", async (c) => {
    const body = await c.req.json();

    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({message: "Inputs not correct"});
    }
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          name: body.name,
        }
      })
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET)
  
    return c.text(jwt);
    } catch (error) {
      console.log(error);
      c.status(411);
      return c.text("Invalid");
    }
  });
  
  userRouter.post('/signin', async (c) => {
      const body = await c.req.json();
  
      const {success} = signinInput.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({message: "Inputs not correct"});
      }
      const prisma = new PrismaClient({
          datasourceUrl: c.env?.DATABASE_URL	,
      }).$extends(withAccelerate());
  
    try {
      const user = await prisma.user.findUnique({
        where: {
          username: body.username,
          password: body.password,
        }
      });
    
      if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
      }
    
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    } catch (error) {
      console.log(error);
      c.status(411);
      return c.text("Invalid");
    }
  
  })