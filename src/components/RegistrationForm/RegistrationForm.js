import styles from './registrationForm.module.css';
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '../Button';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { register } from '../../redux/auth/auth-operation';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  input: {
    width: 289,
    height: 35.5,
    '@media (min-width: 768px)': {
      width: 240,
    },
  },
  nameInput: {
    marginBottom: 40,
  },
  emailInput: {
    marginBottom: 40,
    // '@media (min-width: 768px)': {},
  },
  passwordInput: {
    marginBottom: 60,
  },
});

const validationSchema = yup.object({
  name: yup
    .string('Введіть своє імя')
    .min(2, 'Імя має містити більше 2 букв')
    .required('Імя обовязкове'),
  email: yup
    .string('Введіть свою електронну адресу')
    .min(
      3,
      'Електронна адреса має містити більше двох символів, а також ".", "@"'
    )
    .required('електронна адреса обовязкова'),
  password: yup
    .string('Введіть свій пароль')
    .min(8, 'Пароль має містити більше 8 символів')
    .required('Пароль обовязковий'),
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const classes = useStyles();

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: (values, { resetForm }) => {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      dispatch(register(payload));
      resetForm({ values: '' });
    },
  });

  return (
    <div className={styles.registrationForm}>
      <form className={styles.formAuth} onSubmit={formik.handleSubmit}>
        <h2 className={styles.formTitle}>Реєстрація</h2>
        <TextField
          styles={{ color: 'blue' }}
          className={`${classes.input} ${classes.nameInput}`}
          id="name"
          name="name"
          value={formik.values.name}
          placeholder="Ім'я *"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <TextField
          styles={{ color: 'blue' }}
          className={`${classes.input} ${classes.emailInput}`}
          id="email"
          name="email"
          placeholder="Електронна адреса *"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          className={`${classes.input} ${classes.passwordInput}`}
          styles={{ color: 'blue' }}
          id="password"
          name="password"
          placeholder="Пароль *"
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            // <-- This is where the toggle button is added.
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                ></IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div className={styles.buttons}>
          <NavLink to={'./login'}>
            <div className={styles.button}>
              <Button text="Вхiд" type="secondary" />
            </div>
          </NavLink>
          <div className={styles.button}>
            <Button
              text="Регистрация"
              type="submit"
              customType="primary"
              disabled={formik.isSubmitting || !formik.dirty}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
