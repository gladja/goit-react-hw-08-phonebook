import { configureStore } from '@reduxjs/toolkit';
import { registerReducer } from './registerSlice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';


const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, registerReducer);

const reducer = {
  register: registerReducer,
  token: persistedReducer,
}

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
