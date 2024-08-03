import css from './SearchBox.module.css'

const SearchBox = ({ value, onsearchbox }) => {
  return (
      <div>
          <p >Find contact by name</p>
      <input className="css.search"
        type="text"
        value={value}
        onChange={(e) => onsearchbox(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
};

export default SearchBox;
