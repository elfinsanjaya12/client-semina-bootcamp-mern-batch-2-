import { postData } from '../utils/fetch';
import axios from 'axios';
import { config } from '../configs';

const handleError = (error) => {
  console.log('error');
  console.log(error.response.data.msg);

  // let dataErr = {};
  // let setMessage = '';
  // let setStep = '';
  // const { response, msg } = error;
  // const status = response ? response.status : null;
  const originalRequest = error.config;
  console.log('originalRequest');
  console.log(originalRequest);

  if (error.response.data.msg === 'jwt expired') {
    console.log('test');
    originalRequest._retry = true;
    const session = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

    console.log('session');
    console.log(session);
    return axios
      .get(`${config.api_host_dev}/cms/refresh-token/${session.refreshToken}`)
      .then((res) => {
        console.log('res');
        console.log(res);
        if (res.data.data) {
          console.log('res.data');
          console.log(res.data);

          localStorage.setItem(
            'auth',
            JSON.stringify({
              ...session,
              token: res.data.data.token,
            })
          );
          originalRequest.headers.authorization = res.data.token;
          return axios(originalRequest);
        } else {
          window.location.href = '/login';
          localStorage.removeItem('auth');
        }
      });
  }
  return error;
};

export default handleError;
