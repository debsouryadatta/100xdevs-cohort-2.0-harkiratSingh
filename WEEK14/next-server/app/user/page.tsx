// import axios from "axios"

// // Asynchronous components -> New way of fetching data in Next.js(SSR)
// // loading.tsx is shown till the data is fetched(Only for SSR)
// export default async function User(){
//     const data = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
//     return (
//         <div>
//             {data.data.name}
//              {data.data.email}
//         </div>
//     )
// }

import client from "@/db"

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
    return {
      email: user?.email,
      password: user?.password,
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function User() {
  const data = await getUserDetails();
  return (
    <div>
      {data?.email}
      {data?.password}
    </div>
  );
}
