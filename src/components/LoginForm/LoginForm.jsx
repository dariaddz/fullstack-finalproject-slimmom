// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import Button from '../Button';
import { Box, TextField } from '@mui/material';

const validateRegister = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 100) {
    errors.name = 'Must be 100 characters or less';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  } else if (
    !/^[a-zA-Zа-яА-Я0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/i.test(
      values.name
    )
  ) {
    errors.name = 'Field contain errors';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^([a-z0-9._%+-]{2,})+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  } else if (values.email.startsWith('-') || values.email.slice(-1) === '-') {
    errors.email = 'The field cannot start with a hyphen or end with a hyphen';
  } else if (values.email.length < 3 || values.email.length > 254) {
    errors.email =
      'The field can be entered from 3 to 254 characters inclusive';
  }
  if (!values.password) {
    errors.password = 'Enter your password';
  } else if (values.password.length > 100) {
    errors.password = 'Must be 30 characters or less';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  } else if (
    values.password.startsWith('-') ||
    values.password.startsWith('.')
  ) {
    errors.password = 'Поле може містити літери латиниці, цифри та знаки';
  }
  return errors;
};

export const LoginForm = ({ onRegistration, isFetching }) => {
  // const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    validate: validateRegister,
    enableReinitialize: true,
    onSubmit: ({ name, email, password }) => {
      onRegistration({ name, email, password });
    },
  });

  // const { values, handleSubmit, handleChange, handleBlur, touched, errors } =
  //   form;

  // const onPasteHandler = e => {
  //   e.preventDefault();
  // };

  // const handleLink = () => {
  //   navigate('/login');
  // };
  const labelFontStyle = {
    fontFamily: 'Verdana',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: '0.04em',
  };

  return (
    <Box
      sx={{
        width: { xs: '280px', md: '240px' },
        margin: { xs: 'auto', md: '0' },
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <form color="black" onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ display: 'block' }}
          InputLabelProps={{ style: { ...labelFontStyle } }}
          inputProps={{ style: { color: '#111111' } }}
          variant="standard"
          fullWidth
          id="name"
          name="name"
          label="Name *"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={{ display: 'block' }}
          InputLabelProps={{ style: { ...labelFontStyle } }}
          inputProps={{ style: { color: '#111111' } }}
          variant="standard"
          fullWidth
          id="email"
          name="email"
          label="Email *"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ display: 'block' }}
          InputLabelProps={{ style: { ...labelFontStyle } }}
          inputProps={{ style: { color: '#111111' } }}
          variant="standard"
          fullWidth
          id="password"
          name="password"
          label="Password *"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button text="Login" customType="primary"></Button>
      </form>
    </Box>
  );
};
