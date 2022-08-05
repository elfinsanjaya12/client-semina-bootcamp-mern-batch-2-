import { CLEAR_NOTIF, SET_NOTIF } from './constants';

export function setNotif(status, typeNotif, message) {
  return {
    type: SET_NOTIF,
    status,
    typeNotif,
    message,
  };
}

export function clearNotif() {
  return {
    type: CLEAR_NOTIF,
  };
}
