function clear() {
  return localStorage.removeItem('access_token');
}

function getToken() {
  return localStorage.getItem('access_token');
}

function setToken(token) {
  return localStorage.setItem('access_token', token);
}

function authenticate() {
  const headers = new Headers();
  headers.append('customHeader', '9');

  const init = {
    credentials: 'include',
    method: 'get',
    mode: 'cors',
    headers
  };

  return fetch(`http://localhost:9000/token.json`, init);
}

export default {
  authenticate,
  getToken,
  setToken,
  clear
};
