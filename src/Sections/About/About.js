import React from 'react';
import './About.scss';
import myImg from './../../Assets/Images/rafikadir.jpg';
import { GitHub, Linkedin, Facebook, Twitter, Instagram } from 'react-feather';


const About = () => {
  return (
    <section id="about" class="about-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="aboout-img">
                            <img class="wow animate__fadeInUp" data-wow-duration="1s" src={myImg} alt="me" />
                        </div>
                    </div>

                    <div class="col-md-7 offset-lg-1">
                        <div class="about-text">
                            <div class="row">
                                <div class="col-lg-4 col-4">
                                    <ul class="info">
                                        <li class="font-weight-bold">
                                            Name
                                        </li>
                                        <li class="font-weight-bold">
                                            E-mail
                                        </li>
                                        <li class="font-weight-bold">
                                            Github
                                        </li>
                                        <li class="font-weight-bold">
                                            Location
                                        </li>
                                    </ul>
                                </div>  
                                <div class="col-lg-8 col-8">
                                    <ul>
                                        <li>
                                            <span>:</span>
                                            MD. Rafi Kadir
                                        </li>
                                        <li>
                                            <span>:</span>
                                            rafikadir2000@gmail.com
                                        </li>
                                        <li>
                                            <span>:</span>
                                            https://github.com/rafikadir
                                        </li>
                                        <li>
                                            <span>:</span>
                                            Bangladesh
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <h4>I am Rafi Kadir, Web Developer</h4>
                                    <p>I am Rafi kadir and I am from Bangladesh. Taking Web Development as a profession not only fulfills my pocket but also my heart because it has been my passion since my early teenage.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="social-links">
                                        <h5>Find Me on Social Media:</h5>
                                        <ul>
                                            <li>
                                                <a target="_blank" rel='noreferrer' href="https://github.com/rafikadir/"><GitHub className='icon'/></a>
                                            </li>
                                            <li>
                                                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/rafikadir/"><Linkedin className='icon'/></a>
                                            </li>
                                            <li>
                                                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/rafikadir11"><Facebook className='icon'/></a>
                                            </li>
                                            <li>
                                                <a target="_blank" rel='noreferrer' href="https://twitter.com/i_am_rafikadir"><Twitter className='icon'/></a>
                                            </li>
                                            <li>
                                                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/i_am_rafikadir/"><Instagram className='icon'/></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
export default About;