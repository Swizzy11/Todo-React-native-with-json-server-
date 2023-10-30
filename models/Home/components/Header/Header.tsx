import React from "react";
import { HeaderImg, Img , HeaderContainer, HeaderName } from './Header.style'
import { router } from "expo-router";
import { useAppSelector } from "../../../../hooks/useAppSelector";

const Header = () => {
    const {user} = useAppSelector(state => state.auth)

    return (
        <HeaderContainer>
            <HeaderName onPress={() => router.push('/profile')}>{user.username}</HeaderName>
                <HeaderImg onPress={() => {router.push('/profile')}}>
                    <Img source={{ uri: 'https://semantic-ui.com/images/avatar2/large/matthew.png'}} />
                </HeaderImg>
        </HeaderContainer>
    )
}

export default Header
