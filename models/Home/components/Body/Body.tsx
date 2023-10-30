import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text } from "react-native";
import { styles } from './Body.style'
import UserItem from "../../../../components/PostItem/PostItem";
import { IPost } from "../../../../types/post";
import { postAPI } from "../../../../service/PostService";
import { useAppSelector } from "../../../../hooks/useAppSelector";

const Body = () => {
    const {user} = useAppSelector(state => state.auth)
    const [postList, setPosts] = useState<Array<IPost>>([])
    const {data, isLoading} = postAPI.useFetchAllPostsQuery(user.id)

    useEffect(() => {
        setPosts(data!)
    }, [data])


    return (
        <ScrollView style={styles.container}>
            {isLoading && <Text>Идёт загрузка...</Text>}
            {
               postList && postList.map((post, index) => {
                    return (
                        <UserItem 
                            key={index}
                            index={index + 1}
                            post={post} 
                        /> 
                    )
                })
            }
        </ScrollView>
    )
}

export default Body
