const SearchEntry = ({ name, lat, lon }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        <span>Latitude: {lat} </span>
        <span>Longtitute: {lon}</span>
      </p>
    </div>
  );
};

export default SearchEntry;
