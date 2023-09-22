'use client'
import { signIn } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import { IoLogoGithub } from 'react-icons/io5'

export const LoginForm = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const handleSubmit = (e : FormEvent) =>{
      e.preventDefault();
      console.log( {email, password})

      

      //llamamos al metodo signIn y decimos que llamaremos
      //al metodo credentials
      //pasamos un objeto con los datos que queremos enviar
      signIn('credentials', {email, password})
    }

    return (
      <>
        <form onSubmit={handleSubmit} className='login__form'>
          <div className='mb-3 flex flex-col min-w-md'>
            <label className='text-slate-500' htmlFor="email">Correo Electronico:</label>
            <input 
              id='email'
              className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500'
              type="text"
              value={email}
              onChange={ (e) => setemail(e.target.value) }
            />
          </div>
          <div className='mb-3 flex flex-col min-w-md'>
            <label className='text-slate-500' htmlFor="email">Contraseña:</label>
            <input 
              id='password'
              className='border border-slate-300 rounded-lg py-2 px-4 focus:outline-indigo-500'
              type="password"
              value={password}
              onChange={ (e) => setpassword(e.target.value) }
            />
          </div>
          
          <button className='btn-primary w-full' type='submit'>
            Iniciar Sesion
          </button>

          <div className='flex items-center gap-4 mt-4'>
            <div className='border-t border-slate-300 w-full'></div>
            <p className='text-slate-300'>or</p>
            <div className='border-t border-slate-300 w-full'></div>
          </div>
        </form>
        <button 
          onClick={ ()=> signIn('github') } 
          className='max-w-md mx-auto btn-primary w-full flex items-center justify-center gap-2'
          type='submit'  
        >
          GitHub
          <IoLogoGithub size={25}/>
        </button>
      </>
    )
}
