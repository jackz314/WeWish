import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {getUser} from '../firebase';
import { Button, makeStyles } from '@material-ui/core/';
import firebase from 'firebase';

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

  const history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    history.push('/login');
  }

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
          <div style={{fontSize: 30, marginTop: 20}}>{user.displayName}</div>
          <div style={{fontSize: 20, marginTop: 10}}>{user.email}</div>
          <Button variant="contained" color="primary" style={{marginTop: 20}} 
            onClick={()=>logout()}>Log Out</Button>
          <div style={{marginTop: 20}}>Followers: 20</div>
      </div>
    </Navigation>
  )
}

export default Profile;