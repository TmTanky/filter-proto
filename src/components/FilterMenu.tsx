import React, { ChangeEvent, useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import styled from "styled-components";
import { Facets } from "../types/facets";
import { validateLocaleAndSetLanguage } from "typescript";
// parent state for the filter item

const FilterMenu = ({ facets }: { facets: Facets }) => {
  const [checkboxState, setCheckboxState] = useState({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>, titleKey: string) => {
    // const newState = { ...checkboxState, [e.target.id]: e.target.checked };
    const newState = {
      ...checkboxState,
      [titleKey]: { [e.target.id]: e.target.checked },
    };
    // const sample = { Type: { movie: true, series: false } };
    setCheckboxState(newState);

    console.log(newState)
  };
  return (
    <FilterMenuContainer>
      {Object.entries(facets.movies.filters).map(([titleKey, value]) => (
        <>
          <h1 className="title">{titleKey}</h1>
          {value.values.map((item: any) => (
            <label htmlFor={item.label}>
              {" "}
              {item.label}
              <input
                type="checkbox"
                id={item.label}
                name={item.label}
                value={item.label}
                onChange={(e) => handleChange(e, titleKey)}
              />
            </label>
          ))}
        </>
      ))}
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
  .title {
    text-transform: capitalize;
  }
`;
