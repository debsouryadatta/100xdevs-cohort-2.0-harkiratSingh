```
npm install
npm run dev
```

```
npm run deploy
```

Doubt Clearance
1. We are using 2 database urls 
- one is the pool url in wrangler.toml and the other is the url in the .env file
- The pool url is used to connect our serverless backend to the pool
- The main url is used to do schema migrations directly to the database through our terminal
- And also we need to attach the main url to the Prisma Accelerate site so that our pool can be connected to the database

2. Ts can't read toml files so it doesn't know the type of the DATABASE_URL

3. In Workers environment, global initialization of Client is not supported

4. We can use @ts-ignore to ignore the ts error in the next line of code

5. Publishing npm packages(from common folder), npm i @100xdevs/medium-common, something covered in the week 12, then importing the zod validation types from that package
(We could take the types from the common folder but thats not a good practice, since the backend folder might not have access to the common folder after deployment to cloudflare)