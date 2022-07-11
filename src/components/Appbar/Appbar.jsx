// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth';

import { Box } from '@mui/material';
import { Logo } from '../Logo';
import { AuthNav } from '../AuthNav';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';

export const Appbar = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: { xs: '80px', md: '153px' },
          margin: '0',
          padding: { xs: '0 20px 0 20px', md: '0 16px 0 16px' },
          alignItems: { xs: 'center', md: 'flex-end' },
          justifyContent: { xs: 'space-between', md: 'left' },
          width: { xs: 'calc(100vw-40px)', md: 'calc(100vw-32px)' },
        }}
        disableGutters={true}
        fixed={true}
      >
        <Logo />
        {/* <UserMenu /> */}
        <AuthNav />
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
          height: '2px',
          width: '100%',
          backgroundColor: '#E0E0E0',
        }}
      />
    </>
  );
};
