'use client'
import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'
import { signOut } from 'next-auth/react'

export const LogOutButton = () => {

    const closeSession = () => {
        signOut()
    }
    return (
        <button onClick={closeSession} className='nav__menu--item w-full'>
            <span> <IoLogOutOutline size={20}/> </span>
            <span> Cerrar sesión </span>
        </button>
    )
}
