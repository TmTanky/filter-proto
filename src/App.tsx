import { useState, useEffect } from "react";
import styled from "styled-components";
import FilterMenu from "./components/FilterMenu";
import MoviesList from "./components/MoviesList";
import { facetsData } from "./data/facets";
import { moviesData } from "./data/movies";
import { fetchFacets, fetchMovies } from "./utilities/api";

function App() {
  const [state, setState] = useState(moviesData);
  const [facets, setFacets] = useState(facetsData);
  useEffect(() => {
    // state && console.log(state);
    // facets && console.log(facets);
  }, []);
  const checkboxState = (checkboxState: {}) => {
    console.log(checkboxState);
  };
  return (
    <AppContainer>
      <FilterMenu facets={facets} checkboxStateToParent={checkboxState} />
      <MoviesList moviesData={state} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// i need the facets
// create an object na merong type, tas switch check dun
