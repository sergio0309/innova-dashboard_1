import { IoHomeOutline, IoServerOutline } from 'react-icons/io5'
import { GoDeviceDesktop } from 'react-icons/go'
import { BsJournalCheck } from 'react-icons/bs'

export const MENU_OPTIONS =[
    {
        name: 'Inicio',
        path: '/',
        icon: <IoHomeOutline size={20} />
    },
    {
        name: 'Server Side Renderi',
        path: '/server-side',
        icon: < IoServerOutline size={20} />
    },
    {
        name: 'Client Side Renderi',
        path: '/client-side',
        icon: <GoDeviceDesktop size={20} />
    },
    {
        name: 'Tasks',
        path: '/tasks',
        icon: <BsJournalCheck size={20} />
    }
]