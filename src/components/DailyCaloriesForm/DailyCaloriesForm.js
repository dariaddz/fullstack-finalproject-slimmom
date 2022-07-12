import { useDispatch } from 'react-redux';
import { postProduct } from '../../redux/userSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Container, Typography, TextField, styled } from '@mui/material';
import OrangeButton from '../../theme';
import Modal from '../Modal';

import DailyCalorieIntake from '../DailyCalorieIntake';
import s from './dailyCaloriesForm.module.css';

const MainContainer = styled(Container)(({ theme }) => ({
  padding: '32px 20px',
  [theme.breakpoints.up('md')]: {
    padding: '100px 32px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '300px 0px 0px 25px',
  },
}));

const FormBox = styled(Box)(({ theme }) => ({
  display: 'block',

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '545px',
  },
}));

const FormLabel = styled('label')(({ theme }) => ({
  display: 'block',
  marginBottom: '32px',
  width: '240px',
  [theme.breakpoints.up('md')]: {
    marginBottom: '40px',
    marginRight: '32px',
  },
}));

const validationSchema = yup.object().shape({
  height: yup
    .number()
    .required('Please enter your  height')
    .positive()
    .integer()
    .min(100, 'Height should be from 100 to 250 cm')
    .max(250, 'Height should be from 100 to 250 cm'),
  age: yup
    .number()
    .required('Please enter your age')
    .positive()
    .integer()
    .min(18, 'Your age should be from 18 to 100')
    .max(100, 'Your age should be from 18 to 100'),

  currentWeight: yup
    .number()

    .required('Please enter current weight')
    .positive()
    .integer()
    .min(20)
    .max(500),
  desiredWeight: yup
    .number()

    .required('Please enter desired weight')
    .positive()
    .integer()
    .min(40)
    .max(300),
});

const DailyCaloriesForm = () => {
  const userData = useSelector(state => {
    return state.userData.user;
  });
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '1',
    },

    onSubmit: (values, actions) => {
      dispatch(postProduct(formik.values));
      actions.resetForm({
        initialValues: {
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: '1',
        },
      });
    },
    validationSchema: validationSchema,
  });
  return (
    <>
      <MainContainer>
    
        <form onSubmit={formik.handleSubmit}>  
        
        <Typography
          conponent="h2"
          display={'block'}
          mb={'40px'}
          sx={{
            fontSize: { sm: '18px', md: '34px' },
            fontWeight: '700',
            width: { sm: '280px', md: '700px', lg: '600px' },
            mb: { xs: '32px', md: '68px' },
          }}
        >
          Прорахуй свою добову норму калорій прямо зараз
        </Typography>

          <FormBox color="#9B9FAA">
            <FormLabel htmlFor="height">
              <TextField
                fullWidth
                variant="standard"
                id="height"
                name="height"
                type="number"
                value={formik.values.height}
                onChange={formik.handleChange}
                placeholder="Зріст*"
                error={formik.touched.height && Boolean(formik.errors.height)}
                helperText={formik.touched.height && formik.errors.height}
              />
            </FormLabel>

            <FormLabel htmlFor="age">
              <TextField
                fullWidth
                variant="standard"
                type="number"
                id="age"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                placeholder="Вік*"
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
              />
            </FormLabel>

            <FormLabel htmlFor="currentWeight">
              <TextField
                fullWidth
                variant="standard"
                type="number"
                id="currentWeight"
                name="currentWeight"
                value={formik.values.currentWeight}
                onChange={formik.handleChange}
                placeholder="Поточна вага*"
                error={
                  formik.touched.currentWeight &&
                  Boolean(formik.errors.currentWeight)
                }
                helperText={
                  formik.touched.currentWeight && formik.errors.currentWeight
                }
              />
            </FormLabel>

            <FormLabel htmlFor="desiredWeight">
              <TextField
                fullWidth
                variant="standard"
                id="desiredWeight"
                type="number"
                name="desiredWeight"
                value={formik.values.desiredWeight}
                onChange={formik.handleChange}
                placeholder="Бажана вага*"
                error={
                  formik.touched.desiredWeight &&
                  Boolean(formik.errors.desiredWeight)
                }
                helperText={
                  formik.touched.desiredWeight && formik.errors.desiredWeight
                }
              />
            </FormLabel>

           
            <div role="group" aria-labelledby="my-radio-group" className={s.radioGroup}>
              <p className={s.titleRadio}>Група крові*</p>
              <label htmlFor="bloodType">
                <input
                  type="radio"
                  name="bloodType"
                  value="1"
                  onChange={formik.handleChange}
                  checked={formik.values.bloodType === '1'}
                />
                <span className={s.radioButton}>1</span>
              </label>
              <label htmlFor="bloodType">
                <input
                  type="radio"
                  name="bloodType"
                  value="2"
                  onChange={formik.handleChange}
                  checked={formik.values.bloodType === '2'}
                />
                <span className={s.radioButton}>2</span>
              </label>
              <label htmlFor="bloodType">
                <input
                  type="radio"
                  name="bloodType"
                  value="3"
                  onChange={formik.handleChange}
                  checked={formik.values.bloodType === '3'}
                />
                <span className={s.radioButton}>3</span>
              </label>
              <label htmlFor="bloodType">
                <input
                  type="radio"
                  name="bloodType"
                  value="4"
                  onChange={formik.handleChange}
                  checked={formik.values.bloodType === '4'}
                />
                <span className={s.radioButton}>4</span>
              </label>
            </div>
          </FormBox>
        
 <div className={s.button}>
          <OrangeButton
            variant="contained"
            type="submit"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Схуднути
          </OrangeButton>
          </div>
          </form>
       
      </MainContainer>

      {showModal && userData && (
        <Modal onClose={() => setShowModal(false)}>
          {<DailyCalorieIntake />}
        </Modal>
      )}
    </>
  );
};

export default DailyCaloriesForm;
