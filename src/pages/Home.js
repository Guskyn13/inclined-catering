import React from 'react';
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



export default function Home({ setSelectedImg }) {
     return (
          <div className={classes.mainContainer}>
               <Navbar setSelectedImg={setSelectedImg}/>
               <ImageSlider slides={SlideData} />
               <Reviews reviewData={ReviewsData} />
               <Menu menuItems={menuItems}/>
               <About />
               <Contact />
          </div>
     )
}
