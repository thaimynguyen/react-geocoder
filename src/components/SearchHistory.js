import SearchEntry from "./SearchEntry";

const SearchHistory = ({ searchResults }) => {
  const results = searchResults.map((result, i) => {
    return (
      <li key={i}>
        <SearchEntry {...result} />
      </li>
    );
  });
  return (
    <div>
      <h2>Search History</h2>
      <ol>{results}</ol>
    </div>
  );
};

export default SearchHistory;
