import Search from "./Search";
import Filter from "./Filter";
import styled from "styled-components";

function SearchAndFilter() {
  return (
    <SearchAndFilterPane>
      <Search />
      <Filter />
    </SearchAndFilterPane>
  );
}

export default SearchAndFilter;
const SearchAndFilterPane = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
