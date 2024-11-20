import React, { useContext } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='py-5'>
            <header>
                <Header></Header>
                <Outlet></Outlet>
            </header>
        </div>
    );
};

export default HomeLayout;