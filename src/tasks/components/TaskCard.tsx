'use client'

import { Task } from '@prisma/client';
import React from 'react'
import { remove, update } from '../actions/actions';

interface Props {
    task: Task;
}

export const TaskCard = ( {task} : Props ) => {
  return (
    <div className="task__card">
        <h3>{ task.title }</h3>
        <p>{ task.description }</p>
        <p>{ JSON.stringify(task.createdAt) }</p>
        <div className='flex items-center gap-3'>
            <button
                onClick={ () => update(task.id, !task.complete)}
                className="btn-primary"
            >
                { task.complete ? 'No completa' : 'Completada' }
            </button>
            <button 
                onClick={ () => remove(task.id)}
                className='btn-primary'
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}
