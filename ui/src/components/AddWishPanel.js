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
    const [wishLevel, setWishLevel] = useState(1);


    const onLevelTagClick = (level) => {
        setWishLevel(level);
    }

    const onWishNameTextInputChange = (e) => {
        const text = e.target.value;
        setWishName(text); 
    }

    const onSubmitButtonClick = async () => {
        await addWish(wishName, "edit me!", wishLevel);
        setWishName('')
    }


    return (
    <div className={classes.root}>
        <div style={{marginBottom: 8}}>
            <span className={classes.tag}>Make a wish</span>
        </div>
        <div className={classes.inputContainer} style={{marginBottom: 8}}>
            <Typography variant="subtitle1">What's your wish?</Typography>
            <TextField 
                className={classes.textField}
                value={wishName}
                placeholder="What's in your mind?"
                onChange={onWishNameTextInputChange}
            />
        </div>
        <div className={classes.inputContainer} style={{marginBottom: 8}}>
            <Typography variant="subtitle1">How difficult is it?</Typography>
            <div className={classes.levelTag} 
                style={{backgroundColor: wishLevel === 1 ? 'rgb(32,171,51)' : 'rgba(32,171,51,0.25)'}}
                onClick={() => onLevelTagClick(1)}
            >
                <Typography variant="caption">Easy</Typography>
            </div>
            <div className={classes.levelTag}
                style={{backgroundColor: wishLevel === 2 ? 'rgb(247,157,22)' : 'rgba(247,157,22,0.25)'}}
                onClick={() => onLevelTagClick(2)}
            >
                <Typography variant="caption">Medium</Typography>
            </div>
            <div className={classes.levelTag}
                style={{ backgroundColor: wishLevel === 3 ? 'rgb(255,10,10)' : 'rgba(255,10,10,0.25)'}}
                onClick={() => onLevelTagClick(3)}
            >
            <Typography variant="caption">Hard</Typography>                 
            </div>
        </div>
        <div className={classes.inputContainer} style={{flexDirection: 'row-reverse', marginRight: 8, marginBottom: 8}}>
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