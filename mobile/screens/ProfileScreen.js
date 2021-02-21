import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import { Avatar } from 'react-native-elements';

function ProfileScreen({navigation}) {

  const onSignOutButtonPress = () => {
    navigation.navigate('SignIn')
  }

  return  (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Profile</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Avatar rounded title="MD" />
        <Avatar rounded icon={{ name: 'home' }} />
        <Button title="Sign Out" onPress={onSignOutButtonPress}/>
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
    fontWeight: "700"
  },
  bodyContainer:{
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ProfileScreen;