import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

import { Box } from '@mui/material';
import { Logo } from '../Logo';
import { AuthNav } from '../AuthNav';
import Navigation from '../Navigation';
import UserInfo from '../UserInfo';

export const Appbar = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoggedIn = true

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          height: { xs: '80px', lg: '153px' },
          margin: '0',
          padding: {
            xs: '0 20px 0 20px',
            sm: '0 20px 0 20px',
            md: '0 32px 0 32px',
            lg: '0 16px 0 16px',
          },
          alignItems: { xs: 'center', lg: 'flex-end' },
          justifyContent: { xs: 'space-between', lg: 'left' },
          width: {
            xs: 'calc(100vw-40px)',
            md: 'calc(100vw-64px)',
            lg: 'calc(100vw-32px)',
          },
          backgroundColor: "transparent",
         
        }}
        disableGutters={true}
        fixed={true}
      >
        <Logo />
        
  
        {isLoggedIn && (
          <Navigation />)}
        
        {isLoggedIn ? (
          <UserInfo />) :
          <AuthNav />}
      </Box>
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          height: '2px',
          width: '100%',
          backgroundColor: '#E0E0E0',
        }}
      />
    </>
  );
};
