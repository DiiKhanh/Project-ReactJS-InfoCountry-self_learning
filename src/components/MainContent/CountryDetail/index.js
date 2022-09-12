import styled from "styled-components";
import { ThemeContext } from "../../ThemeContext/ThemeContext.js";
import { useContext, useEffect } from "react";
import CountryInfo from "./CountryInfo.js";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCountryByName } from "../../Store/Actions/countriesActions.js";
import Loading from "../../Loading/Loading";

function CountryDetail() {
  const themeContext = useContext(ThemeContext);
  const slug = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.Countries.country);
  const loading = useSelector((state) => state.Countries.loading);
  useEffect(() => {
    dispatch(getCountryByName(slug.countryName));
  }, [slug.countryName, dispatch]);

  return (
    <Wrapper>
      <div
        className={`btn-country ${themeContext.theme}`}
        onClick={() => navigate(-1)}
      >
        Go Back
      </div>
      {loading ? (
        <Loading />
      ) : (
        <CountryContainer>
          <div className="flagCountry">
            <img
              src={
                country
                  ? country.flag
                  : "https://st.depositphotos.com/1575949/4950/v/950/depositphotos_49506497-stock-illustration-error-red-stamp-text.jpg"
              }
              alt=""
            />
          </div>
          <CountryInfo />
        </CountryContainer>
      )}
    </Wrapper>
  );
}

export default CountryDetail;

const Wrapper = styled.div`
  padding-top: 20px;
  .btn-country {
    display: block;
    padding: 2px 4px;
    width: 80px;
    height: 28px;
    line-height:28px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    filter: brightness(0.9);
    transition: all 0.2s ease;
    &:hover {
      filter: brightness(1);
      font-weight: bold;
      cursor:default;
      user-select: none;
      
  }
`;

const CountryContainer = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  .flagCountry {
    max-width: 400px;
    width: 100%;
    height: 100%;
    box-shadow: var(--box-shadow);
  }
`;
