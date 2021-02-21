import React, {useState} from 'react';
import {Button, Modal, View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [wishName, setWishName] = useState("New Wish");
  const [wishLevel, setWishLevel] = useState("easy");
  const [wishComment, setWishComment] = useState("Tell us more about your wish");

   const onAddWishButtonPress = () => {
    setOpen(true);
   }

   const onCancelButtonPress = () => {
    setOpen(false);
   }

   const onAddButtonPress = () => {
    setOpen(false);
   }

   const onWishNameTextInputChange = (text) => {
     if(text.length !== 0){
      setWishName(text);
     }else{
      setWishName("New Wish")
     }
   }

   const onLevelTagPress = (level) => {
     setWishLevel(level);
   }

   const onWishCommentTextInputChange = (text) => {
    if(text.length !== 0){
      setWishComment(text);
    }else{
      setWishComment("New Wish")
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
            <Text style={{marginBottom: 10, fontSize: 20}}>
              What's your wish?
              </Text>
            <TextInput
              style={{ 
                height: 40, 
                width: '80%', 
                borderColor: 'gray', 
                borderWidth: 1, 
                marginBottom: 10, 
                fontSize: 16,
                color: wishName === 'Wish Name' ?  '#999999' : '#0e0e0e' }}
              onChangeText={text => onWishNameTextInputChange(text)}
              value={wishName}
              clearTextOnFocus={true}
            />
            <Text style={{marginBottom: 10, fontSize: 20}}>
              Do you have any comments?
            </Text>
            <TextInput
              multiline
              numberOfLines={3}
              style={{ 
                height: 120, 
                width: '80%', 
                borderColor: 'gray', 
                borderWidth: 1, 
                marginBottom: 10, 
                fontSize: 16,
                color: wishName === 'Wish Name' ?  '#999999' : '#0e0e0e' }}
              onChangeText={text => onWishCommentTextInputChange(text)}
              value={wishComment}
              clearTextOnFocus={true}
            />
            <Text style={{marginBottom: 10, fontSize: 20}}>
              What's the difficulty to accomplish?
            </Text>
            <View style={{flexDirection: "row", justifyContent: 'center', marginBottom: 10}}>
              <TouchableOpacity 
                style={{
                  borderRadius: 8, 
                  backgroundColor: wishLevel === 'easy' ? 'rgb(32,171,51)' : 'rgba(32,171,51,0.25)',
                  paddingTop: 2,
                  paddingRight: 6,
                  paddingBottom: 2,
                  paddingLeft: 6,
                  marginLeft: 4,
                  marginRight: 4
                }}
                onPress={() => onLevelTagPress('easy')}
              >
                <Text style={{color: "white", fontSize: 15}}>Easy</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8, 
                  backgroundColor: wishLevel === 'medium' ? 'rgb(247,157,22)' : 'rgba(247,157,22,0.25)',
                  paddingTop: 2,
                  paddingRight: 6,
                  paddingBottom: 2,
                  paddingLeft: 6,
                  marginLeft: 4,
                  marginRight: 4
                }} 
                onPress={() => onLevelTagPress('medium')}
                >
                <Text style={{color: "white", fontSize: 15}}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8, 
                  backgroundColor: wishLevel === 'hard' ? 'rgb(255,10,10)' : 'rgba(255,10,10,0.25)',
                  paddingTop: 2,
                  paddingRight: 6,
                  paddingBottom: 2,
                  paddingLeft: 6,
                  marginLeft: 4,
                  marginRight: 4
                }} 
                onPress={() => onLevelTagPress('hard')}>
                <Text style={{color: "white", fontSize: 15}}>Hard</Text>
              </TouchableOpacity>
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