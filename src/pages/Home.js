import React from 'react';
import '../styles/home.css';
import '../styles/shared.css'


function Home() {
    return (
        <>
    <section className='video-container'>
        <div className="video">
            <video id="slider" autoPlay muted loop>
                <source src="/videos-myAnimeVid.MP4" type="video/mp4" />
            </video>
            {/* <ul className="navigation">
                <li onClick={() => videoUrl('videos/myAnimeVid.mp4')}>
                <img src="images/thumb5.png" alt="Video Thumbnail" />
                </li>
                <li onClick={() => videoUrl('videos/Boxing.mp4')}>
                <img src="images/thumb2.png" alt="Video Thumbnail" />
                </li>
                <li onClick={() => videoUrl('videos/Ladylift.mp4')}>
                <img src="images/thumb3.png" alt="Video Thumbnail" />
                </li>
            </ul> */}
        </div>
  </section>
  <div className="mainQuote">
  <h2>
    {" "}
    "No matter how hard or impossible it is, never lose sight of your goal."{" "}
    <br /> - Monkey D Luffy
  </h2>
</div>
{/* Highlighted Product Grid */}

<div id="recProd">
  <h2> RECOMMENDED PRODUCTS </h2>
</div>
<section className="grid-container">
  <div className="grid-item">
    <a href="Shop.html">
      <img src="images/squatRack.jpeg" alt="Squat Rack" />
    </a>
    <h3> Pro Power Rack</h3>
    <p> $1399.00</p>
  </div>
  <div className="grid-item">
    <a href="Shop.html">
      <img src="images/ironPlates.jpeg" alt="Squat Rack" />
    </a>
    <h3> Cast Iron Plates</h3>
    <p> $20.00 - $450.00</p>
  </div>
  <div className="grid-item">
    <a href="Shop.html">
      <img src="images/legpress.jpeg" alt="Squat Rack" />
    </a>
    <h3> Leg Press Hack Squat</h3>
    <p> $1890.00</p>
  </div>
</section>
{/* motivation quote */}


<div className="motivation">
  <h2> WORK HARD, <br /> TRAIN HARDER</h2>
</div>

<section className="learn-container">
    <div className="info">
        <div class="info-image">
            <img src="images/squat.jpeg" width= '90%' alt="Powerlifter About to Squat" />
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