import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//Listar tareas
export async function GET(request: Request){

    const tasks = await prisma.task.findMany();
    return NextResponse.json(tasks);
}

//Crear nueva tarea

export async function POST( request: Request ){
    try {
        //recibo los parametros title y description
        const body:{title: string, description: string}  = await request.json();

        //trim() elimina los espacios en blanco
        if(body.title.trim()==='' || body.description.trim()===''){
            return NextResponse.json(
                {message: 'Todos los campos son obligatorios'}, 
                {status: 400}
            )
        }

        const task = await prisma.task.create({
            data: body
        })

        return NextResponse.json(task);
    } catch (error) {
        return NextResponse.json(error, { status: 400 });
    }
}