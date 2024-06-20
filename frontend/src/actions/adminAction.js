import {
  LOGIN_REQUEST_ADMIN,
  LOGIN_FAIL_ADMIN,
  LOGIN_SUCCESS_ADMIN,
  CLEAR_ERRORS,
  REGISTER_REQUEST_ADMIN,
  REGISTER_SUCCESS_ADMIN,
  REGISTER_FAIL_ADMIN,
  LOAD_REQUEST_ADMIN,
  LOAD_SUCCESS_ADMIN,
  LOAD_FAIL_ADMIN,
  LOGOUT_SUCCESS_ADMIN,
  LOGOUT_FAIL_ADMIN,

} from "../constants/adminConstants.jsx";

import axios from "axios";

// Login
export const loginAdmin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST_ADMIN });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:4002/api/v1/admin/login`,
      { email, password },{ withCredentials: true },
      config
    );

    dispatch({ type: LOGIN_SUCCESS_ADMIN, payload: data.admin });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL_ADMIN, payload: error.response.data.message });
  }
};

// Register
export const registerAdmin = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST_ADMIN });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:4002/api/v1/admin/register`,
      userData,{ withCredentials: true },
      config
    );

    dispatch({ type: REGISTER_SUCCESS_ADMIN, payload: data.admin });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL_ADMIN,
      payload: error.response.data.message,
    });
  }
};

// Load User
export const loadAdmin = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_REQUEST_ADMIN });

    const { data } = await axios.get(`http://localhost:4002/api/v1/admin/me`,{ withCredentials: true });

    dispatch({ type: LOAD_SUCCESS_ADMIN, payload: data.admin });
  } catch (error) {
    dispatch({ type: LOAD_FAIL_ADMIN, payload: error.response.data.message });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};


// Logout User
export const logoutAdmin = () => async (dispatch) => {
  try {
    await axios.get(`http://localhost:4002/api/v1/admin/logout`,{ withCredentials: true });
  
    dispatch({ type: LOGOUT_SUCCESS_ADMIN });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL_ADMIN, payload: error.response.data.message });
  }
  };