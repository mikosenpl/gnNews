import { configureStore, createSlice } from "@reduxjs/toolkit";
import { CountryNews } from "../constants/CountryNews";
import { DisplayLanguage, DisplayMethod } from "../enums/DisplayMethod";
import { Country } from "../models/Country";

export interface DisplayState {
  method: DisplayMethod;
  country: Country;
  language: DisplayLanguage;
  totalResults: number;
  perPageResults: number;
}

export const initialdisplayState: DisplayState = {
  method: DisplayMethod.CARDS,
  country: CountryNews[2],
  language: DisplayLanguage.POLISH,
  totalResults: 0,
  perPageResults: 4,
};

const displaySlice = createSlice({
  name: "display",
  initialState: initialdisplayState,
  reducers: {
    setDisplayMethod: (state, action) => {
      state.method = action.payload;
    },
    setDisplayCountry: (state, action) => {
      state.country = action.payload;
    },
    setDisplayLanguage: (state, action) => {
      state.language = action.payload;
    },
    setDisplayTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },
    setDisplayPerPageResults: (state, action) => {
      state.perPageResults = action.payload;
    },
  },
});

export const {
  setDisplayMethod,
  setDisplayCountry,
  setDisplayLanguage,
  setDisplayTotalResults,
  setDisplayPerPageResults,
} = displaySlice.actions;

export const store = configureStore({
  reducer: {
    display: displaySlice.reducer,
  },
});
