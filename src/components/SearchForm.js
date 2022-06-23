import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const SearchForm = ({ addSearchResult, setError, setCurrrentResult }) => {
  const [searchField, setSearchField] = useState("");
  const onNameChange = (event) => {
    setSearchField(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://weather-report-backend.herokuapp.com/location?q=${searchField}`
      )
      .then((response) => {
        if ("error" in response["data"]) {
          setCurrrentResult({ name: "", lat: "", lon: "" });
          setError(true);
          console.log(response["data"]);
        } else {
          const name = response["data"][0]["display_name"];
          const lat = response["data"][0]["lat"];
          const lon = response["data"][0]["lon"];
          const result = { name: name, lat: lat, lon: lon };
          setError(false);
          setCurrrentResult(result);
          addSearchResult(result);
          console.log("Location API called");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setSearchField("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={searchField}
        onChange={onNameChange}
        placeholder="Enter location name"
      />
      <input type="submit" value="Search Now!" />
    </form>
  );
};

SearchForm.propTypes = {
  addSearchResult: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setCurrrentResult: PropTypes.func.isRequired,
};

export default SearchForm;
