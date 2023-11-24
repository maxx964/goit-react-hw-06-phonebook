import { useDispatch } from 'react-redux';
import { setFilter } from '../store/contactsSlice';

import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
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
        onChange={handleFilterChange} 
      />
      </div>
  </div>
  );
};

export default Filter;
