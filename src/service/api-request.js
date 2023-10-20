import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const singUp = async (dataUser) => {
  const  data  = await axios.post('users/signup', dataUser);

  console.log(data);
  return data;
};


//gladja
//gladja@mail.com
//1234qwer
