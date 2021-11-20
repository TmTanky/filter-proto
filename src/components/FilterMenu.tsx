import { ChangeEvent, useEffect, useState } from "react";
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
  };

  useEffect(() => {
    checkboxStateToParent(checkboxState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxState]);
  return (
    <FilterMenuContainer>
      {Object.entries(facets.movies.filters).map(([titleKey, value]) => (
        <div key={titleKey}>
          <h1 className="title">{titleKey}</h1>
          <span>
            {value.values.map((item: any) => (
              <label htmlFor={item.label} key={item.label}>
                {" "}
                {item.label}
                <input
                  defaultChecked={false}
                  type="checkbox"
                  id={item.label}
                  name={item.label}
                  value={item.label}
                  onChange={(e) => handleChange(e, titleKey)}
                />
              </label>
            ))}
          </span>
        </div>
      ))}
    </FilterMenuContainer>
  );
};

export default FilterMenu;
const FilterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 900px;
  flex-wrap: wrap;
  > input {
    align-self: flex-end;
  }
  .title {
    text-transform: capitalize;
  }
  > div {
    width: 300px;
  }
`;
