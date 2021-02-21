import React from 'react'

import Navigation from './Navigation'

function Profile() {
  return (
    <Navigation title="Profile">
      <div>
          <div>avatar</div>
          <div>name</div>
          <div>Follow</div>
          <div>Follower: 20</div>
      </div>
    </Navigation>
  )
}

export default Profile;