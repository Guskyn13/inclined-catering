import classes from './pages.module.css'
import menuItems from '../components/menu/menuData'

export default function DropOffMenu() {
     return (
          <>
               <div className={classes.mainDOContainer}>
                    <div className={classes.titleContainer}>
                         <h1>Drop Off Menu</h1>
                    </div>
                    <div className={classes.cardDOContainer}>
                         <div className={classes.menuCard}>
                              {menuItems
                                   .filter(food => food.menu === "Drop Off Menu")
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