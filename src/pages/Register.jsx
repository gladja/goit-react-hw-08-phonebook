import { RegisterForm } from '../components/RegisterForm';
import { singUp } from '../service/api-request';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

export const Register = () => {
// const navigate = useNavigate()
  const registerUser = async (dataUser) => {
    try {
      // const data =
      singUp(dataUser);
      toast.success('Register success!');
      //navigate('');
    } catch (e) {
      toast.error('Register error!');
      console.log(e);
    }
  };

  return (
    <>
      <RegisterForm registerUser={registerUser} />
    </>
  );

};
