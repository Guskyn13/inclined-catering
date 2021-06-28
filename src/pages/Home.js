import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar'
import ImageSlider from '../components/image_slider/image_slider'
import Reviews from '../components/reviews/reviews'
import { ReviewsData } from '../components/reviews/reviewsData'
import { SlideData } from '../components/image_slider/SlideData'
import Menu from '../components/menu/menu'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import classes from './pages.module.css'
import menuItems from '../components/menu/menuData'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home({ setSelectedImg }) {
     const [offsetY, setOffsetY] = useState(0);
     const handleScroll = () => setOffsetY(window.pageYOffset);

     useEffect(() => {
          Aos.init()
     }, [])

     useEffect(() => {
          window.addEventListener("scroll", handleScroll);

          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <div className={classes.mainContainer}>
               <div className={classes.heroSection}>
                    <div
                         className={classes.background}
                         style={{ transform: `translateY(${offsetY * 0.5}px)` }}
                    ></div>
               </div>
               <Navbar setSelectedImg={setSelectedImg} />
               <ImageSlider slides={SlideData} />
               <Reviews reviewData={ReviewsData} />
               <Menu menuItems={menuItems} aos="fade" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" />
               <div className={classes.aboutSection} >
                    <div 
                         className={classes.aboutBG}
                         style={{ transform: `translateY(-${offsetY * 1.2 * 0.075}px)` }}
                         >
                    </div>

          <div className={classes.aboutContainer}>
               <div className={classes.title}>
                    <h3>About Us</h3>
                    </div>
                    <div className={classes.right}>
                    <p>
                         Our individual stories couldn’t be more different. This newly found chef team, comes from all corners of the US. From various levels of culinary training, our group stems from formal, to in-kitchen education. We have a diverse background in different cuisines; from southern to French fusion, Latin American, and even sushi if you’d like.   At the end of the day, that’s what makes us stronger.                
                         Our combined knowledge and expertise, love for cooking, and passion for bringing people together through food, has made us become a complete dining experience like no other.
                              
                         The goal is to cater to our guests, in every sense of the word.  We strive to make lifelong relationships by connecting with our newfound friends, through providing excellent service, delicious food and impeccable atmosphere.
                    </p>
                    </div>
                    </div>
               </div>
               {/* <About /> */}
               <Contact />
          </div>
     )
}
