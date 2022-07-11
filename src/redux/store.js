import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// імпортувати authReducer хто займається аутентифікацією та реєстрацією на фронтенді і розкоментувати все тут і в index.js

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
//   // додати до whitelist ще якусь property якщо її також потрібно зберігати в локал сторедж саме з auth
// };

export const store = configureStore({
  reducer: {
    // auth: persistReducer(authPersistConfig, authReducer),
    // додати редьюсери кому які треба для роботи
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      //   serializableCheck: {
      //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      //   },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// export const persistor = persistStore(store);
