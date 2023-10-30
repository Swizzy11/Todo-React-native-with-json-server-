import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser, UserState } from "../../types/user"
import { userAPI } from "../../service/UserService"
import { RootState } from "../store"

interface authUserState extends UserState {
    token: string
}

const inititalState:authUserState = {
    user: {} as IUser,
    loading: false,
    error: '',
    token: ''
}

export const authSlice = createSlice({
    name: 'users',
    initialState: inititalState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            userAPI.endpoints.login.matchFulfilled,
            (state, {payload}) => {
                state.loading = false
                state.token = payload.token;
                state.user = payload.user
            }
        );
        builder.addMatcher(
            userAPI.endpoints.login.matchPending,
            (state) => {
                state.loading = true;
            }
        );
        builder.addMatcher(
            userAPI.endpoints.login.matchRejected,
            (state) => {
                state.loading = false;
                state.error = 'error'
            }
        )
    }
})

export default authSlice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user;
