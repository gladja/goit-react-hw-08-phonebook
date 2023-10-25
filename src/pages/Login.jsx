import { LoginForm } from '../components/LoginForm/LoginForm';
import { Loader } from '../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';

const Login = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? <Loader /> : <LoginForm />}
    </>
  );
};

export default Login;
