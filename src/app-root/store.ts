import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { postSlice, postReducer } from '~/entities/post';

const reducers = {
  [postSlice.name]: postReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

// Infer the `AppState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
