import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



function GroupsScreen() {
  return  (
    <View style={styles.root}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Groups</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyContainer}>Body</Text>
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


export default GroupsScreen;