import { NextRequest, NextResponse } from "next/server";
import client from "@/db"

export async function GET(req: NextRequest) {
  return NextResponse.json({ name: "John Doe", email: "johndoe@gmail.com" });
}

// export async function POST(req: NextRequest) {
//     // body
//     const body = await req.json();
//     // headers
//     console.log(req.headers.get("authorization"));
//     // query
//     console.log(req.nextUrl.searchParams.get("name"));

//     // Hit the database with username and password

//     return NextResponse.json({message: "You are signed up!"});
// }

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  try {
    const response = await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    console.log(response);
    return NextResponse.json({ message: "You are signed up!" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error while signing up" }, { status: 411 });
  }
}
