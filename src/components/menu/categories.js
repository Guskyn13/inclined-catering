import React from 'react';
import menuSelection from './menuSelection.module.css'
import { Link } from 'react-router-dom'

export default function Categories({ categories, filterItems }) {

     return (
          <div className={menuSelection.btns} >
               <div className={menuSelection.btnContainer}>
                    {categories.map((category, id) => {
                         return (
                              <div className={menuSelection.selectBtn}>
                                   <Link to={'category/' + id} className={menuSelection.cat} filterItems={filterItems} >{category}</Link></div>
                              )
                         })}
                         </div>
          </div>
     )
}
