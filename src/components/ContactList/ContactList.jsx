import propTypes from 'prop-types';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { handleRemoveContact } from 'redux/slices/contactSlice';
import { Notify } from 'notiflix';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  const contacts = [];
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // const filteredContacts = contacts?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );

   useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const deleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  return (

    <div>
      <ul>
        {filteredContacts.map(({id, name, number}) => (
          <li key={id} className={css.contactListItem}>
            {name}: {number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => 
                dispatch(
                  deleteContact(id),
                  Notify.warning("Contact was deleted"),
              )}
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