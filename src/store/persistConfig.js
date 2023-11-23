import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import contactsReducer from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'], // Ім'я срезу, який ви хочете зберігати
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export default persistedReducer;
