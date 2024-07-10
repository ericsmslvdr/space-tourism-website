import logo from '../../assets/shared/logo.svg';
import iconMenu from '../../assets/shared/icon-hamburger.svg';
import iconClose from '../../assets/shared/icon-close.svg';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuButton = ({ toggleMenu, icon }) => {
    return (
        <button onClick={toggleMenu} className={`relative z-10 md:hidden`}>
            <img src={icon} alt="Icon button" className='w-6 h-6' />
        </button>
    )
}

const NavLinks = () => {
    const location = useLocation();
    const { pathname } = location;

    const links = [
        {
            'route': '/',
            'count': '00',
            'name': 'HOME'
        },
        {
            'route': '/destination',
            'count': '01',
            'name': 'DESTINATION'
        },
        {
            'route': '/crew',
            'count': '02',
            'name': 'CREW'
        },
        {
            'route': '/technology',
            'count': '03',
            'name': 'TECHNOLOGY'
        },
    ]

    return (
        <ul className='mt-36 pl-11 flex flex-col gap-10 md:mt-0 md:flex-row md:pt-7 md:pr-10 md:gap-10 lg:pt-10'>
            {links.map((link, index) => (
                <Link key={index} to={link.route} className={`md:border-r-0 hover:md:border-b-4 ${pathname === link.route ? 'md:border-b-4 border-r-4' : ''}`}>
                    <li><span className='pr-4 md:pr-2'>{link.count}</span>{link.name}</li>
                </Link>
            ))}
        </ul>
    )
}


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu state: ", isMenuOpen);
    }

    return (
        <header className='flex items-center justify-between h-20 px-6 md:pr-0 lg:pt-6 lg:h-32 lg:pl-10'>
            <Link to={'/'}><img className='h-10 w-10' src={logo} alt="" /></Link>
            <div className='border border-neutral-600 hidden w-2/5 absolute left-28 z-10 lg:block'></div>
            <nav className='md:glass-white md:pr-6 md:w-full md:h-full md:ml-6 lg:w-3/5 lg:pr-0'>
                {isMenuOpen ? (
                    <MenuButton icon={iconClose} toggleMenu={toggleMenu} />
                ) : (
                    <MenuButton icon={iconMenu} toggleMenu={toggleMenu} />
                )}
                <div className={`${isMenuOpen ? 'block glass-dark' : 'hidden'} absolute top-0 right-0 bottom-0 w-2/3 md:static md:flex md:justify-end md:w-full md:h-full`}>
                    <NavLinks />
                </div>
            </nav>
        </header >
    )
}

export default Header