import { LOGIN_LOADING, GET_LOGIN_SUCCESS } from "../actions/types";
import loginData from "../../json/loginData.json";
import isEmpty from '../../validation/is-empty';

const initialState = {
  isAuthenticated: false,
  user: {loginData},
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
