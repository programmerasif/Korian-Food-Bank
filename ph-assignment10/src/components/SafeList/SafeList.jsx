import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";
import { FaAward } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SafeList = ({chef}) => {
    const {id,img_url,name,experience_years,rating,Numbers_of_recipes} = chef
    return (
        <div>
            <div className="mb-5 ">
                
                <Card >
                    <Card.Img variant="top" src={img_url} />
                   
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           Experience : {experience_years} Years
                        </Card.Text>
                        <Card.Text>
                        Numbers of recipes : {Numbers_of_recipes}
                        </Card.Text>
                        <Card.Text>
                        Likes : 1.5k <FcLike />
                        </Card.Text>
                        
                        <div className='d-flex justify-content-between align-items-center'>
                        <Link to={`/safelist/${id}`}><Button variant="danger">View Recipes</Button></Link>
                        <h5 >Ratings : <span className='text-secondary'>{rating} <FaAward /></span> </h5>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            
        </div>
    );
};

export default SafeList;