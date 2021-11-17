import { useState, useEffect } from 'react'
import styled from "styled-components";
import FilterMenu from './components/FilterMenu';
import { fetchFacets, fetchMovies } from './utilities/api';

function App() {
  const [state, setState] = useState([])
  const [facets, setFacets] = useState([])
  useEffect(() => {
    fetchMovies().then((res) => setState(res));
    fetchFacets().then((res) => setFacets(res))
    state && console.log(state)
    facets && console.log(facets)
  }, []);
  return (
      <AppContainer>
        <FilterMenu/>
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
