import {createSlice} from "@reduxjs/toolkit";
import {getAllPosts} from '../api/postsApi'

const initialState = {
  posts: [],
  isLoding: true,
  error: null
}
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    
  },
  extraReducers: {
    [getAllPosts.pending] : (state, action) =>{
      state.isLoding = true;
      state.error = null;
    },

    [getAllPosts.fulfilled] : (state, action) =>{
      state.posts = action.payload;
      state.isLoding = false;
      state.error = null;
    },

    [getAllPosts.rejected] : (state, action) =>{
      state.isLoding = false;
      state.error = action?.error?.message;
    }
    
  },

})


export default postsSlice.reducer