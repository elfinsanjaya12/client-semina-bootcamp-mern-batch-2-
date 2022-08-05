import axios from 'axios';
import handleError from './handleError';
import { config } from '../configs';

export async function getData(url, params) {
  try {
    const { token } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    return await axios.get(`${config.api_host_dev}${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    handleError(err);
  }
}

export async function postData(url, payload) {
  const { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.post(`${config.api_host_dev}${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function putData(url, payload) {
  const { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.put(`${config.api_host_dev}${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function deleteData(url) {
  const { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

  return await axios.delete(`${config.api_host_dev}${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
