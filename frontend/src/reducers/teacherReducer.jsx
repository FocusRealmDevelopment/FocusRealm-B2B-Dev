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
    
  } from "../constants/teacherConstant.jsx";
  
  export const teacherReducer = (state = { teacher: {} }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST_TEACHER:
      case REGISTER_REQUEST_TEACHER:
      case LOAD_REQUEST_TEACHER:
        return {
          loading: true,
          isAuthenticated: false,
        };                         
  
      case LOGIN_SUCCESS_TEACHER:
      case REGISTER_SUCCESS_TEACHER:
      case LOAD_SUCCESS_TEACHER:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
           teacher: action.payload,
        };
  
      case LOGIN_FAIL_TEACHER:
      case REGISTER_FAIL_TEACHER:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          teacher: null,
          error: action.payload,
        };
  
      case LOAD_FAIL_TEACHER:
        return {
          loading: false,
          isAuthenticated: false,
          teacher: null,
          error: action.payload,
        };
  
        case LOGOUT_SUCCESS_TEACHER:
        return {
          loading: false,
          teacher: null,
          isAuthenticated: false,
        };
  
        case LOGOUT_FAIL_TEACHER:
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
  