import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import UserContext from './context'
import Home from './pages/home'
import Gallery from './pages/gallery'

const Navigation = () => {
   const context = useContext(UserContext)

   return (
      <BrowserRouter>
         <Switch>
            <Route path='/' exact>
               <Home user={context} />
            </Route>

            <Route path='/gallery'>
               <Gallery user={context} />
            </Route>
         </Switch>
      </BrowserRouter>
   )
}

export default Navigation
