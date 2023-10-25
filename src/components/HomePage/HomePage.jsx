import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectLogIn } from '../../redux/selectors';
import log from '../../img/log.webp';
import login from '../../img/login.webp';

export const HomePage = () => {
  const isLoggedIn = useSelector(selectLogIn);

  return (
    <>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
          <Box sx={{ width: 250 }}>
            <h1>Say hello to your phone book!</h1>
            {isLoggedIn ?
              <h3>You are authorized</h3>
              :
              <h3>Please register or login with an account</h3>
            }
          </Box>
          <Box>
            {isLoggedIn ?
              <img src={log} alt='authorized' width={350} height={350} />
              :
              <img src={login} alt='login' width={350} height={350} />

            }
          </Box>
        </Box>
    </>
  );
};
