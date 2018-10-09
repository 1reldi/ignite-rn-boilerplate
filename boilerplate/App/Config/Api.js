const local = true;
const url = local ? 'http://192.168.88.215:88' : 'http://34.215.128.121';

const api = {
  baseUrl: `${url}/api/`,
  profilePic: url,
  headers: {
    'Content-Type': 'application/json'
  }
};

export { api };
