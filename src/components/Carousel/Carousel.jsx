import React from 'react';
import first from "../../assets/images/first.jpg"
import second from "../../assets/images/second.jpg"
import third from "../../assets/images/third.jpg"
import { Carousel } from 'react-bootstrap';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgStyle"
          src={first}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cumilla Polytechnic Institute</h3>
          <p>This is the place where we learn.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgStyle"
          src={second}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Beautiful Sporting Ground</h3>
          <p>People Enjoys there Moment in here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgStyle"
          src={third}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Class Room</h3>
          <p>Class Rooms are the most important things for us. We get to learn valuable life lessons in here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
