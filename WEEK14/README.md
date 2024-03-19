## WEEK14

### Live Classes
14.1 -> NextJs Frontend - Intro, NextJs offerings, routing, SSR, layout.tsx, Merging routes, components dir, Client components & Server components ✅

14.2 -> NextJs Backend (Half covered)


### Recorded Classes
14.3 -> Nextjs Backend(Full covered) - Intro, data fetching in NextJs, loading.tsx, api routes, Better fetches, Server actions ✅


### Notion Notes
Link - https://quickest-juniper-f9c.notion.site/Cohort-2-0-FullStack-Open-Source-6b6c2a9f1282499aba4782b88bf7e204


### Assignments



### Extra Links
After 14.1 -> 
Link to the Steps
1. https://daily-code-web.vercel.app/tracks/nextjs-1/next-1

After 14.2 -> 
Link to the Steps
1. https://daily-code-web.vercel.app/tracks/nextjs-2/next-2-1





### Development Details
- Nextjs by default uses SSR(Server Side Rendering), we can make it CSR using "use client" on top of the page
- Asynchronous components -> New way of fetching data in Next.js(SSR)
- loading.tsx is shown till the data is fetched(Only for SSR)

- In better fetches, the db interaction functions(like - fetch users) are called in the server components

- But in server actions, the db interaction functions(like - signup) are called directly from the client components, and also can be called from the server components
(When the functions in the server actions are called from the client components -> Under the hood, its still doing a http request which can be seen in the network tab of the browser. Extra -> But when the the functions in the server actions are called from the server components, they get called directly without any http request)

