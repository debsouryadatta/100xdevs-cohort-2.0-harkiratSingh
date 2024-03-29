"use client";
import { signIn, signOut } from "next-auth/react"
import Link from "next/link";

export const Appbar = () => {
    return <div>
    <Link href="/signin" className="border border-white m-2 p-2 rounded-xl">Signin</Link>
    <button className="border border-white m-2 p-2 rounded-xl" onClick={() => signOut()}>Sign out</button>
  </div>
}