import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SyncIcon from '@material-ui/icons/Sync';
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
    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>WishList</span>
        </div>
        <div>
            {wishlist.map(wish => (
                <div className={classes.listItem}>
                    <div style={{display:'flex', alignItems: 'center', marginTop: 8, marginBottom: 8}}>
                        <Typography variant="h5">{wish.name}</Typography>
                        {wish.completed_time == null ? <SyncIcon style={{color: '#0384fc'}}/> : <CheckCircleIcon style={{color: '##11ba5a'}}/>}
                    </div>
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