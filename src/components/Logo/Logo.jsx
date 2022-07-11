import { Box } from '@mui/material';

export const Logo = () => {
  return (
    <Box
      sx={{
        width: { xs: '47px', lg: '70px' },
        height: { xs: '44px', lg: '66px' },
      }}
    >
      <img src="../images/logo@2x.png" alt="Logo" />
    </Box>
  );
};
