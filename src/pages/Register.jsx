import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Loader } from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';

const Register = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      { isLoading ? <Loader/> : <RegisterForm /> }
    </>
  );
};

export default Register
