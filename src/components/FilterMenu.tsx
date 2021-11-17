import React, { ChangeEvent, useState } from "react";
import FilterItem from "./FilterItem";
import styled from "styled-components";
// parent state for the filter item

const FilterMenu = () => {
  const [checkboxState, setCheckboxState] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // copy the original state,
    const newState = { ...checkboxState, [e.target.id]: e.target.checked };
    setCheckboxState(newState)
    console.log(newState)
  };
  return (
    <FilterMenuContainer>
      <h1>Type</h1>
      <label htmlFor="movies">
        {" "}
        Movies
        <input type="checkbox" id="movies" name="movies" value="movies" onChange={handleChange}/>
      </label>
      <label htmlFor="series">
        {" "}
        Series
        <input type="checkbox" id="series" name="series" value="series" onChange={handleChange}/>
      </label>
    </FilterMenuContainer>
  );
};

export default FilterMenu;
const FilterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  > input {
    align-self: flex-end;
  }
`;
