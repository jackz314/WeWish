import React from 'react'

import Navigation from './Navigation'
import AddWishPanel from './AddWishPanel'
import WishListPanel from './WishListPanel'
import GroupListPanel from './GroupListPanel'

function Dashboard() {
  return (
    <Navigation title="Home">
      <div>
        <AddWishPanel/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <WishListPanel/>
            <GroupListPanel/>
        </div>
      </div>
    </Navigation>
  )
}

export default Dashboard;