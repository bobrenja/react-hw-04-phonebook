import PropTypes from 'prop-types';
import style from './Contacts.module.scss';

const Contacts = ({ contactsFilter = [], deleteContact }) => {
  return (
    <div className={style.contact}>
      <h2>Contacts</h2>
      <ol className={style.item}>
        {contactsFilter.map(({ id, name, number }) => (
          <li key={id} className={style.list}>
            <span>
              <b>{name}</b>: {number}
            </span>

            <button
              type="button"
              className={style.btn}
              onClick={() => deleteContact(id)}
            >
              X
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contacts;

Contacts.propTypes = {
  contactsFilter: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
