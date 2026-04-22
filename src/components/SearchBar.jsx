function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by first or last name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={styles.input}
    />
  );
}

const styles = {
  input: {
    width: "100%",
    maxWidth: "400px",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "16px"
  }
};

export default SearchBar;