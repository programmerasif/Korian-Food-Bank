import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SafeList = ({chef}) => {
    console.log(chef);
    const {img_url,name,experience_years,rating,country,Numbers_of_recipes} = chef
    return (
        <div>
            <div className=" ">
                
                <Card >
                    <Card.Img variant="top" src={img_url} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           Experience : {experience_years}
                        </Card.Text>
                        <Card.Text>
                        Numbers of recipes : {Numbers_of_recipes}
                        </Card.Text>
                        <Card.Text>
                        Likes : 1.5k
                        </Card.Text>
                        
                        <Button variant="danger">View-Detils</Button>
                    </Card.Body>
                </Card>
                </div>
            
        </div>
    );
};

export default SafeList;