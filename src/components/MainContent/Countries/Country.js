import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext.js";
import { Link } from "react-router-dom";

function Country(props) {
  const themeContext = useContext(ThemeContext);
  const { country } = props;
  return (
    <Link to={`/country/${country.name}`}>
      <CountryCard className={themeContext.theme}>
        <div className="flag">
          <img src={country.flag} alt="" />
        </div>
        <CountryInfo>
          <h3>{country.name}</h3>
          <div>
            Population: <span>{country.population}</span>
          </div>
          <div>
            Region: <span>{country.region}</span>
          </div>
          <div>
            Capital: <span>{country.capital}</span>
          </div>
        </CountryInfo>
      </CountryCard>
    </Link>
  );
}

export default Country;
const CountryCard = styled.div`
  max-width: 320px;
  width: 100%;
  filter: brightness(1);
  overflow: hidden;
  border-radius: 5px;
  user-select: none;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  &:hover {
    filter: brightness(0.9);
  }
  &:hover img {
    transform: scale(1.04);
  }

  .flag {
    width: 100%;
    height: 160px;
    display: block;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    img {
      height: 100%;
      transition: all 0.2s linear;
    }
  }
`;

const CountryInfo = styled.div`
  padding: 10px 16px;
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 16px 0;
    height: 50px;
  }

  div {
    font-size: 16px;
    display: block;
    font-weight: 700;
    margin: 5px 0;
    span {
      font-weight: 400;
    }
  }
`;
