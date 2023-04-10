import Axios from 'axios';
import * as types from './types';

const axios = Axios.create({
    baseURL: 'https://adoface.com'
  });

// Create a new user
export const createUserApi = (userData) => async (dispatch) => {
  dispatch({ type: types.CREATE_USER_LOADING });
  try {
    const response = await axios.post('/users', userData);
    dispatch({ type: types.CREATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.CREATE_USER_FAILURE, payload: error.response.data });
  }
};

// Retrieve a user by id
export const getUserApi = (userId) => async (dispatch) => {
  dispatch({ type: types.GET_USER_LOADING });
  try {
    const response = await axios.get(`/users/${userId}`);
    dispatch({ type: types.GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.GET_USER_FAILURE, payload: error.response.data });
  }
};

// Update a user's name or bio by id
export const updateUserApi = (userId, userData) => async (dispatch) => {
  dispatch({ type: types.UPDATE_USER_LOADING });
  try {
    const response = await axios.put(`/users/${userId}`, userData);
    dispatch({ type: types.UPDATE_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_USER_FAILURE, payload: error.response.data });
  }
};

// Delete a user by id
export const deleteUserApi = (userId) => async (dispatch) => {
  dispatch({ type: types.DELETE_USER_LOADING });
  try {
    await axios.delete(`/users/${userId}`);
    dispatch({ type: types.DELETE_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: types.DELETE_USER_FAILURE, payload: error.response.data });
  }
};

// Retrieve the total number of users
export const getUserAnalyticsApi = () => async (dispatch) => {
  dispatch({ type: types.GET_USER_ANALYTICS_LOADING });
  try {
    const response = await axios.get('/analytics/users');
    dispatch({ type: types.GET_USER_ANALYTICS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.GET_USER_ANALYTICS_FAILURE, payload: error.response.data });
  }
};

// Retrieve the top 5 most active users, based on the number of posts
export const getTopActiveUsersApi = () => async (dispatch) => {
  dispatch({ type: types.GET_TOP_ACTIVE_USERS_LOADING });
  try {
    const response = await axios.get('/analytics/users/top-active');
    dispatch({ type: types.GET_TOP_ACTIVE_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.GET_TOP_ACTIVE_USERS_FAILURE, payload: error.response.data });
  }
};
