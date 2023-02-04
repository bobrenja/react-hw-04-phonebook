import { Component } from 'react';
import { nanoid } from 'nanoid';

import MyForm from './Form/MyForm';
import Contacts from './Contacts/Contacts';
import Search from './Search/Search';

class MyPhoneBooksForm extends Component {

  static defaultProps = {};
  static propTypes = {};

  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contactPhone'));
    console.log(contacts);
    if (contacts && contacts.length) {
      //contacts?.length
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts.length !== contacts) {
      localStorage.setItem('contactPhone', JSON.stringify(contacts));
    }
  }

  handleEnterInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  addBook = ({ name, number }) => {
    const isName = Boolean(
      this.state.contacts.find(e => name.toLowerCase() === e.name.toLowerCase())
    );
    if (isName) {
      return alert(`${name} is contact book`);
    }

    this.setState(prevState => {
      const { contacts } = prevState;
      const newCont = { id: nanoid(), name: name, number: number };

      return { contacts: [newCont, ...contacts], name: '', number: '' };
    });
  };

  findContact() {
    const { filter, contacts } = this.state;
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

  deleteContact = id => {
    const { contacts } = this.state;
    const newContact = contacts.filter(e => e.id !== id);
    this.setState({ contacts: newContact });
  };

  render() {
    const contactsFilter = this.findContact();
    const isContact = Boolean(contactsFilter.length);
    return (
      <>
        <h1>Phonebook</h1>
        <MyForm onSubmit={this.addBook} />
        <Search handleEnterInput={this.handleEnterInput} />
        {isContact && (
          <Contacts
            contactsFilter={contactsFilter}
            deleteContact={this.deleteContact}
          />
        )}
      </>
    );
  }
}

export default MyPhoneBooksForm;
