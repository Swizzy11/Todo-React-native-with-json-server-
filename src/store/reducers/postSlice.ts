import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPost, PostsState } from "../../types/post"
import { posts } from "../../utils/db"
import { fetchPosts } from "../action-creator/post"

const inititalState:PostsState = {
    posts: posts,
    loading: false,
    error: null
}

export const postSlice = createSlice({
    name: 'posts',
    initialState: inititalState,
    reducers: {},
    extraReducers: {
        [fetchPosts.fulfilled.type]: (state, action:PayloadAction<IPost[]>) => {
            state.loading = false;
            state.error = '';
            state.posts = action.payload
        },
        [fetchPosts.pending.type]: (state) => {
            state.loading = true;
        },
        [fetchPosts.rejected.type]: (state, action:PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export default postSlice.reducer
