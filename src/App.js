import React from 'react';
import { Router, Link } from 'react-router-dom';
import Header from './templates/header/Header';
import 'jquery';
import 'bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div>
    <Header></Header>

    <Carousel className="ominitrix">
  <Carousel.Item>
    <img
      className="d-block w-30"
      src="./img/bg-img/2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 >First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/bg-img/3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    </div>
  );
}

export default App;
