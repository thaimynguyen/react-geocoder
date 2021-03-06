import SearchForm from "./components/SearchForm";
import Result from "./components/Result";
import ErrorWarning from "./components/ErrorWarning";
import SearchHistory from "./components/SearchHistory";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentResult, setCurrrentResult] = useState({
    name: "",
    lat: "",
    lon: "",
  });
  const [error, setError] = useState(false);
  const addSearchResult = (result) => {
    // Consider using useCallback for this
    // https://www.w3schools.com/react/react_usecallback.asp
    const newSearchResults = [...searchResults];
    newSearchResults.push({
      name: result["name"],
      lat: result["lat"],
      lon: result["lon"],
    });
    setSearchResults(newSearchResults);
  };
  return (
    <div className="App">
      <h1>Get Latitude and Logitude</h1>
      <SearchForm
        setError={setError}
        addSearchResult={addSearchResult}
        setCurrrentResult={setCurrrentResult}
      />
      <Result currentResult={currentResult} />
      {error === true && <ErrorWarning />}
      {searchResults.length > 0 && (
        <SearchHistory searchResults={searchResults} />
      )}
    </div>
  );
};

export default App;
