import { LOGIN_LOADING, GET_LOGIN_SUCCESS } from "./types";

export const signIn = (employeeData) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  dispatch({
    type: GET_LOGIN_SUCCESS,
    payload: employeeData,
  });
};

export const addListLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};
