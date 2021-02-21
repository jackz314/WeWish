import React, { useEffect, useState} from 'react';

import Navigation from './Navigation'
import AddWishPanel from './AddWishPanel'
import SelectGroupPanel from './SelectGroupPanel'
import GroupPostPanel from './GroupPostPanel'

import  { getJoinedWishes, getPosts }from '../firebase'

function Groups() {
  const [groupList, setGroupList] = useState([]);
  const [targetGroup, setTargetGroup] = useState("");
  const [groupPosts, setGroupPosts] = useState([]);

    useEffect(()=>{
        async function getList() {
            let response = await getJoinedWishes();
            setGroupList(response)
        }
        getList()  
    }
    ,[])

    useEffect(() => {
      async function getPostList(){
        let res = await getPosts(targetGroup);
        setGroupPosts(res)
        console.log("setting", res)
      }
      if(targetGroup !== ""){
        getPostList();
      }
    }, [targetGroup])

    console.log(groupPosts)

  return (
  <Navigation title="Groups">
    <div>
      <AddWishPanel/>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <SelectGroupPanel groupList={groupList} setTargetGroup={setTargetGroup} targetGroup={targetGroup}/>
        {groupPosts.length === 0 ? null : <GroupPostPanel groupPosts={groupPosts} targetGroup={targetGroup}/>}
      </div>
    </div>
  </Navigation>
  )
}

export default Groups;