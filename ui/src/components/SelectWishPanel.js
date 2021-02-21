import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';

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
        cursor: "pointer",
    },
    levelTag: {
        display: 'inline',
        marginRight: '8px',
        padding: '2px 6px',
        cursor: 'pointer',
        color: "white",
        borderRadius: 16,
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

                    <Typography>{wish.start_time.getMonth()}-{wish.start_time.getDate()}-{wish.start_time.getFullYear()}</Typography>
                    
                    { wish.difficulty === 1 ? <div className={classes.levelTag} style={{backgroundColor: 'rgb(32,171,51)'}}>
                <Typography variant="caption">Easy</Typography>
            </div>  : wish.difficulty === 2 ? <div className={classes.levelTag} style={{backgroundColor: 'rgb(247,157,22)'}}>
                <Typography variant="caption">Medium</Typography>
            </div>  : <div className={classes.levelTag} style={{backgroundColor: 'rgb(255,10,10)'}}>
                <Typography variant="caption">Hard</Typography>
            </div>}  
             
             { wish.complete_time === null ? 
                <Typography variant="caption">In Progress</Typography>
            : <Typography variant="caption">Accomplished</Typography>
            }  
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default SelectWishPanel;