import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classes from './pages.module.css'
import Navbar from '../components/navbar/navbar'
import menuItems from '../components/menu/menuData'
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function PlatedMenu() {

     useEffect(() => {
          Aos.init()
     }, [])

     return (
          <>
          <div className={classes.mainContainer}>
               <Navbar />
               <div className={classes.titleContainer}>
                    <h1>Plated Menu</h1>
               </div>
               <div className={classes.cardContainer}>
                         <div className={classes.cards}>
                    <div className={classes.menuCard}>
                         {menuItems
                              .filter(food => food.menu === "Plated Menu")
                              .map(food => {
                                   return (
                                        <article data-aos="fade" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className={classes.article}>
                                             <h3>{food.title}</h3>
                                             <h4>{food.category}</h4>
                                             <h4>{food.description}</h4>
                                        </article>
                                   )
                              })}
                    </div>
                         </div>
               </div>
          </div>
          </>
     )
}