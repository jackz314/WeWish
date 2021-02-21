import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import  { addWish }from '../firebase'

const useStyles = makeStyles({
    root: {
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
    inputContainer:{
        display: "flex",
        alignItems: 'center'
    },
    textField: {
        marginLeft: 12,
        height: 40,
        width: 240
    },
    levelTag: {
        display: 'inline',
        margin: '0px 16px',
        padding: '2px 6px',
        cursor: 'pointer',
        color: "white",
        borderRadius: 16
    }
})

function AddWishPanel(){
    const classes = useStyles();
    const [wishName, setWishName] = useState("");
    const [wishLevel, setWishLevel] = useState("easy");


    const onLevelTagClick = (level) => {
        setWishLevel(level);
    }

    const onWishNameTextInputChange = (e) => {
        const text = e.target.value;
        setWishName(text); 
    }

    const onSubmitButtonClick = async () => {
        //console.log(`${wishName}, "edit me!", ${wishLevel}`)
        //await addWish(wishName, "edit me!", wishLevel);
    }


    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>Make a wish</span>
        </div>
        <div className={classes.inputContainer} style={{marginBottom: 8}}>
            <Typography variant="subtit1">What's your wish?</Typography>
            <TextField 
                className={classes.textField}
                value={wishName}
                placeholder="What's in your mind?"
                onChange={onWishNameTextInputChange}
            />
        </div>
        <div className={classes.inputContainer} style={{marginBottom: 8}}>
            <Typography variant="subtit1">How difficult is it?</Typography>
            <div className={classes.levelTag} 
                style={{backgroundColor: wishLevel === 'easy' ? 'rgb(32,171,51)' : 'rgba(32,171,51,0.25)'}}
                onClick={() => onLevelTagClick('easy')}
            >
                <Typography variant="caption">Easy</Typography>
            </div>
            <div className={classes.levelTag}
                style={{backgroundColor: wishLevel === 'medium' ? 'rgb(247,157,22)' : 'rgba(247,157,22,0.25)'}}
                onClick={() => onLevelTagClick('medium')}
            >
                <Typography variant="caption">Medium</Typography>
            </div>
            <div className={classes.levelTag}
                style={{ backgroundColor: wishLevel === 'hard' ? 'rgb(255,10,10)' : 'rgba(255,10,10,0.25)'}}
                onClick={() => onLevelTagClick('hard')}
            >
            <Typography variant="caption">Hard</Typography>                 
            </div>
        </div>
        <div className={classes.inputContainer} style={{marginBottom: 8}}>
            <Button 
                variant="contained"
                size="small" 
                color="primary" 
                style={{marginTop: 4}}
                onClick={onSubmitButtonClick}
            >
                Add to my WishList
            </Button>
        </div>
    </div>
    )
}

export default AddWishPanel;