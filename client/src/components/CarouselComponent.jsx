import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const CarouselComponent = () => {
  return (
   
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=" https://images.pexels.com/photos/9027745/pexels-photo-9027745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=" https://images.pexels.com/photos/9027745/pexels-photo-9027745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=" https://images.pexels.com/photos/9027745/pexels-photo-9027745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default CarouselComponent