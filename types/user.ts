import { IPost } from "./post";

export interface IUser {
    id: number,
    email: string,
    username: string,
    secondname: string,
    password: string,
    img?: string,
    posts?: IPost[]
}

export interface UserState {
    user: IUser;
    loading: boolean;
    error: string;
}


export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: IUser;
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}


export type UserAction = FetchUsersAction 
                        | FetchUsersSuccessAction 
                        | FetchUsersErrorAction 
