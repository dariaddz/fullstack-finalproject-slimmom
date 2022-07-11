import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import DailyCaloriesForm from './components/DailyCaloriesForm';
import Modal from './components/Modal';
import MainPage from './components/MainPage/MainPage';
import DailyCalorieIntake from './components/DailyCalorieIntake';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Layout } from './components/Layout';

// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./pages/homePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
// const LoginPage = lazy(() => import('./pages/loginPage'));
// const CalculatorPage = lazy(() => import('./pages/calculatorPage'));
const DiaryPage = lazy(() => import('./pages/diaryPage'));

function App() {
  const userData = useSelector(state => {
    return state.userData.user;
  });
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<PublicRoute />}> */}
            <Route path="/" element={<HomePage />}>
              <Route index element={<MainPage />}>
                <Route
                  index
                  element={
                    <DailyCaloriesForm
                      onOpenModal={() => {
                        setShowModal(true);
                      }}
                    />
                  }
                />

                <Route
                  path="/modal"
                  element={
                    showModal &&
                    userData && (
                      <Modal onClose={() => setShowModal(false)}>
                        {<DailyCalorieIntake />}
                      </Modal>
                    )
                  }
                />

                {/* </Route> */}

                {/* <Route
            path="/register"
            element={<PublicRoute restricted redirectTo="/" />}
          > */}
                <Route path="register" element={<RegistrationPage />} />
                {/* </Route> */}
                {/* <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/" />}
          > */}
                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* </Route> */}
                {/* <Route
            path="/calculator"
            element={<PrivateRoute redirectTo="/login" />}
          > */}
                <Route path="/diary" element={<DiaryPage />} />
                {/* </Route> */}
                {/* <Route
            path="*"
            element={<PublicRoute restricted redirectTo="/diary" />}
          >
            <Route path="*" element={<NotFoundPage />} />
          </Route> */}
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
