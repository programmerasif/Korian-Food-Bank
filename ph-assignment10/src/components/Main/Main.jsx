import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../share/Footer/Footer';
import './main.css'
import Nave from '../share/Header/Nave/Nave';

const Main = () => {
    return (
        <div>
            <Nave></Nave>
            <div className='height'> <Outlet /></div>
           
            <Footer /> 
        </div>
    );
};

export default Main;