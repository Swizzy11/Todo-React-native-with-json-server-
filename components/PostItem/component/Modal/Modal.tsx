import React, { FC, useState } from 'react'
import { ButtonAddWrapper, ButtonCloseWrapper, Form, FormItem, FormTitle, ModalContainer } from './Modal.style'
import { Textarea } from '../../../../models/Home/components/Modal/component/Input'
import { ButtonClose, ButtonAdd } from '../../../LoginForm/component/Button'
import { Label, Input } from '../../../LoginForm/component/Input'
import { IPost } from '../../../../types/post'

interface ModalForEditProps {
    setVisible: (isVisible: boolean) => void,
    post: IPost,
    updatePost: any,
    deletePost: any
}

const ModalForEdit:FC<ModalForEditProps> = ({
  setVisible,
  post,
  updatePost,
  deletePost
}) => {
    const [updateTitle, setTitle] = useState('')
    const [updateContent, setContent] = useState('')

    const handleUpdate = () => {
            updatePost({...post, 
                title:(updateTitle === '') ? post.title : updateTitle, 
                content:(updateContent === '') ? post.content : updateContent
            })
    }

    const handleDelete = () => {
        deletePost(post)
    }

    return (
        <ModalContainer>
            <Form>
                <FormItem>
                    <ButtonCloseWrapper>
                        <ButtonClose
                                color='red'
                                title='Удалить' 
                                onPress={() => {
                                    handleDelete()
                                    setVisible(false)
                                }} 
                            /> 
                        <ButtonClose 
                            title='Назад' 
                            onPress={() => setVisible(false)} 
                        /> 
                    </ButtonCloseWrapper>
                </FormItem>
                <FormItem>
                    <FormTitle>Редактирование {post.title}</FormTitle>
                </FormItem>
                <FormItem>
                    <Label>Заголовок поста</Label>
                    <Input value={updateTitle} onChangeText={setTitle} />
                </FormItem>
                <FormItem>
                    <Label>Текст поста</Label>
                    <Textarea 
                        multiline 
                        numberOfLines={4} 
                        value={updateContent} 
                        onChangeText={setContent}
                    />
                </FormItem>
                <FormItem>
                    <ButtonAddWrapper>
                        <ButtonAdd 
                            onPress={() => { 
                                            handleUpdate()
                                            setVisible(false)
                                        }} 
                            title='Редактировать' 
                        />
                    </ButtonAddWrapper>
                </FormItem>
            </Form>
        </ModalContainer>
    )
}

export default ModalForEdit
