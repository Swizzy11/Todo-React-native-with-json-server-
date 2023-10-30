import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IUser } from '../types/user'
import { RootState } from '../store/store';

interface UserResponse {
    user: IUser
    token: string
}

export interface UserRequests {
    email: string,
    password: string
}

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://192.168.0.20:5000',
        prepareHeaders: (headers, { getState }) => {

            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("authentication", `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (build) => ({
        login: build.mutation<UserResponse, UserRequests>({
            query: (requests) => ({
                url: '/login',
                method: 'POST',
                body: requests
            })
        }),
        protected: build.mutation({
            query: () => "protected"
        }),
        createUser: build.mutation<IUser, IUser>({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            })
        })
    })
})
