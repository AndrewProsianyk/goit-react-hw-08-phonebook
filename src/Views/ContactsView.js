import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './View.module.css'

export default function ContactsView() {
    
    return (
        <div className={styles.container}>
            <h1 className={styles.contactsTitle}>Phonebook</h1>
            <ContactForm />
            <h2 className={styles.contactsTitle}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}