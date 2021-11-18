import { useState, useEffect } from "react";
import styled from "styled-components";
import FilterMenu from "./components/FilterMenu";
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
  return (
    <AppContainer>
      <FilterMenu facets={facets} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
`;

// i need the facets
// create an object na merong type, tas switch check dun
