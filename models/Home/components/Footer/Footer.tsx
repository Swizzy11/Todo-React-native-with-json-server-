import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Container, FooterButton } from './Footer.style';
import Modal from '../Modal/Modal';

interface FooterProps {
}

const Footer:FC<FooterProps> = ({
 }) => {
    const [isModalVisible, setVisible] = useState(false)

    const onPress = () => {
        setVisible(true)
    }

    return (
        <>
        <Container>
            <FooterButton onPress={onPress} title='Добавить пост' /> 
        </Container>
            {
                isModalVisible
                ?
                    <Modal setVisible={setVisible} />
                :
                    <></>
            }
        </>
    );
}

export default Footer;
