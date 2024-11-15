// src/pages/Home.js
import React from 'react';
import Slider from 'react-slick';

function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img
                        src="https://www.joinindiannavy.gov.in/images/home_banner/banner_4.jpg"
                        alt="Slide 1"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div>
                    <img
                        src="https://www.joinindiannavy.gov.in/images/home_banner/Mig_01.jpg"
                        alt="Slide 2"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div>
                    <img
                        src="https://www.joinindiannavy.gov.in/images/home_banner/banner_5.jpg"
                        alt="Slide 3"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div>
                    <img
                        src="https://www.joinindiannavy.gov.in/images/home_banner/banner_6.png"
                        alt="Slide 4"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
                <div>
                    <img
                        src="https://www.joinindiannavy.gov.in/images/home_banner/RD_Parade.png"
                        alt="Slide 5"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </Slider>
        </div>
    );
}

export default Home;
