import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const SignInScreen = ({navigation}) => {
  const onSignInButtonPress = () => {
    navigation.navigate('Home')
  }
    
  return (
    <View style={styles.signIn}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>WeWish</Text>
      </View>
      <View style={styles.signInButtonContainer}>
        <Button title="Sign In" onPress={onSignInButtonPress}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signIn: {
    height: "100%",
    backgroundColor: 'white'
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: "red",
    // borderStyle: "solid"
  },
  titleText:{
    fontSize: 40
  },
  signInButtonContainer:{
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: "red",
    // borderStyle: "solid"
  }
})


export default SignInScreen;