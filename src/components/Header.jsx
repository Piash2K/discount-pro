import React, { useContext } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="bg-gradient-to-r  from-[#8E44AD]  to-[#6A0DAD] py-6 shadow-lg">
            <div>
                {user && user.displayName && (
                    <div className="text-center text-3xl font-semibold text-white">
                        Welcome, {user.displayName}!
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center px-10 py-6">
                <h2 className="text-3xl font-bold text-white tracking-wide">
                    Discount<span className="text-[#F5B041]">PRO</span>
                </h2>
                <NavBar />
                <div className="space-x-6 flex items-center">
                    {user && user.email ? (
                        <div className="flex items-center gap-4 text-white">
                            <span className="text-lg">{user.email}</span>
                            <img
                                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                                src={user.photoURL}
                                alt="User"
                            />
                            <button
                                onClick={logOut}
                                className="px-4 py-2 rounded bg-[#F5B041] text-white font-semibold hover:bg-[#F39C12] transition duration-200"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <Link to="/login">
                                <button className="px-4 py-2 rounded bg-[#5DADE2] text-white font-semibold hover:bg-[#3498DB] transition duration-200">
                                    Log In
                                </button>
                            </Link>
                            <Link to="/register">
                                <button className="px-4 py-2 rounded bg-[#28B463] text-white font-semibold hover:bg-[#1D8348] transition duration-200">
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
