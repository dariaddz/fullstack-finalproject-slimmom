import { useState } from 'react';

import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

const typografyStyle = {
  fontFamily: 'Gotham Pro',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '13px',
  letterSpacing: '0.04em',
};

export const AuthNav = () => {
  const [active, setActiv] = useState('signIn');
  const onClickSignIn = () => {
    setActiv('signIn');
  };

  const onClickRegister = () => {
    setActiv('register');
  };
  return (
    <Box>
      <Button sx={{ padding: '0' }}>
        <Typography
          sx={{ ...typografyStyle }}
          color={active === 'signIn' ? '#212121' : '#9B9FAA'}
          onClick={onClickSignIn}
        >
          SIGN IN
        </Typography>
      </Button>
      <Button sx={{ padding: '0', marginLeft: '16px' }}>
        <Typography
          sx={{ ...typografyStyle }}
          onClick={onClickRegister}
          color={active === 'register' ? '#212121' : '#9B9FAA'}
        >
          REGISTRATION
        </Typography>
      </Button>
    </Box>
  );
};
