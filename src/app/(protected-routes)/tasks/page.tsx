//Crear un componente de pagina
// prc

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NewTaskForm, TaskCard } from "@/tasks";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";

export default async function TasksPage() {

  const prisma = new PrismaClient();

  const session = await getServerSession(authOptions);
  
  const pendingTasks = await prisma.task.findMany({
    where: {
      complete: false,
      userId: session?.user?.id
    }
  })

  const completedTasks = await prisma.task.findMany({
    where:{
      complete: true,
      userId: session?.user?.id
    }
  })

  // console.log(pendingTasks);

  return (
    <section>
        {/* mb-6 => margin botom*/}
      <h1 className="mb-6">Listado de tareas</h1>

      {/* FORMULARIO PARA NUEVAS TAREAS */}
      <NewTaskForm />

      {/* LISTADO DE TAREAS INCOMPLETAS */}
      <h2 className="mb-4">Tareas Incompletas</h2>
      <div className="tasks__list">
        {
          pendingTasks.map((task) =>(
            <TaskCard key={task.id} task={ task }/>
          ))
        }
      </div>

      {/* LISTADO DE TAREAS COMPLETAS */}
      <h2 className="mb-4">Tareas Completadas</h2>
      <div className="tasks__list">
        {
          completedTasks.map((task) =>(
            <TaskCard key={task.id} task={ task }/>
          ))
        }
      </div>

    </section>
  );
}