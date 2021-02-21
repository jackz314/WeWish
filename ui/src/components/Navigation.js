import React from 'react'
import { Link } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';

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
});

function Navigation(props){
    const classes = useStyles();

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
            </div>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    </div>
    )
}

export default Navigation;
