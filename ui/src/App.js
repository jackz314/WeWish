import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Wishlist from './components/Wishlist'
import Groups from './components/Groups'
import Explore from './components/Explore'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Router>
          <Sidebar />
          <Route exact path='/' component={Dashboard} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/groups' component={Groups} />
          <Route path='/explore' component={Explore} />
        </Router>
      </div>
    )
  }
}

export default App