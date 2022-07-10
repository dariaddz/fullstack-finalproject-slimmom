import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Header from '../../components/Header';
import DateForm from '../../components/DateForm';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
// import RightSideBar from '../../components/RightSideBar';
// import DiaryProductsList from '../../components/DiaryProductsList';
import Button from '../../components/Button';
import AddIcon from '@material-ui/icons/Add';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// import Loader from '../../components/Loader';

import {
  date,
} from '../../redux/day/day_selector';

import styles from './DiaryPage.module.css';

const DiaryPage = () => {
  const dispatch = useDispatch();


  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .split('T')[0]; // Текущий день локально с учётом временных зон
  const currentDate = useSelector(date); // Текущий день из базы


  const [mobileFormIsVisible, setMobileFormIsVisible] = useState(false);
  const handleClick = () => {
    setMobileFormIsVisible(prev => !prev);
  };

  // useEffect(() => {
  //   dispatch(getUserInfo());
  // }, [dispatch]);


  return (
    <>
      {/* <Header coloredBg /> */}
      <div className={styles.flexBox}>
        {!mobileFormIsVisible ? (
          <>
            <div className={styles.exampleBox}>
              <DateForm />
              <div className={styles.isHidddenMobile}>
                <DiaryAddProductForm />
              </div>

              {/* <DiaryProductsList /> */}
              <div className={styles.isHidddenTablet}>
                <Button
                  customType="primary"
                  className="small"
                  onClick={handleClick}
                  disabled={currentDate !== today}
                >
                  <AddIcon />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.exampleBox}>
              <DiaryAddProductForm />
              <KeyboardBackspaceIcon
                className={styles.backButton}
                onClick={handleClick}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DiaryPage;
