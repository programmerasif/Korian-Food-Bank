import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FcLike } from 'react-icons/fc';

const FoodCards = ({food}) => {
    
    const {name,picture_url,rating,likes,about} = food
    return (
        <div className='col-md-4 col-sm-12 mx-auto mt-3 '>
             <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={picture_url} style={{ width: '20rem',height: '15rem'}}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>Detils : {about}</p>
          <div>Rattings : {rating}</div>
          <div>Likes :{likes} <FcLike /></div>
        </Card.Text>
        <Button variant="danger">View More Detils</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default FoodCards;