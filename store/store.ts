import { ConfigureStoreOptions, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { postAPI } from '../service/PostService';
import { userAPI } from '../service/UserService';


export const createStore = (
    options?: ConfigureStoreOptions["preloadedState"] | undefined
) => {
    
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(postAPI.middleware, userAPI.middleware),
        ...options
  })
}
export const store = createStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']


