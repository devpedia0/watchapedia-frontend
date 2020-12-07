import axios from 'axios';

const token = JSON.parse(localStorage.getItem('accessToken'));

// const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const api = axios.create({
  // baseURL: "http://121.160.25.204:8080",
  baseURL: 'http://222.111.195.42:8080',
  //baseURL: "http://localhost:8080",
  headers: {
    // Authorization: `${token}`,
    //"Access-Control-Allow-Origin": "*",
    Authorization:
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0NCIsInJvbGVzIjpbIlVTRVIiLCJBRE1JTiJdLCJ0eXBlIjoicmVmcmVzaCIsImV4cCI6MTYwNjYyOTM4OSwiaWF0IjoxNjA2MDI0NTg5fQ.vX8L1_-Dq-GgexAixYw7yM2g4tlnrKz1NxOYxt6OUfI',
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwicm9sZXMiOlsiVVNFUiIsIkFETUlOIl0sInR5cGUiOiJyZWZyZXNoIiwiZXhwIjoxNjA3MjM2MjM3LCJpYXQiOjE2MDY2MzE0Mzd9.2W9q17zJ2-PUcy5gPNYa_iZ0Ii1Fo4dFSQoCCmkUZBM',
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2Nzk1Iiwicm9sZXMiOlsiVVNFUiJdLCJ0eXBlIjoicmVmcmVzaCIsImV4cCI6MTYwNzYyNTczOSwiaWF0IjoxNjA3MDIwOTM5fQ.NFR56i82QJiyUSs4Hwj0YVFMI-ETx-Qi2Dhjb7E8E5U', //만료체크할 엑세스토큰
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log('에러', error);
    const _refreshToken = localStorage.getItem('refreshToken');

    if (error.response.data.status === 401 && error.config && error.response) {
      console.log('토큰값 에러', error);
      return api
        .post(
          'auth/token',
          { refreshToken },
          {
            headers: { refreshToken: _refreshToken },
          }
        )
        .then((response) =>
          localStorage.setItem(
            'accessToken',
            JSON.stringify(response.headers.authorization)
          )
        );
    }
    return Promise.reject(error);
  }
);

export default api;
