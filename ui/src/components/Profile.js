import React, {useEffect, useState} from 'react'
import {getUser} from '../firebase';
import { Button, makeStyles } from '@material-ui/core/';

import Navigation from './Navigation'

const useStyles = makeStyles({
    profilePic: {

    },
  });

function Profile() {
    const [user, setUser] = useState({});
    const classes = useStyles();

    useEffect(()=>{
        async function get() {
            let user = await getUser();
            setUser(user)
        }
        get() 
    }
    ,[])

  return (
    <Navigation title="Profile">
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 40}}>
        <div className={classes.profilePic} style={{cursor: 'pointer'}} >
                    <img 
                          src={user.photoURL}
                          alt="new"
                          style={{height: '80px', borderRadius: 40}}
                          />
                </div>
          <div style={{fontSize: 30, marginTop: 25}}>{user.displayName}</div>
          <Button variant="contained" color="primary" style={{marginTop: 20}}>Follow</Button>
          <div style={{marginTop: 20}}>Follower: 20</div>
      </div>
    </Navigation>
  )
}

export default Profile;