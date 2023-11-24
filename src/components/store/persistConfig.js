import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import contactsReducer from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export default persistedReducer;
