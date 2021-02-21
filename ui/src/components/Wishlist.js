import React, {useEffect, useState} from 'react'

import Navigation from './Navigation'
import AddWishPanel from './AddWishPanel'
import SelectWishPanel from './SelectWishPanel'
import WishDetailPanel from './WishDetailPanel';

import  { getWishes }from '../firebase'

function WishList() {
  const [wishList, setWishList] = useState([]);
  const [targetWish, setTargetWish] = useState("");
  useEffect(()=>{
      async function getList() {
          let response = await getWishes();
          setWishList(response)
      }
      getList() 
  }
  ,[])

  return (
    <Navigation title="WishList">
      <div>
        <AddWishPanel/>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <SelectWishPanel wishList={wishList} setTargetWish={setTargetWish}/>
            {targetWish == "" ? null : <WishDetailPanel targetWish={targetWish} wishList={wishList}/>}
        </div>
      </div>
    </Navigation>
  )
}

export default WishList;