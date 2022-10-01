import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const countriesApi = "https://restcountries.com/v2/";

//get data for mount
export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const res = await axios.get(countriesApi + "all");
    const countries = res.data.map((country) => ({
      name: country.name,
      capital: country.capital,
      population: new Intl.NumberFormat().format(country.population),
      region: country.region,
      flag: country.flag,
    }));
    return countries;
  }
);

// get 1 country
export const getCountryByName = createAsyncThunk(
  "countries/getCountryByName",
  async (nameCountry) => {
    const res = await axios.get(`${countriesApi}/name/${nameCountry}`);
    return res.data[0];
  }
);

// get countries by region
export const getCountriesByRegion = createAsyncThunk(
  "countries/getCountriesByRegion",
  async (regionName) => {
    const res = await axios.get(`${countriesApi}/region/${regionName}`);
    const countries = res.data.map((country) => ({
      name: country.name,
      capital: country.capital,
      population: new Intl.NumberFormat().format(country.population),
      region: country.region,
      flag: country.flag,
    }));
    return countries;
  }
);
//get countries by name
export const getCountriesByName = createAsyncThunk(
  "countries/getCountriesByName",
  async (name) => {
    const res = await axios.get(`${countriesApi}/name/${name}`);
    const countries = res.data.map((country) => ({
      name: country.name,
      capital: country.capital,
      population: new Intl.NumberFormat().format(country.population),
      region: country.region,
      flag: country.flag,
    }));
    return countries;
  }
);

const CountriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    country: null,
    loading: true,
  },
  extraReducers: {
    // get data all countries
    [getCountries.pending]: (state, action) => {
      state.loading = true;
    },
    [getCountries.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    [getCountries.rejected]: (state, action) => {
      state.loading = true;
    },
    //get 1 country
    [getCountryByName.pending]: (state, action) => {
      state.loading = true;
    },
    [getCountryByName.fulfilled]: (state, action) => {
      state.loading = false;
      state.country = action.payload;
    },
    [getCountryByName.rejected]: (state, action) => {
      state.loading = true;
    },
    //get countries by region
    [getCountriesByRegion.pending]: (state, action) => {
      state.loading = true;
    },
    [getCountriesByRegion.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    [getCountriesByRegion.rejected]: (state, action) => {
      state.loading = true;
    },
    //get countries by name
    [getCountriesByName.pending]: (state, action) => {
      state.loading = true;
    },
    [getCountriesByName.fulfilled]: (state, action) => {
      state.loading = false;
      state.countries = action.payload;
    },
    [getCountriesByName.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

const { reducer, actions } = CountriesSlice;

export default reducer;
