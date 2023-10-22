import axios from 'axios';

//* token utility
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

const updateToken = () => {
  const token = JSON.parse(localStorage.getItem('persist:auth'));
  setToken(JSON.parse(token?.token));
  // console.log(JSON.parse(token?.token));
}


//* api request authorization
export const singUp = async (dataUser) => {
  const { data } = await instance.post('users/signup', dataUser);
  setToken(data.token);
  return data;
};

export const logIn = async (dataUser) => {
  const { data } = await instance.post('users/login', dataUser);
  setToken(data.token);
  return data;
};

export const logOut = async () => {
  await instance.post('users/logout');
  deleteToken();
};

export const refreshUser = async () => {
  updateToken();
  const { data } = await instance('users/current');
  setToken(data.token);
  return data;
};


//* api request contacts
export const allContacts = async () => {
  const { data } = await instance('contacts');
  return data;
};

export const addContact = async (dataUser) => {
  updateToken();
  const { data } = await instance.post('contacts', dataUser);
  return data;
};

export const deleteContact = async (id) => {
  updateToken();
  const { data } = await instance.delete(`contacts/${id}`);
  return data;
};

