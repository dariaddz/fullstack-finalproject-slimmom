import { useEffect } from 'react';
import { useSelector } from 'react-redux';

//import MainPage from '../../components/MainPage';
//import Header from '../../components/Header';
import RegistrationForm from '../../components/RegistrationForm';
//import Loader from '../../components/Loader';

import { getLoading } from '../../redux/auth/auth-selector';

import styles from '../../components/RegistrationForm/RegistrationForm.module.css';

const RegistrationPage = () => {
  const isLoading = useSelector(getLoading); // Селектор статуса загрузки

  useEffect(() => {
    document.title = 'Регистрация | SlimMom';
  }, []);

  return (
    <>
      <div className={styles.registrationPage}>
       
        <RegistrationForm className={styles.registrationPage__form} />
      </div>
    </>
  );
};

export default RegistrationPage;
