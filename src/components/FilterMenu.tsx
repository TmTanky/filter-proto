import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Facets } from "../types/facets";

type CheckboxState = {
  [key: string]: {
    [key: string]: boolean;
  };
};
const FilterMenu = ({
  facets,
  checkboxStateToParent,
}: {
  facets: Facets;
  checkboxStateToParent: (checkboxState: {}) => void;
}) => {
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({});
  const handleChange = (e: ChangeEvent<HTMLInputElement>, titleKey: string) => {
    setCheckboxState({
      ...checkboxState,
      [titleKey]: {
        ...checkboxState[titleKey],
        [e.target.id]: e.target.checked,
      },
    });
    checkboxStateToParent(checkboxState);
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
