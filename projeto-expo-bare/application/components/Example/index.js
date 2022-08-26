import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export const Example = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <Text style={styles2.subtitle}>Teste 2</Text>

      <Button title='Conheça nossos serviços' />
      {/* não vai funcionar */}
      {/* <Button>
        <Text>Conheça nossos valores</Text>
      </Button> */}
      <TouchableOpacity onPress={() => {console.log('apertou')}} style={styles.button}>
        <Text style={styles.buttonText}>Conheça nossos valores</Text>
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'steelblue',
    fontSize: 42,
    fontWeight: '500',
  },
  subtitle: {...styles?.title},
  button: {
    backgroundColor: 'teal',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
  }
});

const styles2 = StyleSheet.create({
  subtitle: {
    ...styles?.title,
    color: 'red',
  }
})