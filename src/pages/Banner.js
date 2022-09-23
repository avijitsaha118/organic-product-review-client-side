import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bnr1 from './../Images/bnr1.jpg';
import bnr2 from './../Images/bnr2.jpg';
import bnr3 from './../Images/bnr3.jpg';

const Banner = () => {
    return (
        <div>
                <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bnr1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>One Place For All</h5>
          <p>Introduce your addorable pet to the world. 
          <Link to='/register'>
                <button type="button" class="ml-4 w-30 btn btn-light btn-rounded">Join Us</button>
            </Link>
         </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bnr2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bnr3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;