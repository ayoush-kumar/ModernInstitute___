import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './key.jsx'; // Import your custom arrows
import img1 from './classroom.png'
import img2 from './campus.png'
import img3 from './convocation.png'

const UniversityCards = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cards = [
    { 
      title: "Classroom",
      
      image: img1
    },
    { 
      title: "Campus",
      image: img2
    },
    {
       title: "Convocation",
      image: img3 
    }
  ];

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} style={{ padding: "10px" }}>
          <div style={{ border: "2px solid black", width: '80%', borderRadius: "15px", overflow: "hidden", textAlign: "center" , marginLeft: "50px", marginRight: "50px"}}>
            <img src={card.image} alt={card.title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            
            <h2 style={{ margin: "10px 0", color:"#2658A4" }}>{card.title}</h2>
            <h3 style={{ margin: "10px 0" }}>{card.info}</h3>

          </div>
        </div>
      ))}
    </Slider>
  );
};

export default UniversityCards;


