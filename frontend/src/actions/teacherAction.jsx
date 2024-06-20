import {
    LOGIN_REQUEST_TEACHER,
    LOGIN_FAIL_TEACHER,
    LOGIN_SUCCESS_TEACHER,
    CLEAR_ERRORS,
    REGISTER_REQUEST_TEACHER,
    REGISTER_SUCCESS_TEACHER,
    REGISTER_FAIL_TEACHER,
    LOAD_REQUEST_TEACHER,
    LOAD_SUCCESS_TEACHER,
    LOAD_FAIL_TEACHER,
    LOGOUT_SUCCESS_TEACHER,
    LOGOUT_FAIL_TEACHER
    
  } from "../constants/teacherConstants.jsx";



  import axios from "axios";
  
  // Login
  export const loginTeacher = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST_TEACHER });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `http://localhost:4002/api/v1/teacher/login`,
        { email, password },{ withCredentials: true },
        config
      );
  
      dispatch({ type: LOGIN_SUCCESS_TEACHER, payload: data.teacher });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL_TEACHER, payload: error.response.data.message });
    }
  };
  
  // Register
  export const registerTeacher = (userData) => async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQUEST_TEACHER });
  
      const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await axios.post(
        `http://localhost:4002/api/v1/teacher/register`,
        userData,{ withCredentials: true },
        config
      );
  
      dispatch({ type: REGISTER_SUCCESS_TEACHER, payload: data.teacher });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL_TEACHER,
        payload: error.response.data.message,
      });
    }
  };
  
  // Load User
  export const loadTeacher = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_REQUEST_TEACHER });
  
      const { data } = await axios.get(`http://localhost:4002/api/v1/teacher/me`,{ withCredentials: true });
  
      dispatch({ type: LOAD_SUCCESS_TEACHER, payload: data.teacher });
    } catch (error) {
      dispatch({ type: LOAD_FAIL_TEACHER, payload: error.response.data.message });
    }
  };
  
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
  
  // Logout User
  export const logoutTeacher = () => async (dispatch) => {
    try {
      await axios.get(`http://localhost:4002/api/v1/teacher/logout`,{ withCredentials: true });
    
      dispatch({ type: LOGOUT_SUCCESS_TEACHER });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL_TEACHER, payload: error.response.data.message });
    }
    };