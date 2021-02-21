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
          <div style={{flex: 1}}>
            <WishListPanel/>
          </div>
          <div style={{flex: 1}}>
            <GroupListPanel/>
          </div>
        </div>
      </div>
    </Navigation>
  )
}

export default Dashboard;