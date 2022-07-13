import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import DailyCaloriesForm from './components/DailyCaloriesForm';
import MainPage from './components/MainPage/MainPage';

import { Layout } from './components/Layout';

// -- Eugen
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginOperations, loginSelectors } from './redux/login';
import { PrivatRoute } from './services/PrivateRoute';
import PublicRoute from './services/PublicRoute';
//-- Eugen

// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

// const HomePage = lazy(() => import('./pages/homePage'));
// const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
// const CalculatorPage = lazy(() => import('./pages/calculatorPage'));

const DiaryPage = lazy(() => import('./pages/DiaryPage/DiaryPage'));


function App() {
  //--Eugen
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(loginSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(loginOperations.fetchCurrentUser());
  }, [dispatch]);
  //--Eugen
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<PublicRoute />}> */}
            {/* <Route path="/" element={<HomePage />}> */}
            <Route path="/" element={<MainPage />}>
              <Route index element={<DailyCaloriesForm />} />

              {/* <Route
            path="/register"
            element={<PublicRoute restricted redirectTo="/" />}
          > */}
              {/* <Route path="register" element={<RegistrationPage />} /> */}
              {/* </Route> */}
              {/* <Route
            path="/login"
            element={<PublicRoute restricted redirectTo="/" />}
          > */}

              {/* Eugen */}
              <Route
                path="login"
                element={
                  <PublicRoute
                    component={<LoginPage />}
                    redirectTo="/"
                    restricted
                  />
                }
              />
              {/* Eugen */}

              {/* </Route> */}
              {/* <Route

            path="/calculator"
            element={<PrivateRoute redirectTo="/login" />}
          > */}
              {/* <Route path="/diary" element={<DiaryPage />} /> */}
              {/* </Route> */}
              {/* <Route
            path="*"
            element={<PublicRoute restricted redirectTo="/diary" />}
          >
            <Route path="*" element={<NotFoundPage />} />
          </Route> */}
            </Route>
            {/* </Route>
          </Route> */}

            <Route path="/diary" element={<DiaryPage />} />
          </Route>

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
