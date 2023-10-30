import { View, Platform, StatusBar, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import ProfileContent from '../../components/ProfileContent/ProfileContent';

const Profile:FC = () => {
  return (
    <View style={styles.container}>
      <ProfileContent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === "android" ? `${100 - StatusBar.currentHeight! / 7.3}%` : `100%`,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});

export default Profile
