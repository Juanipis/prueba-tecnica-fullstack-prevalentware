import NextAuth from "next-auth"
import Auth0 from "next-auth/providers/auth0"
import { prisma } from "@/prisma"
import { PrismaAdapter } from "@auth/prisma-adapter"

export const {  handlers, signIn, signOut, auth  } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Auth0({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    
  })],
})