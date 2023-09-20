import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions={
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        })
    ]
}

//Se encarga de manejar las rutas de autenticación
const handler = NextAuth(authOptions);

//Se exporta el handler para que pueda ser usado por el servidor
export { handler as GET, handler as POST}