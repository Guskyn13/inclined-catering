import React, { useEffect } from 'react';
import menuSelection from './menuSelection.module.css'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function MenuSelection({ menus, foods, filterItems }) {

     useEffect(() => {
          Aos.init()
     }, [])

     return (
          <div data-aos="flip-down" data-aos-offset="200" data-aos-easing="ease-in-out-sine" data-aos-duration="1200" className={menuSelection.btns} >
               <div className={menuSelection.btnContainer}>
                    {menus.map((menu, id) => {
                         return (
                              <Link to={'menus/' + id} key={id} foods={foods} filterItems={filterItems} className={menuSelection.menu} >{menu}</Link>
                         )
                    })}
               </div>
          </div>
     )
}