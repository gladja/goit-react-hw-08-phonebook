import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//token utility
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
})

export const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization']
}

//api request
export const singUp = async (dataUser) => {
  const { data }  = await instance.post('users/signup', dataUser);
  setToken(data.token)
  return data;
};

export const logIn = async (dataUser) => {
  const { data }  = await instance.post('users/login', dataUser);
  setToken(data.token)
  return data;
};

export const logOut = async () => {
  // const { data } =
    await instance.post('users/logout');
  // console.log(data);
  deleteToken()
  // return data;
};

export const refreshUser = async () => {
  const token = JSON.parse(localStorage.getItem('persist:auth'))
  setToken(JSON.parse(token?.token))
  // console.log(JSON.parse(token?.token));
  const { data }  = await instance('users/current');
  setToken(data.token)
  return data;
};





//gladja
//gladja@mail.com
//1234qwer
