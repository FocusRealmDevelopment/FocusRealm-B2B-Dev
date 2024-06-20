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
  
  export const studentReducer = (state = { student: {} }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST_STUDENT:
      case REGISTER_REQUEST_STUDENT:
      case LOAD_REQUEST_STUDENT:
        return {
          loading: true,
          isAuthenticated: false,
        };                         
  
      case LOGIN_SUCCESS_STUDENT:
      case REGISTER_SUCCESS_STUDENT:
      case LOAD_SUCCESS_STUDENT:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          student: action.payload,
        };
  
      case LOGIN_FAIL_STUDENT:
      case REGISTER_FAIL_STUDENT:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          student: null,
          error: action.payload,
        };
  
      case LOAD_FAIL_STUDENT:
        return {
          loading: false,
          isAuthenticated: false,
          student: null,
          error: action.payload,
        };
  
        case LOGOUT_SUCCESS_STUDENT:
        return {
          loading: false,
          student: null,
          isAuthenticated: false,
        };
  
        case LOGOUT_FAIL_STUDENT:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  