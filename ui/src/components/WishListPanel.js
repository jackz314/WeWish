import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SyncIcon from '@material-ui/icons/Sync';
import { Typography } from '@material-ui/core';
import  { getWishes }from '../firebase'

const useStyles = makeStyles({
    root: {
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
            {wishList.map(wish => (
                <div key={wish.name} className={classes.listItem}>
                    <div style={{display:'flex', alignItems: 'center'}}>
                        <Typography variant="h5">{wish.name}</Typography>
                        {wish.completed_time == null ? <SyncIcon style={{color: '#0384fc'}}/> : <CheckCircleIcon style={{color: '##11ba5a'}}/>}
                    </div>
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
            ))}
        </div>
    </div>
    )
}

export default WishListPanel;
