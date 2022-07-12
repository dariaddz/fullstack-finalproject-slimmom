import { Box } from '@mui/material';
import logo from "../../images/logo/logo-2x.png"
import logoSlim from "../../images/logo/logo-slim-2x.png"
import logoMom from "../../images/logo/logo-mom-2x.png"
export const Logo = () => {
  return (
    <>   <Box
      sx={{
        width: { xs: '47px', lg: '70px' },
        height: { xs: '44px', lg: '66px' },
      }}
    >
      <img src={logo} alt="Logo" />
    </Box>
      <Box    sx={{
          display: { sm: 'none', md: 'flex' },
      }}>
        
       
      <img src={logoSlim} alt="Logo name" width={47} height={16} />
      <img src={logoMom} alt="Logo name" width={47} height={16}/></Box>
     
    </>
 
  );
};
