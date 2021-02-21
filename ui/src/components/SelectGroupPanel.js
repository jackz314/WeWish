import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  { getJoinedWishes }from '../firebase'
import {Typography } from '@material-ui/core';

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
        cursor: 'pointer'
    }
})

function SelectGroupPanel(props){
    const classes = useStyles();

    const onGroupClick = (name) => {
        props.setTargetGroup(name)
    }
    
    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>Groups</span>
        </div>
        <div>
            {props.groupList.map((group, i) => (
                <div key={i}  className={classes.listItem} onClick={() => onGroupClick(group.name)}>
                    {group.name}
                    <Typography>Group members: {group.ref.curr_users}</Typography>
                    <Typography>Finished members: {group.ref.finished_users}</Typography>
                    <Typography>In progress members: {group.ref.in_progress_users <= 0 ? 0 : group.ref.in_progress_users}</Typography>
                </div>
            ))}
        </div>
    </div>
    )
}

export default SelectGroupPanel;