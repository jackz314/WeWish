import React, {useState} from 'react';
import {Button, Modal, View, Text, TextInput, StyleSheet} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [wishName, setWishName] = useState("New Wish");
  const [wishLevel, setWishLevel] = useState("easy");

   const onAddWishButtonPress = () => {
    setOpen(true);
   }

   const onCancelButtonPress = () => {
    setOpen(false);
   }

   const onAddButtonPress = () => {
    setOpen(false);
   }

   const onTextInputChange = (text) => {
     if(text.length !== 0){
      setWishName(text);
     }else{
      setWishName("New Wish")
     }
   }



   return  (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Home</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Button title="Add Wish" onPress={onAddWishButtonPress}/>
        <Modal visible={open}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Make a New Wish</Text>
          </View>
          <View style={{flex: 7, justifyContent: 'center', alignItems: 'center',}}>
            <Text style={{marginBottom: 10}}>What's your wish?</Text>
            <TextInput
              style={{ height: 40, 
                width: '80%', 
                borderColor: 'gray', 
                borderWidth: 1, 
                marginBottom: 10, 
                color: wishName === 'Wish Name' ?  '#999999' : '#0e0e0e' }}
              onChangeText={text => onTextInputChange(text)}
              value={wishName}
              clearTextOnFocus={true}
            />
            <Text>What's the difficulty to accomplish?</Text>
            <View style={{flexDirection: "row", justifyContent: 'center'}}>
              <View id="easy">
                <Text>Easy</Text>
              </View>
              <View id="medium">
                <Text>Medium</Text>
              </View>
              <View id="hard">
                <Text>Hard</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 2, flexDirection: "row", justifyContent: 'center'}}>
            <Button title="Cancel" onPress={onCancelButtonPress}/>
            <Button title="Add" onPress={onAddButtonPress}/>
          </View>
        </Modal>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText:{
    fontSize: 25,
    fontWeight: "700",
  },
  bodyContainer:{
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  }
})



export default HomeScreen;