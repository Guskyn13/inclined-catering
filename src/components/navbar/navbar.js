import React from 'react';
import { Link } from 'react-router-dom'
import classes from './navbar.module.css'
import logo from '../../images/imclined catering.jpg'

export default function Navbar({ setSelectedImg }) {
     return (
          <>
               <div className={classes.navbar}>
                    <img src={logo} className={classes.logo} alt="inclined catering logo" />
                    <ul className={classes.nav}>
                         <li><a href="#reviews" >Reviews</a></li>
                         <li><a href="#menus" >Menus</a></li>
                         <li><a href="#about" >About</a></li>
                         <li>
                              <Link to={{
                                   pathname: '/PhotoGallery',
                                   state: setSelectedImg
                              }} 
                              // "/PhotoGallery" setSelectedImg={setSelectedImg}
                              >Photo Gallery</Link>
                         </li>
                         <li><a href="/" >Contact us</a></li>
                    </ul>

                    <div className={classes.social_icons}>
                         <a href="https://www.facebook.com/inclinedcatering"><i class="fab fa-facebook-square"></i></a>
                         <a href="https://www.instagram.com/inclinedcatering/"><i class="fab fa-instagram-square"></i></a>
                         <a href="https://www.google.com/maps/place/Inclined+Catering/@39.6722611,-106.4770503,8z/data=!3m1!4b1!4m5!3m4!1s0x876c8759370dbed1:0x3d4005d113c76524!8m2!3d39.6776514!4d-105.3559175"><i class="fas fa-map-marker-alt"></i></a>
                    </div>
               </div>
          </>
     )
}
