import React, { useEffect, useState } from 'react';
import FoodCards from './FoodCards';
import { FaHotjar} from "react-icons/fa";

const TopRatedFooe = () => {
    const [foods,setFood] = useState([])
    useEffect(() =>{
        fetch(`https://server-6jg7-programmerasif.vercel.app/toprated`)
        .then(res => res.json())
        .then(list => setFood(list))
    },[])
    return (
        <div className='row  container mt-5 mb-5 mt-5'>
            <h4 className='text-danger mx-auto   p-3 text-center '>Our Top Rated Recipe<span className='text-danger'>(Hot)<FaHotjar /> </span> </h4>
            <hr />
            {
                foods.map(food => <FoodCards key={food.id} food={food}/> )
            }
        </div>
    );
};

export default TopRatedFooe;