const handleError = (error) => {
  let dataErr = {};
  let setMessage = '';
  let setStep = '';
  const { response, message } = error;
  const status = response ? response.status : null;
  try {
    setMessage = response?.data?.data?.message || message;
    setStep = response?.data?.data?.step || '';
  } catch (e) {
    console.log(e);
  }
  switch (status) {
    case 400:
      dataErr = {
        data: response,
        code: response.status,
        message: response?.data?.message || setMessage,
        desc: 'Bad Request',
      };
      break;
    case 401:
      dataErr = {
        code: response.status,
        message: setMessage,
        desc: 'Unauthorized',
      };

      window.location.href = `${window.location.origin}/dashboard`;

      localStorage.clear();
      break;
    case 402:
      dataErr = {
        code: response.status,
        message: setMessage,
        desc: 'Payment Required',
      };
      break;
    case 403:
      dataErr = {
        code: response.status,
        message: setMessage,
        desc: 'Forbidden',
      };
      break;
    case 404:
      dataErr = {
        code: response.status,
        message: setMessage,
        desc: 'Not Found',
      };
      break;
    case 409:
      dataErr = {
        code: response.status,
        message: setMessage,
        desc: 'Conflict',
      };
      break;
    case 422:
      dataErr = {
        code: response.status,
        message: setMessage,
        desc: response.data.response.message,
        step: setStep,
      };
      break;
    case 500:
      dataErr = {
        code: response.status,
        message: setMessage,
        desc: 'Internal Server Error',
      };
      break;
    default:
      dataErr = {
        code: 404,
        message: setMessage,
        desc: message,
      };
  }
  return dataErr;
};

export default handleError;
