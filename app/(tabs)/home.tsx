import React, { FC } from 'react'
import { View, Image, Platform } from 'react-native'
import Footer from '../../models/Home/components/Footer/Footer'
import Body from '../../models/Home/components/Body/Body'
import Header from '../../models/Home/components/Header/Header'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'

const Home:FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'}  />
      <Header />
      <Body />
      <Footer />
      <Image style={styles.imageBackground} source={{uri: 'https://i.ytimg.com/vi/4xLUnsr4ypM/maxresdefault.jpg'}} />
    </View>
  
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === "android" ? `${100 - StatusBar.currentHeight! / 7.3}%` : `100%`,
    borderColor: 'gray',
    position: 'relative',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imageBackground: {
      zIndex: 0,
      position: 'absolute',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
  }
});

export default Home
