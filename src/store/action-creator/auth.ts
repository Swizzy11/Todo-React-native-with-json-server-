import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { IUser } from "../../types/user"
import { users } from "../../utils/db"

export const fetchUser = createAsyncThunk(
    'posts/user',
    async (_, thunkAPI) => {
        try {
            const response = users
            return response
        } catch(e: any) {
            return thunkAPI.rejectWithValue('Не удалось загрузить посты')
        }
    }
)
