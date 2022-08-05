import { USER_LOGIN, USER_LOGOUT } from './constants';

let initialState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : { token: null, role: null, email: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        role: action.role,
        email: action.email,
      };

    case USER_LOGOUT:
      return { token: null, role: null, email: null };

    default:
      return state;
  }
}
