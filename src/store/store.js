import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Slice/counterSlice'
import postsReducer from '../Slice/postsSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    allPosts: postsReducer
  },
})