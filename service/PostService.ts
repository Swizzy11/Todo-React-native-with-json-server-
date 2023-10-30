import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IPost } from '../types/post'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://192.168.0.20:5000'}),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (id) => ({
                url: '/posts',
                params: {
                    _userID: id
                }
            }),
            providesTags: result => ['Post']
        }),
        createPosts: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        })
    })
})
