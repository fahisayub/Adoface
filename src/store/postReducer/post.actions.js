import Axios from 'axios';
import * as types from './types';

const axios = Axios.create({
    baseURL: 'https://api.example.com'
  });

// Create a new post
export const createPost = (userId, content) => async (dispatch) => {
  dispatch({ type: types.CREATE_POST_LOADING });
  try {
    const res = await axios.post('/posts', { user_id: userId, content });
    dispatch({ type: types.CREATE_POST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.CREATE_POST_FAILURE });
    console.log(err);
  }
};

// Retrieve a post by id
export const getPost = (postId) => async (dispatch) => {
  dispatch({ type: types.GET_POST_LOADING });
  try {
    const res = await axios.get(`/posts/${postId}`);
    dispatch({ type: types.GET_POST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.GET_POST_FAILURE });
    console.log(err);
  }
};

// Update a post's content by id
export const updatePost = (postId, content) => async (dispatch) => {
  dispatch({ type: types.UPDATE_POST_LOADING });
  try {
    const res = await axios.put(`/posts/${postId}`, { content });
    dispatch({ type: types.UPDATE_POST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.UPDATE_POST_FAILURE });
    console.log(err);
  }
};

// Delete a post by id
export const deletePost = (postId) => async (dispatch) => {
  dispatch({ type: types.DELETE_POST_LOADING });
  try {
    await axios.delete(`/posts/${postId}`);
    dispatch({ type: types.DELETE_POST_SUCCESS, payload: postId });
  } catch (err) {
    dispatch({ type: types.DELETE_POST_FAILURE });
    console.log(err);
  }
};

// Increment the like count of a post by id
export const likePost = (postId) => async (dispatch) => {
  dispatch({ type: types.LIKE_POST_LOADING });
  try {
    const res = await axios.post(`/posts/${postId}/like`);
    dispatch({ type: types.LIKE_POST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.LIKE_POST_FAILURE });
    console.log(err);
  }
};

// Decrement the like count of a post by id
export const unlikePost = (postId) => async (dispatch) => {
  dispatch({ type: types.UNLIKE_POST_LOADING });
  try {
    const res = await axios.post(`/posts/${postId}/unlike`);
    dispatch({ type: types.UNLIKE_POST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.UNLIKE_POST_FAILURE });
    console.log(err);
  }
};

// Retrieve the total number of posts
export const getTotalPosts = () => async (dispatch) => {
  dispatch({ type: types.GET_TOTAL_POSTS_LOADING });
  try {
    const res = await axios.get('/analytics/posts');
    dispatch({ type: types.GET_TOTAL_POSTS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: types.GET_TOTAL_POSTS_FAILURE });
    console.log(err);
  }
};

// Retrieve the top 5 most liked posts
export const getTopLikedPostsApi = () => async (dispatch) => {
    dispatch({ type: types.GET_TOP_LIKED_POSTS_LOADING });
    await axios
      .get('/analytics/posts/top-liked')
      .then((res) => {
        dispatch({ type: types.GET_TOP_LIKED_POSTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_TOP_LIKED_POSTS_FAILURE });
        console.log(err);
      });
  };