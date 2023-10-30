import { View, Platform, StatusBar } from 'react-native'
import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import LoginForm from '../../models/Login/component/LoginForm/LoginForm'

const Login:FC = () => {
  
  return (
    <View style={styles.container}>
      <LoginForm />
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

export default Login
