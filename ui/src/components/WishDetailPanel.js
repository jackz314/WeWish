import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ForwardIcon from '@material-ui/icons/Forward';

import  { finishWish, leaveWish }from '../firebase'

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: 16,
        marginLeft: 16,
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

function WishDetailPanel(props){
    const classes = useStyles();

    const wish = props.wishList[props.wishList.findIndex(wish => wish.name === props.targetWish)]

    console.log(wish)

    const onFinishButtonClick = async() => {
        console.log(wish.name)
        await finishWish(wish.name);
    }

    const onDropButtonClick = async() => {
        await leaveWish(wish.name);
    }

    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>Wish</span>
            <div style={{display:'flex', alignItems: 'center', marginTop: 8, marginBottom: 8}}>
                <Typography variant="h5">{wish.name}</Typography>
                {wish.completed_time == null ? <ForwardIcon style={{color: '#0384fc'}}/> : <CheckCircleIcon style={{color: '##11ba5a'}}/>}
            </div>
            <Button
                variant="contained"
                size="small" 
                color="primary"
                onClick={onFinishButtonClick}
            >
                Mark as Accomplished
            </Button>
            <Button
                variant="outlined"
                size="small" 
                color="primary"
                onClick={onDropButtonClick}
            >
                Drop the Wish
            </Button>
        </div>
    </div>
    )
}

export default WishDetailPanel;