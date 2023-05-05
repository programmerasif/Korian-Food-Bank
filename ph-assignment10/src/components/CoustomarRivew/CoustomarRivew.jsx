import React from 'react'
import personOne from '../../assets/personone.webp'
import personTwo from '../../assets/persontwo.webp'
import personThree from '../../assets/personthree.jpg'
import { FcBusinessman } from 'react-icons/fc';
import { Card } from 'react-bootstrap';

const CoustomarRivew = () => {
    return (
        <div className='mb-5'>
          <h3 className='text-center mt-5 mb-5 pt-5 text-danger'> Our Happiest Customer <FcBusinessman></FcBusinessman> </h3>
          <hr className='mb-5'/>
        <div className='row'>
            <Card className='col-md-4 col-sm-12'>
      <Card.Img variant="top" src={personOne} />
      <Card.Body>
        <Card.Title>Joon</Card.Title>
        <Card.Text>
        "I was impressed by the attention to detail at this restaurant. The decor was lovely and sophisticated, and the food was clearly prepared with care and attention. The staff were also knowledgeable and friendly, making sure that we had a great time."
        </Card.Text>
      </Card.Body>
    </Card>
            <Card className='col-md-4 col-sm-12'>
      <Card.Img variant="top" src={personTwo} />
      <Card.Body>
        <Card.Title>Minh</Card.Title>
        <Card.Text>
        "This restaurant has a great atmosphere, with a fun and lively vibe that makes it a great place to hang out with friends. The food was also delicious, with a range of tasty options that were perfect for sharing. The service was also great, with attentive and helpful staff who made sure that we had everything we needed."
        </Card.Text>
      </Card.Body>
    </Card>
            <Card className='col-md-4 col-sm-12'>
      <Card.Img variant="top" src={personThree} />
      <Card.Body>
        <Card.Title>Seojoon</Card.Title>
        <Card.Text>
        "The service at this restaurant was exceptional, with staff who went above and beyond to make us feel welcome and taken care of. The menu was also great, with plenty of choices for everyone in our party. I would definitely recommend this place to anyone looking for a great meal and a great experience."
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
        </div>
    );
};

export default CoustomarRivew;