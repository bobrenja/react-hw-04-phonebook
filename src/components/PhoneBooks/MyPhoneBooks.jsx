import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import MyForm from './Form/MyForm';
import Contacts from './Contacts/Contacts';
import Search from './Search/Search';

const MyPhoneBooksForm = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem('contactPhone'));
    return contacts ? contacts : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactPhone', JSON.stringify(contacts));
  }, [contacts]);

  const addBook = ({ name, number }) => {
    const isName = Boolean(
      contacts.find(e => name.toLowerCase() === e.name.toLowerCase())
    );
    if (isName) {
      return alert(`${name} is contact book`);
    }

    const newCont = { id: nanoid(), name: name, number: number };
    setContacts(prevCont => [newCont, ...prevCont]);
  };

  const handleEnterInput = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  function findContact() {
    if (!filter) {
      return contacts;
    }
    const normalaiseLow = filter.toLowerCase();
    const res = contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalaiseLow) ||
        number.includes(normalaiseLow)
    );
    return res;
  }

  const deleteContact = id => {
    const newContact = contacts.filter(e => e.id !== id);
    setContacts(newContact);
  };

  const isContact = Boolean(contacts.length);

  return (
    <>
      <h1>Phonebook</h1>
      <MyForm onSubmit={addBook} />
      <Search handleEnterInput={handleEnterInput} />
      {isContact && (
        <Contacts
          contactsFilter={findContact()}
          deleteContact={deleteContact}
        />
      )}
    </>
  );
};

export default MyPhoneBooksForm;
