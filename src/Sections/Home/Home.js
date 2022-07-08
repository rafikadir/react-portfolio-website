import React from 'react';  
import './Home.scss';
import myImg from './../../Assets/Images/my-bg.png';
import 'animate.css';

const Home = () => {
    return (
        <section id="home" class="home-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-sm-6">
                        <div class="home-text">
                            <h1 class="home-heading animate__animated animate__fadeInUp animate__delay-1s">I'M Rafi Kadir</h1>
                            <h4 class="home-title animate__animated animate__fadeInUp animate__delay-2s">Front End Developer | React | JavaScript</h4>
                            <a href="/#" class="home-btn animate__animated animate__fadeInUp animate__delay-3s">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-6">
                        <div class="home-img text-center  animate__animated animate__bounceInUp">
                            <img src={myImg} alt="banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home;