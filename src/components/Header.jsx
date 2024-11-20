import React, { useContext } from 'react';
import NavBar from './NavBar';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user,logOut} =useContext(AuthContext);
    console.log(user)
    return (
        <div className='flex justify-between'>
            <h2>Coupon</h2>
            <NavBar></NavBar>
            <div className='space-x-4'>
                {
                    user && user.email? <div>{user.email} <img className='w-20' src={user.photoURL} alt="" /> <button onClick={logOut} >Logout</button></div>:<div>
                        <NavLink to='/login'><button className='btn'>Login</button></NavLink>
                        <NavLink to='/register'><button className='btn'>Rrgister</button></NavLink>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Header;