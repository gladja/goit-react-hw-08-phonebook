import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/operations';
import { selectUserMail, selectUserName } from '../../redux/selectors';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userMail = useSelector(selectUserMail);

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate('/login');
    toast.info('Log out success!');
  };

  return (
    <>
      <li><p>Welcome, {userName} {userMail}</p></li>
      <li>
        <button
          type='submit'
          onClick={handleLogOut}
        >
          Log out
        </button>
      </li>
    </>
  );
};
