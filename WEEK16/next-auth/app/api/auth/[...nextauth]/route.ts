import { NEXT_AUTH_CONFIG } from "@/app/lib/auth";
import NextAuth from "next-auth";


const handler = NextAuth(NEXT_AUTH_CONFIG); // Taking the NEXT_AUTH_CONFIG from here to a separate file so that it can be used inside the server side to get the id of the user, because without passing the NEXT_AUTH_CONFIG to the getServerSession, the id of the user doesn't gets displayed

export { handler as GET, handler as POST };
