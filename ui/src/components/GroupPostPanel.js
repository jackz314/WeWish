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
    },
})

function GroupPostPanel(props){
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>Group Post</span>
        </div>
        <div>
            {props.groupPosts.map((post,i) => (
                <div key={i} className={classes.listItem} style={{cursor: 'pointer', marginBottom: 16, padding: 8}}>
                    <div   style={{display: 'flex'}}>
                    <img 
                          src={post.profile_pic}
                          alt="new"
                          style={{height: '40px', borderRadius: '50%'}}
                          />
                    <span style={{marginLeft: 8}}>{post.name}</span>
                </div >  
                <div style={{marginTop: 8}}>
                    {post.text}
                </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default GroupPostPanel;