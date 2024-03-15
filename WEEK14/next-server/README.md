This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### Development Details
- Nextjs by default uses SSR(Server Side Rendering), we can make it CSR using "use client" on top of the page
- Asynchronous components -> New way of fetching data in Next.js(SSR)
- loading.tsx is shown till the data is fetched(Only for SSR)

- In better fetches, the db interaction functions(like - fetch users) are called in the server components

- But in server actions, the db interaction functions(like - signup) are called directly from the client components, and also can be called from the server components
(When the functions in the server actions are called from the client components -> Under the hood, its still doing a http request which can be seen in the network tab of the browser. Extra -> But when the the functions in the server actions are called from the server components, they get called directly without any http request)