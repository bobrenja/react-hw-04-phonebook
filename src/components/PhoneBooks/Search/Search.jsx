import PropTypes from 'prop-types';
import style from './Search.module.scss';

const Search = ({ handleEnterInput }) => {
  return (
    <div className={style.filter}>
      <label className={style.label}>Search contact</label>
      <input
        type="text"
        placeholder="Search contact"
        name="filter"
        onChange={handleEnterInput}
      />
    </div>
  );
};

export default Search;

Search.propTypes = {
  handleEnterInput: PropTypes.func.isRequired,
};
