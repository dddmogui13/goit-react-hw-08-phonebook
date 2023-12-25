import { setFilterdContacts } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';

const Filter = () => {
  const filterQuery = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const showFilteredContacts = e => {
    dispatch(setFilterdContacts(e.target.value));
  };
  return (
    <label className={css.label}>
      Find in Contacts
      <input
        className={css.input}
        type="text"
        onChange={showFilteredContacts}
        value={filterQuery}
      />
    </label>
  );
};

export default Filter;
