import { Outlet } from 'react-router-dom';
import { Appbar } from '../Appbar';
import Container from '@mui/material/Container';

export const Layout = () => {
  return (
    <Container disableGutters={true}>
      <Appbar />
      <Outlet />
    </Container>
  );
};
