import React from 'react';
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
import '../styles/home.css';
// import '../styles/shared.css';
import ImageSlider from "../components/ImageSlider";
import { Link } from 'react-router-dom';


function Home() {

  const slides = [
    { url: "http://localhost:3000/images/luffy.jpeg", title: "luffy" },
    { url: "http://localhost:3000/images/battle_ropes.jpg", title: "battle ropes" },
    { url: "http://localhost:3000/images/naruto.jpeg", title: "naruto" },
    { url: "http://localhost:3000/images/tatted_woman.jpg", title: "tatted woman" },
    { url: "http://localhost:3000/images/ichigo.jpeg", title: "ichigo" },
  ];
  
  const containerStyles = {
    width: "600px",
    height: "280px",
    margin: "25px auto",
  };

  return (
        <>
    <section className='video-container'>
        <div className="video">
            <video id="slider" autoPlay muted loop>
                <source src="http://localhost:3000/videos/myAnimeVid.MP4" type="video/mp4" />
            </video>
        </div>
  </section>
  <div className="mainQuote">
    <h2>
        "No matter how hard or impossible it is, never lose sight of your goal."
        <br /> - Monkey D Luffy
    </h2>
  </div>
{/* Highlighted Product Grid */}

<div id="recProd">
  <h2> RECOMMENDED PRODUCTS </h2>
</div>

{/* Trying to map filtered products but run into errors */}
{/* 
<div className="grid-container">
{filterData.map((product) => {
  return (
    <div className="grid-item">
      <img src={product.image} alt={product.title} />
      <h3> {product.title}</h3>
      <p> ${product.price}</p>
  </div>
  )
})};
</div>  */}



<section className="grid-container">
  <div className="grid-item">
    <Link to="/products" >
      <img src="https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dwa07834a4/images/hi-res/Fitness/401248_01.jpg?sw=800&sh=800" alt="Squat Rack" />
    </Link>
    <h3> Pro Power Rack</h3>
    <p> $1399.00</p>
  </div>
  <div className="grid-item">
    <Link to="/products" >
      <img src="https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dwfa7e0f20/images/hi-res/Fitness/CPLATE_AF_01.jpg?sw=800&sh=800" alt="Squat Rack" />
    </Link>
    <h3> Cast Iron Plates</h3>
    <p> $20.00 - $450.00</p>
  </div>
  <div className="grid-item">
    <Link to="/products" >
      <img src="https://www.titan.fitness/dw/image/v2/BDBZ_PRD/on/demandware.static/-/Sites-masterCatalog_Titan/default/dw47f28680/images/hi-res/Fitness/401486_01.jpg?sw=800&sh=800" alt="Squat Rack" />
    </Link>
    <h3> Leg Press Hack Squat</h3>
    <p> $1890.00</p>
  </div>
</section>


<div className='image-slider'>
      {/* <h1>Hello monsterlessons</h1> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>



{/* motivation quote */}
<section className="motivation">
  <h2> WORK HARD, <br /> TRAIN HARDER</h2>
</section>

<section className="learn-container">
    <div className="info">
        <div class="info-image">
            <img src="http://localhost:3000/images/pl_squat.jpeg" width= '90%' alt="Powerlifter About to Squat" />
        </div>

        <div className="learn-text">
            <h2> Learn More About The Benefits of Strength Training </h2>
            <p> Weight lifting is an excellent form of exercise that can benefit people of all ages and fitness levels. It's a great way to build strength, increase muscle mass, and improve overall health and fitness. Weight lifting can also help with weight loss and can boost your metabolism, making it easier to maintain a healthy weight.</p>
            <p> So if you're looking for a new way to improve your physical fitness, give weight lifting a try! With proper instruction and guidance, you may be surprised at how much you enjoy it and how much it can improve your overall health and well-being.</p>
            <button
            onClick={() =>
                (window.location.href =
                "https://www.hsph.harvard.edu/news/hsph-in-the-news/strength-training-time-benefits/#:~:text=%E2%80%9CSuch%20exercises%20also%20improve%20glucose,%2C%20which%20lowers%20mortality%20risk.%E2%80%9D")
            }
            >
            {" "}
            READ MORE{" "}
            </button>
        </div>
    </div>
</section>

</>
    );
}

export default Home;