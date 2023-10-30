import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import { ToachContainer, PostContent, PostContentContainer, PostView, PostTitle, Container, ButtonWrapper } from './PostItem.style';
import  ButtonEdit  from './component/ButtonEdit/ButtonEdit'
import { postAPI } from '../../service/PostService';
import { IPost } from '../../types/post';

interface IUser {
    post: IPost,
    index: number
}

const UserItem:FC<IUser> = ({
    post,
    index
}) => {
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [isOpen, setOpen] = useState(false)

    const onPress = () => {
        (isOpen) ? setOpen(false) : setOpen(true)
    }

    return (
        <PostView>
            <Container>
                <ToachContainer onPress={onPress} underlayColor="#E1E1E1">
                    <PostTitle>
                        <Text style={{color: 'white'}}>{index}. {post.title}</Text>
                    </PostTitle>
                </ToachContainer>
                
                {
                        (isOpen) 
                        ?
                            <PostContentContainer>
                                <ButtonWrapper>
                                    <ButtonEdit 
                                        updatePost={updatePost} 
                                        deletePost={deletePost} 
                                        post={post} 
                                    />
                                </ButtonWrapper>
                                <PostContent>
                                    <Text style={{color: 'white'}}>
                                        {post.content} 
                                    </Text>
                                </PostContent>             
                            </PostContentContainer>
                        :
                            <></>
                    }
            </Container>
        </PostView>
    );
}

export default UserItem;
