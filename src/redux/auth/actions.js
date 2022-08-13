import { USER_LOGIN, USER_LOGOUT } from './constants';

export function userLogin(token, role) {
  return {
    type: USER_LOGIN,
    token,
    role,
  };
}

export function userLogout() {
  localStorage.removeItem('auth');
  return {
    type: USER_LOGOUT,
  };
}
