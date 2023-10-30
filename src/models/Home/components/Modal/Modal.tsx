import React, { FC, useState } from 'react'
import { ButtonAddWrapper, ButtonCloseWrapper, ModalContainer, Form, FormItem, FormTitle } from './Modal.style'
import { Input, Label, Textarea } from './component/Input'
import { ButtonAdd, ButtonClose } from './component/Button'
import { posts } from '../../../../utils/db'
import { useActions } from '../../../../hooks/useActions'
import { postAPI } from '../../../../service/PostService'
import { IPost } from '../../../../types/post'
import { useAppSelector } from '../../../../hooks/useAppSelector'

interface ModalProps {
    setVisible: (isVisible: boolean) => void
}

const Modal:FC<ModalProps> = ({
    setVisible
}) => {
    const {user} = useAppSelector(state => state.auth)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [createPost] = postAPI.useCreatePostsMutation()

    const addPost = () => {
        if(content !== '' && title !== '') {
            createPost({
                title: title,
                content: content,
                userID: user.id
            } as IPost)
        }
    }

  return (
    <ModalContainer>
        <Form>
            <FormItem>
                <ButtonCloseWrapper>
                    <ButtonClose 
                        title='Назад' 
                        onPress={() => setVisible(false)} 
                    /> 
                </ButtonCloseWrapper>
            </FormItem>
            <FormItem>
                <FormTitle>Новый пост</FormTitle>
            </FormItem>
            <FormItem>
                <Label>Заголовок поста</Label>
                <Input value={title} onChangeText={setTitle} />
            </FormItem>
            <FormItem>
                <Label>Текст поста</Label>
                <Textarea 
                    multiline 
                    numberOfLines={4} 
                    value={content} 
                    onChangeText={setContent}
                />
            </FormItem>
            <FormItem>
                <ButtonAddWrapper>
                    <ButtonAdd 
                        onPress={() => { 
                                        addPost(); 
                                        setVisible(false)
                                    }} 
                        title='Добавить' 
                    />
                </ButtonAddWrapper>
            </FormItem>
        </Form>
    </ModalContainer>
  )
}

export default Modal
