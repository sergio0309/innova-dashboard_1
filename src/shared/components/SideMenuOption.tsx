'use client'
import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation' 

interface Props {
    option:{
        name: string;
        path: string;
        icon: JSX.Element;
    }
}

export const SideMenuOption: FC <Props> = ({option}) => {
    
    const pathName = usePathname();

    return (
        <li>
            <Link href={option.path} className={ `nav__menu--item ${ pathName == option.path ? 'nav__link--active' : '' }` }>
                <span>
                    {option.icon}
                </span>
                <span className='hidden md:block'>
                    {option.name}
                </span>
            </Link>
        </li>
    );
}