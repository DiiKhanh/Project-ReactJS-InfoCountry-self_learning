import axios from "axios";
import { useEffect, useState } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const getLanguages = (country) => {
  let result = "";
  country.languages.forEach((language) => {
    if (result !== "") result = result + "-" + language.name;
    else result += language.name;
  });
  return result;
};

const getAltSpellings = (country) => {
  let rs = "";
  country.altSpellings.forEach((altSpelling) => {
    if (rs !== "") rs = rs + " - " + altSpelling;
    else rs += altSpelling;
  });
  return rs;
};

const getBorderCountry = async (code) => {
  const res = await axios.get(
    `https://restcountries.com/v2/alpha?codes=${code}`
  );
  return res.data;
};

function CountryInfo() {
  const {country} = useSelector((state) => state.Countries);
  const [countryBorder, setCountryBorder] = useState([]);
  useEffect(() => {
    if (country && country.borders) {
      getBorderCountry(country.borders)
        .then((res) => {
          const countryName = res.map((ct) => ct.name);
          setCountryBorder(countryName);
        })
        .catch((err) => console.log(err));
    }
  }, [country]);
  return (
    <ScrollBar style={{ maxHeight: "70vh", overflow: "hidden" }}>
      <CountryInfoContainer>
        {country && (
          <>
            <h3>{country.name}</h3>
            <table>
              <tbody>
                <tr className="containerInfo">
                  <td className="title">Native Name</td>
                  <td>:</td>
                  <td className="value">{country.nativeName}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Official</td>
                  <td>:</td>
                  <td className="value">{getAltSpellings(country)}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Population</td>
                  <td>:</td>
                  <td className="value">
                    {new Intl.NumberFormat().format(country.population)}
                  </td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Region</td>
                  <td>:</td>
                  <td className="value">{country.region}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Sub Region</td>
                  <td>:</td>
                  <td className="value">{country.subregion}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Capital</td>
                  <td>:</td>
                  <td className="value">{country.capital}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Top Level Domain</td>
                  <td>:</td>
                  <td className="value">{country.topLevelDomain}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Currencies</td>
                  <td>:</td>
                  <td className="value">{`${country.currencies[0].code} - ${country.currencies[0].name} - ${country.currencies[0].symbol}`}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Languages</td>
                  <td>:</td>
                  <td className="value">{getLanguages(country)}</td>
                </tr>
                {/*  */}
                <tr className="containerInfo">
                  <td className="title">Border Countries</td>
                  <td>:</td>
                  <td className="border-list">
                    {countryBorder.length > 0 &&
                      countryBorder.map((country) => (
                        <Link to={`/country/${country}`} key={country}>
                          <div className="border-item">{country}</div>
                        </Link>
                      ))}
                  </td>
                </tr>
                {/*  */}
              </tbody>
            </table>
          </>
        )}
      </CountryInfoContainer>
    </ScrollBar>
  );
}

export default CountryInfo;

const CountryInfoContainer = styled.div`
  max-width: 500px;
  margin-left: 20px;
  h3 {
    font-weight: bold;
    font-size: 24px;
    margin: 10px 0;
  }

  .title {
    font-weight: 700;
    font-size: 20px;
    display: inline-block;
    margin-right: 20px;
  }
  td {
    font-size: 20px;
  }

  .value {
    font-size: 20px;
    font-weight: 500;
    display: inline-block;
    margin-left: 20px;
    padding: 15px;
  }

  .border-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .border-item {
    font-size: 16px;
    padding: 2px 4px;
    box-shadow: var(--box-shadow);
    margin-left: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      font-weight: bold;
      opacity: 0.9;
    }
  }
`;
