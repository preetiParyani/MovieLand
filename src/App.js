// ce25006f
import { useEffect } from "react";

const API_URL = "https://www.omdbapi.com?apikey=ce25006f";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const responseJson = await response.json();

    console.log(responseJson);
  };

  useEffect(() => {
    searchMovies("spiderman");
  });

  return (
    <>
      <h1>App</h1>
    </>
  );
};

export default App;
