import React, { useState } from 'react';
import Home from './pages/Home'
import PhotoGallery from './components/photoGallery/PhotoGallery'
import './App.css';

import PlatedMenu from './pages/platedMenu'
import SushiMenu from './pages/SushiMenu'
import DessertMenu from './pages/DessertMenu'
import MillionDollar from './pages/MDM'
import DropOffMenu from './pages/DropOffMenu'
import Amuse from './pages/Amuse'
import Salad from './pages/Salad'
import Appetizer from './pages/Appetizer'
import Fish from './pages/Fish'
import Meat from './pages/Meat'
import Soup from './pages/Soup'
import Sushi from './pages/Sushi'
import Plated from './pages/Plated'
import Cakes from './pages/Cakes'
import Cheesecake from './pages/Cheesecake'
import Intermezzo from './pages/Intermezzo'
import Desserts from './pages/Dessert'
import Sides from './pages/Sides'
import Entree from './pages/Entree'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
     const [selectedImg, setSelectedImg] = useState(null)

     return (
          <div className="App">
               <Router>
                    <Switch>
                         <Route exact path='/' component={Home} setSelectedImg={setSelectedImg} />
                         <Route path='/PhotoGallery' component={PhotoGallery} />
                         <Route path='/menus/0' component={PlatedMenu} /> 
                         <Route path='/menus/1' component={SushiMenu} />
                         <Route path='/menus/2' component={DessertMenu} />
                         <Route path='/menus/3' component={MillionDollar} />
                         <Route path='/menus/4' component={DropOffMenu} />
                         <Route path='/category/0' component={Amuse} />
                         <Route path='/category/1' component={Salad} />
                         <Route path='/category/2' component={Appetizer} />
                         <Route path='/category/3' component={Fish} />
                         <Route path='/category/4' component={Meat} />
                         <Route path='/category/5' component={Soup} />
                         <Route path='/category/6' component={Sushi} />
                         <Route path='/category/7' component={Plated} />
                         <Route path='/category/8' component={Cakes} />
                         <Route path='/category/9' component={Cheesecake} />
                         <Route path='/category/10' component={Intermezzo} />
                         <Route path='/category/11' component={Desserts} />
                         <Route path='/category/12' component={Sides} />
                         <Route path='/category/13' component={Entree} />
                    </Switch>
               </Router>
          </div>
     );
}

export default App;