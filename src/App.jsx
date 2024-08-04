import React from 'react';
import ContactsForm from './components/ContactsForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Contacts Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
};

export default App;
