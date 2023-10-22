import { ThreeDots } from  'react-loader-spinner'
import { selectIsLoading } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
  <>
    {isLoading &&
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
    }
  </>
  )
};
