## WEEK16

### Live Classes
16.1 -> Monorepos & Turborepos -> Intro, Why monorepos? Build system vs Build system orchestrator vs Monorepo framework, setting up turborepo, exploring folder structure -> root dir/packages dir ✅

16.2 -> Monorepos & Turborepos II -> Adding a page to apps/web, Exploring turbo.json, Adding React project(with vite), Caching in Turborepo(During build), Adding a Node.js app, Adding a common module(Error in tsc while importing common inside nodejs app, used esbuild instead) ✅


### Recorded Classes
16.3 -> Authentication using cookies -> why?, why not local storage, Types of cookies, Properties of cookies - HttpOnly, SameSite - Strict, Lax, None, CSRF attacks, using cookies inside code(nodejs,react) ✅

16.4 -> Next Auth -> Intro, Catch all routes, 3types - OAuth Providers, Email(Passwordless Email login via email OTP), Credentials (your own strategy), Custom Signup page ✅


### Notion Notes
Link - https://quickest-juniper-f9c.notion.site/Cohort-2-0-FullStack-Open-Source-6b6c2a9f1282499aba4782b88bf7e204


### Assignments



### Extra Links
After 16.1 -> 
Link to the Steps
1. https://projects.100xdevs.com/tracks/monorepo/monorepo-1

After 16.3 -> 
Link to the Steps
1. https://projects.100xdevs.com/tracks/Auth/auth-1

After 16.4 -> 
Link to the Steps
1. https://projects.100xdevs.com/tracks/Next-Auth/La3EksBcKVqExEMwNAxa


### Extras

*** 16.3 -> Turborepo ***
1. 16.3 -> Taking the NEXT_AUTH_CONFIG from here to a separate file so that it can be used inside the server side to get the id of the user, because without passing the NEXT_AUTH_CONFIG to the getServerSession, the id of the user doesn't gets displayed


*** 16.2 -> Turborepo ***
1. root package.json -:> "workspaces": ["apps/*" , "packages/*"]
2. packages package.json ->   "exports": {
    "./button": "./src/button.tsx",
    "./card": "./src/card.tsx",
    "./code": "./src/code.tsx"
  },
3. import format in package.json -> "@repo/ui": "*",
4. Only one node_modules -> In the root dir
5. After setting up the react-app, do npm i in the root dir to install the dependencies in the root node_modules
6. Cashing in turborepo during npm run build
7. Adding a common module in packages folder, then npm i in the root dir, then using it.