import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wishlist from './components/Wishlist'
import Groups from './components/Groups'
import SignInScreen from './firebaseAuth'
import Profile from './components/Profile'

function App(){
  return (
    <div style={{height: "100%"}}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/group' component={Groups} />
          <Route path='/login' component={SignInScreen} />
          <Route path='/profile' component={Profile}/>
        </Switch>
      </BrowserRouter> 
    </div>
  )
}

export default App;