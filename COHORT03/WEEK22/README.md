## WEEK22

### Live Classes
22.1 -> 


### Recorded Classes


### Notion Notes
22.1 -> no notes for week 22
22.2 -> no notes for week 22

### Doubt to clear
- The packages dir does not needs build step, since they are being imported to several apps, so the build step occurs in that app level.
- While using nextjs or nodemon, may face max conn limits if the prisma client is not singleton.

### Extras
22.1 -> 
1. Initialised an empty turborepo
2. Deleted the docs app
3. Added http-backend, ws-backend
4. Added package.json in both the places
5. Added tsconfig.json in both the places and imported it from @repo/typescript-config/base.json
6. Added @repo/typescript-config as a dev dependency in both the ws-server and http-server, then do a global `pnpm i`
7. Added a build, dev and start script to both the projects
8. Update the turbo.json in both the projects(optional)
9. Initialise a http server, initialise a websocket server
10. Write the signup, signin and create-room endpoints in the http-backend
11. Write the middlewares that decode the token and gate the create-room endpoint
12. Decode the token in the websocket server as well. Send the token to the websocket server in a query param for now
13. Added a backend-common package from where we export the JWT_SECRET, added @repo/backend-common as a dependency in both the projects. Added a common package from where we export the zod types, added @repo/common as a dependency in both the projects
14. Create a db package
15. Using the db package in the http layer


