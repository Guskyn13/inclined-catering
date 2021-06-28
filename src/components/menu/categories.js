import React, { useEffect } from 'react';
import menuSelection from './menuSelection.module.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Categories({ categories, filterItems }) {

     useEffect(() => {
          Aos.init()
     }, [])

     return (
          <div data-aos="flip-down" data-aos-offset="200" data-aos-easing="ease-in-out-sine" data-aos-duration="1200" className={menuSelection.btns} >
               <div className={menuSelection.btnContainer}>
                    {categories.map((category, id) => {
                         return (
                              <div className={menuSelection.selectBtn}>
                                   <Link to={'category/' + id} className={menuSelection.cat} filterItems={filterItems} key={id}>{category}</Link></div>
                              )
                         })}
                         </div>
          </div>
     )
}
