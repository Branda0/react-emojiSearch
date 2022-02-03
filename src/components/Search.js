const Search = ({ setSearch }) => {
  return (
    <div className="search-container">
      <h1>😎 Emoji Search 😎</h1>
      <input
        className="search-input"
        onChange={(event) => {
          console.log(event.target.value);
          setSearch(event.target.value);
        }}
        type="text"
        placeholder="what emoji are you looking for ?"
      />
    </div>
  );
};

export default Search;
