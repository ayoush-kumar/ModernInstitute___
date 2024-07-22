import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import img01 from './01.jpeg'
import img02 from './002.jpeg'
import img03 from './003.jpeg'
import img04 from './004.jpeg'

const images = [
  img01, 
  img02,
  img03,
  img04
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const goToPrevious = () => {
  //   setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  // };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]); // Dependency array includes currentIndex to reset interval on index change

  return (
    <div className="slider">
      {/* <button onClick={goToPrevious} className="left-arrow">❮</button> */}
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
      {/* <button onClick={goToNext} className="right-arrow">❯</button> */}
    </div>
  );
};

export default HomeSlider;