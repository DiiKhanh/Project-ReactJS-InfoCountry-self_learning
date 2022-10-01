import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";


function Search() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      searchValue !== "" ? navigate(`/search/${searchValue}`) : navigate("/");
    }
  };

  return (
    <SearchPane>
      <h3>Search Country:</h3>
      <SearchInput>
        <input
          type="text"
          placeholder="Input the and enter to search..."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          onKeyDown={handleKeyDown}
        />
        <Link to={searchValue !== "" ? `/search/${searchValue}` : "/"}>
          <div>
            <MdSearch className="icon" fontSize={"34px"} color={"#333"} />
          </div>
        </Link>
      </SearchInput>
    </SearchPane>
  );
}

export default Search;
const SearchPane = styled.div`
  max-width: 320px;
  width: 100%;
  margin-top: 20px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    text-shadow: var(--text-shadow);
  }
`;

const SearchInput = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 34px;
  background: #fff;
  box-shadow: var(--box-shadow);
  border-radius: 5px;
  overflow: hidden;
  input {
    border: none;
    outline: none;
    width: 100%;
    padding: 10px 20px 10px 5px;
    font-size: 18px;
    position: relative;
  }
  .icon {
    height: 100%;
    width: 100%;
    background: #aaa;
    padding: 15px;
    align-items: center;
    box-shadow: none;
    opacity: 75%;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
`;
