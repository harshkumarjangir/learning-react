import React from 'react'
import img2 from '../../images/hero.jpg'
import '../hero/hero.css'
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

const Hero = () => {
    return (
        <>
            <section className="hero" id='hero'>
                <div className="hero-content">
                    <h3><span>Hi,</span> This is a Picture Site</h3>
                    <h1>Free Stock Images</h1>
                    <h3>Hi, This is a <span>Picture Site</span></h3>
                    <p>Here you get Stock Free Images</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi incidunt atque laudantium molestias beatae a dolorum maiores debitis eveniet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, expedita. Nisi magnam laudantium libero autem maiores accusamus commodi, id similique.</p>

                    <div className="social-media">
                        <a href="#"><SlSocialGithub /></a>
                        <a href="#"><SlSocialLinkedin /></a>
                        <a href="#"><SlEnvolope /></a>
                        <a href="#">W</a>
                        <a href="#"><SlSocialInstagram /></a>
                    </div>
                    <a href="#"><button className='btn'>Pictures</button></a>
                </div>
                <div className="hero-img">
                    <img src={img2} alt="hero image" />
                </div>
            </section>
        </>
    )
}

export default Hero;