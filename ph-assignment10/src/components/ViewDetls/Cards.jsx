import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ reci }) => {
    console.log(reci);
    const { name, ingredients, description,rating } = reci
    return (
        <>
            <div className="card">
                <img src="" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p><span className='text-danger'>Ingredients</span> : {ingredients}</p>
                    <p className="card-text"><span className='text-danger '>Cooking-method </span> : {description.slice(0, 80)} ...</p>
                </div>
                <div className='d-flex justify-content-between align-items-center py-3'>
                    <p>Ratings : {rating}</p>
                    <button className='btn btn-danger'>Favourit</button>
                </div>
            </div>
        </>
    );
};

export default Cards;