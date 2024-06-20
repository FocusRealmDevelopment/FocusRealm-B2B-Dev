import {
    LOGIN_REQUEST_STUDENT,
    LOGIN_FAIL_STUDENT,
    LOGIN_SUCCESS_STUDENT,
    CLEAR_ERRORS,
    REGISTER_REQUEST_STUDENT,
    REGISTER_SUCCESS_STUDENT,
    REGISTER_FAIL_STUDENT,
    LOAD_REQUEST_STUDENT,
    LOAD_SUCCESS_STUDENT,
    LOAD_FAIL_STUDENT,
    LOGOUT_SUCCESS_STUDENT,
    LOGOUT_FAIL_STUDENT,
  
  } from "../constants/studentConstants.jsx";
  
  import axios from "axios";
  
  // Login
  export const loginStudent = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST_STUDENT });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `http://localhost:4002/api/v1/student/login`,
        { email, password },{ withCredentials: true },
        config
      );
  
      dispatch({ type: LOGIN_SUCCESS_STUDENT, payload: data.student });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL_STUDENT, payload: error.response.data.message });
    }
  };
  
  // Register
  export const registerStudent = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST_STUDENT });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(
        `http://localhost:4002/api/v1/student/register`,
        userData,{ withCredentials: true },
        config
      );
  
      dispatch({ type: REGISTER_SUCCESS_STUDENT, payload: data.student });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL_STUDENT,
        payload: error.response.data.message,
      });
    }
  };
  
  // Load User
  export const loadStudent = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_REQUEST_STUDENT });
  
      const { data } = await axios.get(`http://localhost:4002/api/v1/student/me`,{ withCredentials: true });
  
      dispatch({ type: LOAD_SUCCESS_STUDENT, payload: data.student });
    } catch (error) {
      dispatch({ type: LOAD_FAIL_STUDENT, payload: error.response.data.message });
    }
  };
  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
  
  // Logout User
  export const logoutStudent = () => async (dispatch) => {
    try {
      await axios.get(`http://localhost:4002/api/v1/student/logout`,{ withCredentials: true });
    
      dispatch({ type: LOGOUT_SUCCESS_STUDENT });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL_STUDENT, payload: error.response.data.message });
    }
    };