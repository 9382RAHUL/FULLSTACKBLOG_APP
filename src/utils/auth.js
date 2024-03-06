import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./connect"
import { getServerSession } from "next-auth"
export const authOptions={
  adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
        //   clientId: "301795334547-c4be1jke76vb7e25ffda7seks2t8eg47.apps.googleusercontent.com",
          clientSecret: process.env.GOOGLE_SECRET,
        }),
        GithubProvider({
          clientId: process.env.GITHUB_ID,
          clientSecret: process.env.GITHUB_SECRET,
        }),
      ],
}
export const getAuthSession=() =>getServerSession(authOptions)