import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

export const SideMenuAvatar = async () => {

    const session = await getServerSession(authOptions);

    const image = session?.user?.image ?? 'https://m.media-amazon.com/images/I/61S8gU2tZES._AC_UF894,1000_QL80_.jpg';
    const name = session?.user?.name ?? 'Nombre de usuario';
    const email = session?.user?.email ?? 'example@example.com';

    return (
        <div className='nav__menu--avatar'>
            <Image
                src={image}
                className='rounded-full object-cover max-w-[80px]'
                width={100}
                height={100}
                alt={name}
            />
            <div>
                <p className='text-lg font-bold text-slate-500'> {name} </p>
                <p className='text-sm font-bold text-slate-400'> {email} </p>
            </div>
        </div>
    )
}
