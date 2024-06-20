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
  LOGOUT_FAIL_ADMIN
  
} from "../constants/adminConstants.jsx";

export const adminReducer = (state = { admin: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_ADMIN:
    case REGISTER_REQUEST_ADMIN:
    case LOAD_REQUEST_ADMIN:
      return {
        loading: true,
        isAuthenticated: false,
      };                         

    case LOGIN_SUCCESS_ADMIN:
    case REGISTER_SUCCESS_ADMIN:
    case LOAD_SUCCESS_ADMIN:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        admin: action.payload,
      };

    case LOGIN_FAIL_ADMIN:
    case REGISTER_FAIL_ADMIN:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        admin: null,
        error: action.payload,
      };

    case LOAD_FAIL_ADMIN:
      return {
        loading: false,
        isAuthenticated: false,
        admin: null,
        error: action.payload,
      };

      case LOGOUT_SUCCESS_ADMIN:
      return {
        loading: false,
        admin: null,
        isAuthenticated: false,
      };

      case LOGOUT_FAIL_ADMIN:
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
