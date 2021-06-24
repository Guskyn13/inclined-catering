import { Link } from 'react-router-dom'
import classes from './pages.module.css'
import Navbar from '../components/navbar/navbar'
import menuItems from '../components/menu/menuData'


export default function PlatedMenu() {
     return (
          <>
               <div className={classes.mainContainer}>
                    <Navbar />
                    <div className={classes.titleContainer}>
                         <h1>Intermezzo</h1>
                    </div>
                    <div className={classes.cardContainer}>
                         <div className={classes.menuCard}>
                              {menuItems
                                   .filter(food => food.category === 'Intermezzo "Palate Cleanser"')
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
                    <button><Link to='/'>Back</Link></button>
               </div>
          </>
     )
}