import { View, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { ButtonWrapper, ImgWrapper, Img, ProfileInfoWrapper, ProfileItem, Title, UserInfo, ImgItem } from './ProfileContent.styles'
import { useAppSelector } from '../../hooks/useAppSelector'
import { ButtonBack } from './component/Button'
import { router } from 'expo-router'

const ProfileContent:FC = () => {
    const {user} = useAppSelector(state => state.auth)

    return (
        <View style={styles.container}>
            <ButtonWrapper>
                <ButtonBack title='Выйти' onPress={() => router.push('/')} />
                <ButtonBack title='Назад' onPress={() => router.push('/home')} />
            </ButtonWrapper>
            <ProfileInfoWrapper>
                <ImgItem>
                    <ImgWrapper>
                        <Img source={{ uri: 'https://semantic-ui.com/images/avatar2/large/matthew.png'}} />
                    </ImgWrapper>
                </ImgItem>
                <ProfileItem>
                    <Title>Имя</Title>
                    <UserInfo>{user.username}</UserInfo>
                </ProfileItem>
                <ProfileItem>
                    <Title>Фамилия</Title>
                    <UserInfo>{user.secondname}</UserInfo>
                </ProfileItem>
                <ProfileItem>
                    <Title>Почта</Title>
                    <UserInfo>{user.email}</UserInfo>
                </ProfileItem>
            </ProfileInfoWrapper>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    }
  });

export default ProfileContent
