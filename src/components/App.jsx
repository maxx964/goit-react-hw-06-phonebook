import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../components/store/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
  }, []);

  const handleSubmit = ({ name, number }) => {
     dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleFilterChange = (e) => {
     dispatch(setFilter(e.target.value));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ContactForm onSubmit={handleSubmit} />
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        filter={filter}
      />
    </div>
  );
};

export default App;
