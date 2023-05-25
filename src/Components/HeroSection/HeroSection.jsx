import Carousel from 'react-bootstrap/Carousel';
import slider2 from '../Images/slideshow/full-slide-2.jpg';
import slider3 from '../Images/slideshow/full-slide-5.jpg';
import slider4 from '../Images/slideshow/slide-1.jpg';
import slider5 from '../Images/slideshow/slide-2.jpg';
import slider6 from '../Images/slideshow/slide-3.jpg';
function HeroSection() {
  return (
    <div>

<Carousel variant="dark">
      
      <Carousel.Item style={{height:'300px',backgroundPosition:'center',backgroundSize:'cover'}}>
        <img
        
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item style={{height:'300px',backgroundPosition:'center',backgroundSize:'cover'}}>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{height:'300px',backgroundPosition:'center',backgroundSize:'cover'}}>
        <img
          className="d-block w-100"
          src={slider4}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{height:'300px',backgroundPosition:'center',backgroundSize:'cover'}}>
        <img
          className="d-block w-100"
          src={slider5}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item style={{height:'300px'}}>
        <img
          className="d-block w-100"
          src={slider6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HeroSection;