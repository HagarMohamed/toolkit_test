import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllPosts = createAsyncThunk('posts/postsAll', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
  })