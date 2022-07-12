import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import logo from "./logo.svg";
import './App.css';

// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

//const HomePage = lazy(() => import('./pages/homePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
// const LoginPage = lazy(() => import('./pages/loginPage'));
// const CalculatorPage = lazy(() => import('./pages/calculatorPage'));
//const DiaryPage = lazy(() => import('./pages/DiaryPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" element={<PublicRoute />}> */}
          {/* <Route path="/" element={<HomePage />} />
          {/* </Route> */}

          {/* <Route
            path="/register"
            element={<PublicRoute restricted redirectTo="/" />}
          > */}
          {<Route path="/register" element={<RegistrationPage />} />}
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
          {/*<Route path="/diary" element={<DiaryPage />} />}
          {/* </Route> */}
          {/* <Route
            path="*"
            element={<PublicRoute restricted redirectTo="/diary" />}
          >
            <Route path="*" element={<NotFoundPage />} />
          </Route> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
