import style from './Search.module.scss';

const Search = props => {
  return (
    <div className={style.filter}>
      <label className={style.label}>Search contact</label>
      <input
        type="text"
        placeholder="Search contact"
        name="filter"
        onChange={props.handleEnterInput}
      />
    </div>
  );
};

export default Search;
