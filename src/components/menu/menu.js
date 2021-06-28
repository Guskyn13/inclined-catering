import React, { useState, useEffect } from 'react';
import MenuSelection from './menuSelection'
import Categories from './categories'
import menuItems from './menuData'
import menu from './menu.module.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const allMenus = [...new Set(menuItems.map((menu) => menu.menu))]

const allCategories = [...new Set(menuItems.map((item) => item.category))]

export default function Menu() {
     const [menus, setMenus] = useState(allMenus)
     const [categories, setCategories] = useState(allCategories)
     const [foods, setFoods] = useState(menuItems)

     const filterItems = (category) => {
          if (category === 'All') {
               setFoods(menuItems)
          }

          const newMenuItems = menuItems.filter((menuItem) =>
               menuItem.menu === menu)
          setFoods(newMenuItems)
     }

     useEffect(() => {
          Aos.init()
     }, [])

     return (
          <div >

               <section className={menu.menuSection} id="menus">
                    <div data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease" data-aos-duration="1200" className={menu.title}>
                         <h3>Our Menus</h3>
                    </div>
                    <MenuSelection menus={menus} foods={foods} filterItems={filterItems} />
                    <div className={menu.title}>
                    </div>
                    <Categories categories={categories} filterItems={filterItems} />
               </section>

          </div>
     )
}
