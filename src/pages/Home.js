import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../Styles/Home.css'
import Teams from './Teams'
import carouselone from '../Assets/carousel-1.jpg'
import carouseltwo from '../Assets/carousel-2.jpg'
import carouselthree from '../Assets/carousel-3.jpg'

function Home() {
  return (
    <div>
      <Carousel className='Carousel'>
        <Carousel.Item className='Carousel.item'>
          <img
            className="d-block w-100"
            src={carouselone}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='Carousel.item'>
          <img
            className="d-block w-100"
            src={carouseltwo}
            alt="Second slide" 
          />
        </Carousel.Item>
        <Carousel.Item className='Carousel.item'>
          <img
            className="d-block w-100"
            src={carouselthree}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Teams/>   
    </div>      
  )     
}     
    
export default Home