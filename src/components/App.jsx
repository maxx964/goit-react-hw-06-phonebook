import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* Замість звичайних компонентів використовуйте підключені */}
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
