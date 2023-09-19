//cree un componente
'use client'

import { FormEvent, useState } from "react"
import { create } from "../actions/actions";

export const NewTaskForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        create(title, description);
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={ handleSubmit } className='task__form'>
            <div className='mb-4 flex flex-col min-w-md'>
                <label htmlFor="">Titulo</label>
                <input 
                    className='boder border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500'
                    type="text"
                    name='title' 
                    value={ title}
                    onChange={ (e) => setTitle(e.target.value)}
                />
            </div>
            <div className='flex flex-col min-w-md'>
                <label htmlFor="">Descripcion</label>
                <input 
                    className='boder border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500'
                    type="text"
                    name='description'
                    value={ description}
                    onChange={ (e) => setDescription(e.target.value)}
                />
            </div>
            <button className='btn-primary text-center'>Agregar Tarea</button>
        </form>
    )
}
