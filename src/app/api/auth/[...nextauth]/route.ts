import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
// import { Adapter } from "next-auth/adapters";

import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from "@auth/prisma-adapter";
import { signInWithEmailAndPassword } from "@/auth";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions={

    adapter: PrismaAdapter(prisma),

    pages:{
        signIn: '/auth/login',
    },

    session: {
        strategy: 'jwt'
    },

    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {label: "Email", type: "email", placeholder: "correo@correo.com"},
                password: {label: "Password", type: "password", placeholder: "*********"}
            },
            //tenemos que pasar un funccion
            async authorize(credentials, req){
                const user = await signInWithEmailAndPassword(credentials!.email, credentials!.password);
                return user;
            }
        }),
    ],

    //Callbacks son funciones que se ejecutan en ciertos momentos del flujo de autenticación
    //Se ejecuta cuando se inicia sesión
    callbacks:{
        async signIn({user}){
            //Manejo de roles - Bloqueo de usuarios
            return true;
        },
        async jwt({ token, user, account}){
            // MANEJO DE INFORMACION DEL TOKEN
            return token;
        },
        async session({ newSession, session, token, user}){
            // MANEJO DE INFORMACION DE LA SESION EN EL PROYECTO
            return session;
        }
    }
}

//Se encarga de manejar las rutas de autenticación
const handler = NextAuth(authOptions);

//Se exporta el handler para que pueda ser usado por el servidor
export { handler as GET, handler as POST}