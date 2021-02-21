import React from 'react';

import Navigation from './Navigation'
import GroupListPanel from './GroupListPanel'

function Groups() {
  return (
    <Navigation title="Groups">
      <GroupListPanel/>
    </Navigation>
  )
}

export default Groups;