import { View, StyleSheet, Platform, StatusBar } from 'react-native'
import React, { FC } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

const Registration:FC = () => {
  return (
      <View style={styles.container}>
        <RegistrationForm />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === "android" ? `${100 - StatusBar.currentHeight! / 7.3}%` : `100%`,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Registration
