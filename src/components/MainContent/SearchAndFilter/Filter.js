import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext.js";
import Options from "./Options.js";
import { useParams } from "react-router-dom";

function Filter() {
  const themeContext = useContext(ThemeContext);
  const refSelect = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const { regionName } = useParams();
  const [valueOption, setValueOption] = useState("All");

  const handleOptions = (e) => {
    if (refSelect.current) {
      setIsShowOptions(refSelect.current.contains(e.target));
    }
  };

  useEffect(() => {
    if (isShowOptions) {
      document.addEventListener("click", handleOptions);
      return () => {
        document.removeEventListener("click", handleOptions);
      };
    }
  }, [isShowOptions]);

  useEffect(() => {
    if (regionName) {
      setValueOption(regionName);
    } else {
      setValueOption("All");
    }
  }, [regionName]);

  return (
    <FilterPane>
      <h3>Filter by regions:</h3>
      <ListPane>
        <SelectPane
          className={themeContext.theme}
          ref={refSelect}
          onClick={handleOptions}
        >
          <span>{valueOption}</span>
          <FaChevronDown />
        </SelectPane>
        <Options isShowOptions={isShowOptions} />
      </ListPane>
    </FilterPane>
  );
}

export default Filter;
const FilterPane = styled.div`
  max-width: 160px;
  width: 100%;
  margin-top: 20px;
  h3 {
    font-size: 18px;
    font-weight: 500;
    text-shadow: var(--text-shadow);
  }
`;

const ListPane = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;
`;

const SelectPane = styled.div`
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  height: 34px;
  user-select: none;
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
