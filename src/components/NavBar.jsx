import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {

    return (
        <div className='space-x-5 text-black'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/brands'>Brands</NavLink>
            <NavLink to='/profile'>My-Profile</NavLink>
            <NavLink to='/dev'>About Dev</NavLink>
        </div>
    );
};

export default NavBar;