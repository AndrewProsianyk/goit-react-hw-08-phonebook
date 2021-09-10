import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../redux/operations';
import { getFilteredContacts } from '../redux/selectors';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = () => {
    const dispatch = useDispatch()
     useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    const contactList = useSelector(getFilteredContacts);

    if (contactList.length > 0) {
        return (
            <div>
                <ul className={styles.contactList}>
                    {contactList.map(contact => (
                        <li
                            className={styles.listItem}
                            key={contact.id}>
                            <span className={styles.name}>{contact.name}:</span>
                            <span className={styles.number}>{contact.number}</span>
                            <button
                                className={styles.button}
                                onClick={() => dispatch(deleteContact(contact.id))}>х</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <p>No contacts yet.</p>
        )
    }

}

ContactList.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}

export default ContactList;