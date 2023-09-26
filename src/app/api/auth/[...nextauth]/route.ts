import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaClient } from '@prisma/client';
import { signInWithEmailAndPassword } from "@/auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions={

    adapter: PrismaAdapter(prisma) as Adapter,

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
            const dbUser = await prisma.user.findUnique({
                where:{
                    email: token?.email ?? 'not-available'
                }
            });

            token.id = dbUser?.id!;

            return token;
        },
        async session({ newSession, session, token, user}: any){
            // MANEJO DE INFORMACION DE LA SESION EN EL PROYECTO

            if(session && session.user){
                session.user.id = token.id
            }

            return session;
        },
    }
}

//Se encarga de manejar las rutas de autenticación
const handler = NextAuth(authOptions);

//Se exporta el handler para que pueda ser usado por el servidor
export { handler as GET, handler as POST}