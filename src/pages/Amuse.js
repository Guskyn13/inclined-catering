import classes from './pages.module.css'
import menuItems from '../components/menu/menuData'

export default function Amuse() {
     return (
          <>
               <div className={classes.mainAContainer}>
                    <div className={classes.titleContainer}>
                         <h1>Amuse</h1>
                    </div>
                    <div className={classes.cardContainer}>
                         <div className={classes.menuCard}>
                              {menuItems
                                   .filter(food => food.category === "Amuse")
                                   .map(food => {
                                        return (
                                             <article className={classes.article}>
                                                  <h3>{food.title}</h3>
                                                  <h4>{food.category}</h4>
                                                  <h4>{food.description}</h4>
                                             </article>
                                        )
                                   })}
                         </div>
                    </div>
               </div>
          </>
     )
}