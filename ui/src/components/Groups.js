import React, { useEffect, useState} from 'react';

import Navigation from './Navigation'
import AddWishPanel from './AddWishPanel'
import SelectGroupPanel from './SelectGroupPanel'

import  { getJoinedWishes }from '../firebase'

function Groups() {
  const [groupList, setGroupList] = useState([]);
  const [targetGroup, setTargetGroup] = useState("");

    useEffect(()=>{
        async function getList() {
            let response = await getJoinedWishes();
            setGroupList(response)
        }
        getList()  
    }
    ,[])

  return (
  <Navigation title="Groups">
    <div>
      <AddWishPanel/>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <SelectGroupPanel groupList={groupList} setTargetGroup={setTargetGroup}/>
        {/* {targetGroup == "" ? null : <WishDetailPanel targetGroup={targetGroup} groupList={groupList}/>} */}
      </div>
    </div>
  </Navigation>
  )
}

export default Groups;