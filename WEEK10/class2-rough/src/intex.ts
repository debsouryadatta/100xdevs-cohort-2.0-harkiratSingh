import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    },
    select: {
        username: true,
        firstName: true,
        lastName: true
    }
  })
  console.log(res);
}


interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
  firstName,
  lastName
}: UpdateParams) {
const res = await prisma.user.update({
  where: { username },
  data: {
    firstName,
    lastName
  }
});
console.log(res);
}


async function getUser(username: string) {
  const res = await prisma.user.findUnique({
    where: {username}
  })
  console.log(res);
  
}

// insertUser('neel', 'pass', 'Neel', 'Datta');
// updateUser("neel",{
//     firstName: "Neelu",
//     lastName: "Datta"
// });
getUser("neel");