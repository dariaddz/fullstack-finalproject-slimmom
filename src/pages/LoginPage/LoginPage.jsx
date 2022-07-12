import { Box } from '@mui/material';
import { LoginForm } from '../../components/LoginForm';

export const LoginPage = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '40px 20px 0 20px',
          md: '337px 32px 0 32px',
          lg: '306px 16px 0 16px',
        },
        // margin: { xs: '40px 0 0 0', md: '160px 0 0 0' },
      }}
    >
      <LoginForm />
    </Box>
  );
};
