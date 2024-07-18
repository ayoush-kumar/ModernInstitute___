import React from 'react';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './key.jsx'; // Import your custom arrows
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

import { useNavigate } from 'react-router-dom';

const CardSlider = () => {


  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/listofcourses');
  };


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
      title: "Modern Institute Of Nursing",
      info: "Modern Institute Of Nursing Offers 3 courses for 2023-2024 and 2024-2025",
      image: img1
    },
    { 
      title: "Modern Institute Of Pharmacy",
      info: "Modern Institute Of Pharmacy Offers 2 courses for 2023-2024 and 2024-2025",
      image: img2
    },
    {
       title: "Modern Institute Of Paramedical",
      info: "Modern Institute Of Nursing Offers 3 courses for 2023-2024 and 2024-2025",
      image: img3 
    },
    { title: "Modern Institute Of Nursing",
      info: "Modern Institute Of Nursing Offers 3 courses for 2023-2024 and 2024-2025",
      image: img1 },
    { title: "Modern Institute Of Pharmacy",
      info: "Modern Institute Of Pharmacy Offers 2 courses for 2023-2024 and 2024-2025", 
      image: img2 },
    { title: "Modern Institute Of Paramedical",
      info: "Modern Institute Of Paramedical Sciences Offers 12 courses for 2023-2024 and 2024-2025", 
      image: img3 },
  ];

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} style={{ padding: "10px" }}>
          <div style={{ border: "2px solid black", width: '80%', borderRadius: "15px", overflow: "hidden", textAlign: "center" , marginLeft: "50px", marginRight: "50px"}}>
            <img src={card.image} alt={card.title} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
            
            <h2 style={{ margin: "10px 0", color:"#2658A4" }}>{card.title}</h2>
            <h3 style={{ margin: "10px 0" }}>{card.info}</h3>

            <button onClick={handleClick}>
              Show Courses
            </button>

          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;























// import React from 'react'
// import { FindOut } from '../../../Data/AboutUs/FindOut';
// import styles from '../../../style/layout.module.css';
// import { Link } from 'react-router-dom';

// const FindOutMore = () => {
//   return (
//     <>
//        <div className={styles.findOutMoreCont}>
//          {
//           FindOut.map((item,index) => (
//             <div key={index} className={styles.innerFindOutMoreCont}>
//                  <img src={item.image} alt={item.title} />
//                  <div className={styles.findOutCardCont}>
//                   <span className={styles.findOutCardTitle}>{item.title}</span>
//                   <span className={styles.findOutCardDes} >{item.des}</span>
//                   <Link to="/listofcourses"><button className={styles.findOutCardButton}>Show Courses</button></Link>
//                  </div>
//             </div>
//           ))
//          }
//        </div>
      
//   </>
//   )
// }

// export default FindOutMore;
