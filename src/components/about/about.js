import React, { useState, useEffect } from 'react';
import aboutUs from './aboutUs.module.css'
import team from '../../images/Josh_Team.jpg'

export default function About() {
     const [offsetY, setOffsetY] = useState(27000);
     const handleScroll = () => setOffsetY(window.pageYOffset);

     useEffect(() => {
          window.addEventListener("scroll", handleScroll);

          return () => window.removeEventListener("scroll", handleScroll);
     }, []);

     return (
          <>
          <div className={aboutUs.about} id='about'>
               <div className={aboutUs.aboutSection}>
                    <div 
                         className={aboutUs.img} 
                         >
          </div>
                    </div>
          <div className={aboutUs.main_container}>
               <div className={aboutUs.about_container}>
                    <h3>About Us</h3>
                    </div>
                    <div className={aboutUs.right}>
                    <p>
                         Our individual stories couldn’t be more different. This newly found chef team, comes from all corners of the US. From various levels of culinary training, our group stems from formal, to in-kitchen education. We have a diverse background in different cuisines; from southern to French fusion, Latin American, and even sushi if you’d like.   At the end of the day, that’s what makes us stronger.                
                         Our combined knowledge and expertise, love for cooking, and passion for bringing people together through food, has made us become a complete dining experience like no other.
                              
                         The goal is to cater to our guests, in every sense of the word.  We strive to make lifelong relationships by connecting with our newfound friends, through providing excellent service, delicious food and impeccable atmosphere.
                    </p>
                    </div>
                    </div>
               </div>
          </>
     )
}
