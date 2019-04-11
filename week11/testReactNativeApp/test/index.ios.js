/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Erin!
        </Text>
        <Text style={styles.instructions}>
          Erin
        </Text>
        <Text style={styles.instructions}>
          Erin{'\n'}
          Erin
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#483D8B',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('test', () => test);
