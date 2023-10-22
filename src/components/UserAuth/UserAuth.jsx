import { NavLink } from 'react-router-dom';

export const UserAuth = () => {
  return (
    <>
      <li><NavLink to={'/register'}>Register</NavLink></li>
      <li><NavLink to={'/login'}>Login</NavLink></li>
    </>
  )
}
