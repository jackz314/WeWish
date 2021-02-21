import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  { getJoinedWishes }from '../firebase'

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

function GroupPostPanel(props){
    const classes = useStyles();

    console.log(props.groupPosts)
    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>Group Post</span>
        </div>
        <div>
            {/* {props.postList.map(post => (
                <div className={classes.listItem}>
                </div>
            ))} */}
        </div>
    </div>
    )
}

export default GroupPostPanel;