import styled from "styled-components";
import Country from "./Country";
import {
  getCountries,
  getCountriesByRegion,
  getCountriesByName,
} from "../../../store/CountriesSlice/CountriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";

function Countries() {
  const dispatch = useDispatch();
  const { countries, loading } = useSelector((state) => state.Countries);
  const slug = useParams();
  useEffect(() => {
    if (slug.regionName) {
      dispatch(getCountriesByRegion(slug.regionName));
    } else if (slug.name) {
      dispatch(getCountriesByName(slug.name));
    } else {
      dispatch(getCountries());
    }
  }, [dispatch, slug.regionName, slug.name]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollBar style={{ maxHeight: "80vh", overflow: "hidden" }}>
          <CountriesContent>
            {countries.map((country, index) => (
              <Country key={index} country={country} />
            ))}
          </CountriesContent>
        </ScrollBar>
      )}
    </>
  );
}
export default Countries;
const CountriesContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 12px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, auto);
  }
`;
