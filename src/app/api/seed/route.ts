import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function GET( req:NextRequest ){

    //Borra todas las tareas
    await prisma.task.deleteMany()

    //Borra todos los usuarios
    await prisma.user.deleteMany()
    
    try {
        const user = await prisma.user.create({
            data:{
                name: 'Innova Code',
                email: 'admin@innovacode.com',
                password: bcrypt.hashSync('123456'),
                image: 'https://lh3.googleusercontent.com/a/AAcHTtfNjlwKEavkDynCql_lqI9opNtoUTDJrluOfHYtbCCCmw=s96-c',
                // image: 'https://images4.alphacoders.com/977/thumb-1920-977008.jpg',
                tasks:{
                    createMany:{
                        data:[
                            {
                                title: 'Servidor de Discord',
                                description: 'Crear un servidor para la comunidad'
                            },
                            {
                                title: 'Plataforma de estudiantes',
                                description: 'Crear la nueva plataforma online de estuiantes de Qwik Js y PostgreSQL'
                            }
                        ]
                    }
                }
            }
        }); 

        return NextResponse.json({
            message: 'Success',
            user
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({error})
    }

    

    
}