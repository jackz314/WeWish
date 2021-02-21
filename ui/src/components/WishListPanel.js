import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import  { getWishes }from '../firebase'

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: 16,
        width: '40%',
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    tag: {
        padding: "4px 8px",
        borderRadius: 8,
        backgroundColor: '#b0b0b0',
        color: 'white',
    },
    listItem: {
        border: '1px solid black',
        borderRadius: 8,
    }
})

function WishListPanel(){
    const classes = useStyles();
    const [wishList, setWishList] = useState([]);

    useEffect(()=>{
        async function getList() {
            let response = await getWishes();
            setWishList(response)
        }
        getList()  
    }
    ,[])

    console.table(wishList)
    var wishlist = [];
    wishList.map(wish => {
        if (wish.joined == true) var joined = "Joined" 
        else var joined = "Not Joined"
        wishlist.push({"name": wish.name, "difficulty": wish.difficulty, "joined": joined, 
                    "desc": wish.desc, "start_time": String(wish.start_time).slice(4,24)})
    })
    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>WishList</span>
        </div>
        <div>
            {wishlist.map(wish => (
                <div className={classes.listItem}>
                    {wish.name}
                    {wish.difficulty}
                    {wish.desc}
                    {wish.start_time}
                    {wish.joined}
                </div>
            ))}
        </div>
    </div>
    )
}

export default WishListPanel;