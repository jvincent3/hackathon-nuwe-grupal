import * as types from '../../constants/ActionTypes';

const initialState = {
  name: 'Edrop'
}

export const UserReducer  = (user = initialState, action) => {
  switch (action.type) {
    case types.SET_USER: {
      return {
        user: action.user
      }
    }

    default:
      return user;
  }
};

export default UserReducer;
