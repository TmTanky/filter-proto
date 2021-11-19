import { useState, useEffect } from "react";
import styled from "styled-components";
import FilterMenu from "./components/FilterMenu";
import MoviesList from "./components/MoviesList";
import { facetsData } from "./data/facets";
import { moviesData } from "./data/movies";
import { newMoviesState } from "./utilities/utils";

function App() {
  const [state, setState] = useState(moviesData);
  const [facets] = useState(facetsData);
  useEffect(() => {
    // state && console.log(state);
    // facets && console.log(facets);
  }, []);
  const checkboxState = (checkboxState: {}) => {
    console.log(checkboxState);
    setState(newMoviesState(checkboxState, moviesData));
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
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`;