import { View, Text } from 'react-native'
import React, { FC, useState } from 'react'
import { EditHighlight, EditContainer, EditItem } from './ButtonEdit.style'
import Modal from '../Modal/Modal'
import { IPost } from '../../../../types/post'

interface ButtonEditProps {
  post: IPost,
  updatePost: any,
  deletePost: any
}

const ButtonEdit:FC<ButtonEditProps> = ({
  post,
  updatePost,
  deletePost
}) => {
  const [isModalVisible, setVisible] = useState(false)

  return (
        <EditHighlight onPress={() => setVisible(true)}>
            <EditContainer>
                <EditItem />
                <EditItem />
                <EditItem />
                {
                isModalVisible
                ?
                    <Modal 
                      post={post} 
                      setVisible={setVisible}
                      updatePost={updatePost}
                      deletePost={deletePost}
                    />
                :
                    <></>
            }
            </EditContainer>
        </EditHighlight>
  )
}


export default ButtonEdit
