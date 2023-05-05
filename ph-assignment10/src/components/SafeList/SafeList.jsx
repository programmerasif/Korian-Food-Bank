import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FcLike } from "react-icons/fc";
import { FaAward } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SafeList = ({chef}) => {
    const {id,img_url,name,experience_years,rating,Numbers_of_recipes} = chef
    return (
        <div>
            <div className="mb-5 ">
                
                <Card >
                    
                    <LazyLoadImage src={img_url} effect="blur" alt='https://thumbs.dreamstime.com/b/smoke-floor-isolated-black-background-misty-fog-effect-texture-overlays-text-space-smoke-fog-misty-overltays-effect-134306702.jpg' width={'300px'}/>

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