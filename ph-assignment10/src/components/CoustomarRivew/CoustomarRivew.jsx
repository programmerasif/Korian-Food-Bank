import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import img from '../../assets/bgImg.jpg'
import personOne from '../../assets/personone.webp'
import personTwo from '../../assets/persontwo.webp'
import personThree from '../../assets/personthree.jpg'
import { FcBusinessman } from 'react-icons/fc';

const CoustomarRivew = () => {
    return (
        <div>
          <h3 className='text-center mt-5 pt-5 text-danger'> Our Happest Coustomer <FcBusinessman></FcBusinessman> </h3>
          <hr className='mb-5'/>
<Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <img src={personOne} alt="" />
          <p>"I was impressed by the attention to detail at this restaurant. The decor was lovely and sophisticated, and the food was clearly prepared with care and attention. The staff were also knowledgeable and friendly, making sure that we had a great time."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img}
          alt="Second slide"
        />
        <Carousel.Caption>
        <img src={personTwo} alt="" />
          <p>"This restaurant has a great atmosphere, with a fun and lively vibe that makes it a great place to hang out with friends. The food was also delicious, with a range of tasty options that were perfect for sharing. The service was also great, with attentive and helpful staff who made sure that we had everything we needed."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img}
          alt="Third slide"
        />
        <Carousel.Caption>
        <img src={personThree} alt="" />
          <p>
          "The service at this restaurant was exceptional, with staff who went above and beyond to make us feel welcome and taken care of. The menu was also great, with plenty of choices for everyone in our party. I would definitely recommend this place to anyone looking for a great meal and a great experience."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default CoustomarRivew;