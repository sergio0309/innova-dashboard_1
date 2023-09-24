import React from 'react';
import { MENU_OPTIONS } from '../constants/menu-options';
import { SideMenuOption } from '..';
import { SideMenuAvatar } from './SideMenuAvatar';
import { LogOutButton } from './LogOutButton';

export const SideMenu = () =>{
    return(
        <nav className='hidden md:flex flex-col w-full shadow-xl shadow-indigo-100 rounded-3xl sm:w-3/12 lg:w-2/12 p-5 bg-white'>
            { /* AVATAR */ }
            <SideMenuAvatar/>

            { /* MENU  OPTIONS */}
            <ul>
                {
                    MENU_OPTIONS.map(option =>(
                        <SideMenuOption key={ option.name }option={option}/>
                    ))
                }
            </ul>
            <div className='flex-1'></div>
            {/* CLOSE SESSION */}
            <LogOutButton/>

        </nav>
    )
}