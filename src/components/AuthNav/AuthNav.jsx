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
  const [active, setActiv] = useState(true);
  const onClickSignIn = () => {
    setActiv(!active);
  };

  const onClickRegister = () => {
    setActiv(!active);
  };
  return (
    <Box>
      <Button sx={{ padding: '0' }}>
        <Typography
          sx={{ ...typografyStyle }}
          color={active ? '#212121' : '#9B9FAA'}
          onClick={onClickSignIn}
        >
          SIGN IN
        </Typography>
      </Button>
      <Button sx={{ padding: '0', marginLeft: '16px' }}>
        <Typography
          sx={{ ...typografyStyle }}
          onClick={onClickRegister}
          color={!active ? '#212121' : '#9B9FAA'}
        >
          REGISTRATION
        </Typography>
      </Button>
    </Box>
  );
};
