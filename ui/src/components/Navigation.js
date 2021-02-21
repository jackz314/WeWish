import React, {useEffect, useState} from 'react'

import { Link } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';
import firebase from 'firebase';
import {getUser} from '../firebase';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  leftGrid: {
    height: '100%',
    width: 240,
    display: "flex",
    flexDirection: 'column',
  },
  sidebar: {
    height: '100%',
    backgroundColor: '#E76F51'
  },
  sidebarHeader: {
    height: 60,
  },
  sidebarListItem: {
    height: 60,
    '&:hover': {
        backgroundColor: '#f1b9a8'
    },
    cursor: 'pointer',
  },
  rightGrid: {
    height: '100%',
    flex: 1,
    display: "flex",
    flexDirection: 'column',
  },
  topbar: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
},
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  profilePic: {
    position:'absolute',
    right: 0,
    padding: 10,
  },
});

function Navigation(props){
    const classes = useStyles();
    const [user, setUser] = useState({});
    useEffect(()=>{
        async function get() {
            let user = await getUser();
            setUser(user)
        }
        get() 
    }
    ,[])

    const renderSidebar = () => {
        return (
            <div className={classes.sidebar}>
                <div className={classes.sidebarHeader}/>
                <div className={classes.sidebarBody}>
                    <ListItem
                        component={Link}
                        to="/"
                        className={classes.sidebarListItem}>
                        <Typography variant="h6" style={{color: 'white'}}>
                            Home
                        </Typography>
                    </ListItem>
                    <ListItem
                        component={Link}
                        to="/wishlist" 
                        className={classes.sidebarListItem}
                    >
                        <Typography variant="h6" style={{color: 'white'}}>
                        Wishlist
                        </Typography>
                    </ListItem>
                    <ListItem
                        className={classes.sidebarListItem}
                        component={Link}
                        to="/group"
                    >
                        <Typography variant="h6" style={{color: 'white'}}>
                            Groups
                        </Typography>
                    </ListItem>
                    <ListItem
                        className={classes.sidebarListItem}
                        component={Link}
                        to="/login"
                        onClick={() => firebase.auth().signOut()}
                    >
                        <Typography variant="h6" style={{color: 'white'}}>
                            Log Out
                        </Typography>
                    </ListItem>
                </div>
            </div>
        );
    }

    return (
    <div className={classes.root}>
        <div className={classes.leftGrid}>
            {renderSidebar()}
        </div>
        <div className={classes.rightGrid}>
            <div className={classes.topbar}>
                <Typography 
                    variant="h5" 
                    style={{
                        marginLeft: 32
                    }}>
                    {props.title}
                </Typography>
                <div className={classes.profilePic}>
                    
                    <img 
                          src={user.photoURL}
                          alt="new"
                          style={{height: '40px',borderRadius: "50%",}}
                          />
                </div>
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    </div>
    )
}

export default Navigation;
