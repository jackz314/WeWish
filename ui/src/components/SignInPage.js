import React from 'react';

function SignInPage(props){

    return (
        <div style={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center'
        }}> 
                <div style={{fontFamily: 'Impact', fontSize: 75, marginBottom: 32, color: '#E76F51'}}>WeWish</div>
                <div style={{fontSize: 25, marginBottom: 20}}>Please login with your Google Account</div>
                {props.children}
        
        </div>
    );
}

export default SignInPage;