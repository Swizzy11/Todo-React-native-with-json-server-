import { createAsyncThunk } from "@reduxjs/toolkit"
import { posts } from "../../utils/db"


export const fetchPosts = createAsyncThunk(
    'posts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = posts 
            return response
        } catch(e: any) {
            return thunkAPI.rejectWithValue('Не удалось загрузить посты')
        }
    }
)
