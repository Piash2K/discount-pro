import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const {user}=useContext(AuthContext)

    return (
        <div className='space-x-5 text-black py-4'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/brands'>Brands</NavLink>
            {
                user && <NavLink to='/profile'>My-Profile</NavLink>
            }
            <NavLink to='/dev'>About Dev</NavLink>
        </div>
    );
};

export default NavBar;