import React, { useContext } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user,logOut} =useContext(AuthContext);
    console.log(user)
    return (
        <div className='flex justify-between items-center bg-purple-700 px-8 py-4'>
            <h2 className='text-2xl font-bold text-black'>Discount PRO</h2>
            <NavBar></NavBar>
            <div className='space-x-4 text-black'>
                {
                    user && user.email? <div>{user.email} <img className='w-20' src={user.photoURL} alt="" /> <button onClick={logOut} >Logout</button></div>:<div>
                        <Link to='/login'><button className='btn'>Log In</button></Link>
                        <Link to='/register'><button className='btn'>Rrgister</button></Link>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Header;