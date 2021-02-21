import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  { getJoinedWishes }from '../firebase'
import {Typography } from '@material-ui/core';

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
        padding:8,
        margin:10,
        fontSize:24,
    }
})



function GroupListPanel(){
    const classes = useStyles();
    const [groupList, setGroupList] = useState([]);
    console.log(groupList);

    useEffect(()=>{
        async function getList() {
            let response = await getJoinedWishes();
            setGroupList(response)
        }
        getList()  
    }
    ,[])

    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>Groups</span>
        </div>
        <div>
            {groupList.map(group => (
                <div className={classes.listItem}>
                    {group.name}
                    <Typography>Group members: {group.ref.curr_users}</Typography>
                    <Typography>Finished members: {group.ref.finished_users}</Typography>
                    <Typography>In progress members: {group.ref.in_progress_users}</Typography>
                </div>
            ))}
        </div>
    </div>
    )
}

export default GroupListPanel;