import React from 'react'

import Navigation from './Navigation'
import AddWishPanel from './AddWishPanel'

function Dashboard() {
  return (
    <Navigation title="Home">
      <div><AddWishPanel></AddWishPanel></div>
    </Navigation>
  )
}

export default Dashboard;