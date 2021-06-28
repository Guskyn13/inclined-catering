import classes from './pages.module.css'
import menuItems from '../components/menu/menuData'

export default function MDM() {
     return (
          <>
               <div className={classes.mainMDMContainer}>
                    <div className={classes.titleContainer}>
                         <h1>"Million Dollar Menu"</h1>
                    </div>
                    <div className={classes.cardMDMContainer}>
                         <div className={classes.menuCard}>
                              {menuItems
                                   .filter(food => food.menu === '"Million Dollar Menu"')
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