import * as types from '../constants/ActionTypes';

export const setUser = (user) => ({
  type: types.SET_USER,
  user,
});