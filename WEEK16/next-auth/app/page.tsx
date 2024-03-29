"use client";
import { Appbar } from "@/components/Appbar"
import { useSession } from "next-auth/react"

const page = () => {
  const session = useSession();

  return (
    <>
    <div>Hello WOrld!</div>
    <Appbar />
    <div>{JSON.stringify(session.data?.user)}</div>
    </>
  )
}

export default page