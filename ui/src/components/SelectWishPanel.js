import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        padding:8,
        margin:10,
        fontSize:24,
    }
})

function SelectWishPanel(props){
    const classes = useStyles();
   

    const onWishClick = (name) => {
        props.setTargetWish(name)
    }

    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>WishList</span>
        </div>
        <div>
            {props.wishList.length === 0 ? null : 
                props.wishList.map(wish => (
                    
                    <div key={wish.name} 
                        className={classes.listItem} 
                        onClick={()=>onWishClick(wish.name)}
                    >
                        {wish.name}
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default SelectWishPanel;