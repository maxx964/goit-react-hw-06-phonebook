
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/contactsSlice';


import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.filter}>
        <h2 className={styles.h2}>Contacts</h2>
        <h3 className={styles.h3}>Find contacts by name</h3>
        <input
          className={styles.input}
          type="text"
          name="filter"
          placeholder="Enter first or last name"
          value={filter}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Filter;
