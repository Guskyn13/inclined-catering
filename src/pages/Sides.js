import classes from './pages.module.css'
import menuItems from '../components/menu/menuData'

export default function Sides() {
     return (
          <>
               <div className={classes.mainSidesContainer}>
                    <div className={classes.titleContainer}>
                         <h1>Sides</h1>
                    </div>
                    <div className={classes.cardContainer}>
                         <div className={classes.menuCard}>
                              {menuItems
                                   .filter(food => food.category === "Sides")
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