import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './view.css'

const ViewDetils = () => {
    const detils = useLoaderData()
    console.log(detils[0].img_url);
    const {img_url,name} = detils[0]
    return (
        <div>
           <div className='container mx-auto d-flex justify-content-center  align-items-center'>
           <div>
           <img src={img_url} alt="" className=' img'/>
           <h5>Name : {name}</h5>
           </div>
           </div>
        </div>
    );
};

export default ViewDetils;