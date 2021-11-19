// @ts-nocheck
import React from "react";
import { Movies } from "../types/movies";
import styled from "styled-components";
const MoviesList = ({ moviesData = [] }: any) => {
  console.log(moviesData);
  return (
    <MoviesListContainer>
      <h1>Movies List {moviesData.length}</h1>
      {moviesData.map((item) => (
        <li>{item.Title}</li>
      ))}
    </MoviesListContainer>
  );
};

export default MoviesList;

const MoviesListContainer = styled.div`
margin: 0 0 0 50px;
`;
