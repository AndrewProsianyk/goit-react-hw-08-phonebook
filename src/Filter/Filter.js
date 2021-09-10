import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../redux/actions';
import { getFilter } from '../redux/selectors';
import styles from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter)
  const onChange = e => dispatch(changeFilter(e.currentTarget.value));
  
  return (
    <label className={styles.label}>
      <span>Let's find somebody</span>
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default Filter;