import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './view.css'
import Cards from './Cards';


const ViewDetils = () => {
    const detils = useLoaderData()
    const { img_url, name, bio, Numbers_of_recipes, Likes, experience_years, recipes } = detils[0]
    console.log(recipes);
    return (
        <div className='my-5 '>
            <div className='shadow p-3 mb-5 bg-body-tertiary container mx-auto d-flex justify-content-center gap-4 align-items-center p-5 flex-column flex-md-row'>
                <div>
                    <img src={img_url} alt="" className=' img' />
                    <h5>Name : {name}</h5>
                    <p className='w-md-75 w-sm-100'><span className='fs-5 me-2'>A Short Text Of chef :</span>{bio}</p>
                    <p>Liks : {Likes}</p>
                    <p>Numbers of recipes :{Numbers_of_recipes}</p>
                    <p>Experience Years : {experience_years}</p>
                </div>
                <div>
                    <h4 className='bg-danger text-white p-3 text-center'>Chef's recipes</h4>
                    <div className='row row-cols-1 row-cols-md-2 g-2 '>
                        {
                            recipes.map((reci ,index) => <Cards key={index} reci={reci}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetils;