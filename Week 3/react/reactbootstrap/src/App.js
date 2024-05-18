import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Carousel>
      <Carousel.Item>
        <center>
        <img
          src="https://www.hindustantimes.com/ht-img/img/2023/07/03/1600x900/Attack-on-Titan-Characters-1_1688407700077_1688407709425.webp"
          alt="First slide"
        /></center>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <center>
        <img
          src="https://www.lamaruniversitypress.com/_files/images/2022/erased-teaser.jpg" alt="Second slide"
        /> </center>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> <center>
        <img
          src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2023/09/death-note-exhibition-724x1024.jpg"
          alt="Third slide"
        /> </center>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default App;
