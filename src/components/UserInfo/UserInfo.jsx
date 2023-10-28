import { useSelector } from 'react-redux';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { selectUserMail, selectUserName } from '../../redux/auth/selectors';

export const UserInfo = () => {
  const userMail = useSelector(selectUserMail);
  const userName = useSelector(selectUserName);
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, px: 1 }}>
        <Box sx={{ width: 350, p: 4, borderRadius: 4, boxShadow: '0px 10px 20px 2px rgba(0, 0, 0, 0.2)' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bolder', mb: 2, textTransform: 'uppercase' }}>User info</Typography>
          <Typography sx={{ fontWeight: 'bolder', mb: 1,  }}>Name: {userName}</Typography>
          <Typography sx={{ fontWeight: 'bolder', mb: 1,  }}>Email: {userMail}</Typography>
        </Box>
      </Box>
    </>
  )
}
