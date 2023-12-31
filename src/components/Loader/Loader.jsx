import { ThreeDots } from  'react-loader-spinner'
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { selectIsLoading } from '../../redux/auth/selectors';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
  <>
    {isLoading &&
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 4 }}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      </Box>
    }
  </>
  )
};
