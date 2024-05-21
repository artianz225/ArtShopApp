import { useState } from 'react';
import '../Components/MainPageCarousel.css';
import Main_page_slider_one from '../images/main-page-slider-one.png';
import Main_page_slider_two from '../images/main-page-slider-two.png';
import Main_page_slider_three from '../images/main-page-slider-three.png';

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

function MainPageCarousel() {

  const [featuredSlides, setFeaturedSlides] = useState([
    {
      id: 1,
      img: 'https://cdn-prd-strapi.debutify.com/Product_Page_Design_Done_Right_Header_ab0632898f.png',
    },
    {
      id: 2,
      img: 'https://cedcommerce.com/blog/wp-content/uploads/2021/04/Shopping-in-reels.jpg',
    },
    {
      id: 3,
      img: 'https://media.licdn.com/dms/image/D5612AQEDWZ1OBDxuyg/article-cover_image-shrink_720_1280/0/1679506836578?e=2147483647&v=beta&t=dRIYH0nG2T3niS9PnjKogHDdy9gH8JdJf-nFpTVoIxA',
    },
  ])

  const [currentSlide, setCurrentSlide] = useState(1);

  const prevFeaturedImage = () => {
    setCurrentSlide(prev => prev -1)

    if (currentSlide <= 1) {
      setCurrentSlide(3)
    }
  }

  const nextFeaturedImage = () => {
    setCurrentSlide(prev => prev +1);

    if ( currentSlide >= 3) {
      setCurrentSlide(1)
    }
  }

  return (
      <div className="featured-images-container">
          <div onClick={prevFeaturedImage} className='prev-btn'><MdArrowBackIosNew /></div>
          {featuredSlides.map((featured) => (
            <div key={featured.id} className={featured.id === currentSlide ? 'animated-slide active' : 'animated-slide'}>
            {featured.id === currentSlide && (
            <div className='featured-images-wrapper'>
            <img src={featured.img} alt=""/>
            </div>
            )}
            </div>
          ))}
          <div onClick={nextFeaturedImage} className='next-btn'><MdArrowForwardIos /></div>
        </div>
  )
}

export default MainPageCarousel
