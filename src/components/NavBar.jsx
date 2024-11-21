import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { IoHome } from 'react-icons/io5';
import { MdBrandingWatermark } from 'react-icons/md';
import { FaInfoCircle, FaRegUserCircle } from 'react-icons/fa';

const NavBar = () => {
    const {user}=useContext(AuthContext)

    return (
        <div className='space-x-5 text-black py-4 flex justify-center items-center flex-wrap'>
            <NavLink to='/' className='flex justify-center items-center gap-1'><IoHome></IoHome> Home</NavLink>
            <NavLink to='/brands' className='flex justify-center items-center gap-1'><MdBrandingWatermark></MdBrandingWatermark> Brands</NavLink>
            {
                user && <NavLink to='/profile' className='flex justify-center items-center gap-1'><FaRegUserCircle></FaRegUserCircle> My-Profile</NavLink>
            }
            <NavLink to='/dev' className='flex justify-center items-center gap-1'><FaInfoCircle></FaInfoCircle> About Dev</NavLink>
        </div>
    );
};

export default NavBar;