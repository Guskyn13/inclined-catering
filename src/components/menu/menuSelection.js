import React from 'react';
import menuSelection from './menuSelection.module.css'
import { Link } from 'react-router-dom'

export default function MenuSelection({ menus, foods, filterItems }) {
     return (
          <div className={menuSelection.btns} >
               <div className={menuSelection.btnContainer}>
                    {menus.map((menu, id) => {
                         console.log(menus)
                         return (
                              <Link to={'menus/' + id} key={id} foods={foods} filterItems={filterItems} className={menuSelection.menu} >{menu}</Link>
                         )
                    })}
               </div>
          </div>
     )
}