//Guardamos las tareas en este archivo
'use server'

import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async( title: string, description: string,): Promise<Task> => {
    
    const session = await getServerSession(authOptions)

    const task = await prisma.task.create({
        data: {
            title,
            description,
            userId: session!.user!.id
        }
    })

    revalidatePath('/tasks');

    return task;
}

export const remove = async( id: string ): Promise<void> => {
    await prisma.task.delete({
        where: {
           id: id
        }
    })
    revalidatePath('/tasks');
}

export const update = async(id: string, status: boolean): Promise<Task> => {
    const task = await prisma.task.findFirst({
        where: {
            id: id
        }
    });

    if(!task) throw new Error('Task not found');

    const updatedTask = await prisma.task.update({
        where: {
            id: id
        },
        data: {
            complete: status
        }
    })
    revalidatePath('/tasks');
    return updatedTask;
}   