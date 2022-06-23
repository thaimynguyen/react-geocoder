const Result = ({ currentResult }) => {
  return (
    <div>
      <h2>Results for: {currentResult.name}</h2>
      <div>Latitude: {currentResult.lat} </div>
      <div>Longtitute: {currentResult.lon}</div>
    </div>
  );
};

export default Result;
