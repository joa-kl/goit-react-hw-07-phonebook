import propTypes from 'prop-types';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import {deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {

  const filteredContacts = useSelector(selectFilteredContacts)
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  

   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(
      deleteContact(id));
      Notify.warning("Contact was deleted");
  };

  return (

    <div>
      {isLoading && <p>Loading....</p>}
       {error && <p>{error}</p>}
      <ul>
        {filteredContacts.map(({id, name, number}) => (
          <li key={id} className={css.contactListItem}>
            {name}: {number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
)};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};