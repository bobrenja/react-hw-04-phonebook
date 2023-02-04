import { Component } from 'react';
import styles from './addContactForm.module.scss';
import { nanoid } from 'nanoid';

class MyForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleEnterInput = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  nameId = nanoid();
  contactId = nanoid();

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={this.nameId}>
          Name
        </label>
        <input
          id={this.nameId}
          value={name}
          onChange={this.handleEnterInput}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={styles.label} htmlFor={this.contactId}>
          Contact
        </label>
        <input
          placeholder="Number tel"
          id={this.contactId}
          value={number}
          onChange={this.handleEnterInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default MyForm;
