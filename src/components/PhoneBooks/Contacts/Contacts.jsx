import style from './Contacts.module.scss';

const Contacts = props => {
  return (
    <div className={style.contact}>
      <h2>Contacts</h2>
      <ol className={style.item}>
        {props.contactsFilter.map(({ id, name, number }) => (
          <li key={id} className={style.list}>
            <span>
              <b>{name}</b>: {number}
            </span>

            <button
              type="button"
              className={style.btn}
              onClick={() => props.deleteContact(id)}
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
