import { createSlice } from '@reduxjs/toolkit';
import { CountryNews } from '../../../constants/CountryNews';
import { DisplayMethod, DisplayLanguage } from '../../../enums/DisplayMethod';
import { Country } from '../../../models/Country';

export interface DisplayState {
  method: DisplayMethod;
  country: Country;
  language: DisplayLanguage;
  totalResults: number;
}

export const initialDisplayState: DisplayState = {
  method: DisplayMethod.CARDS,
  country: CountryNews[2],
  language: DisplayLanguage.POLISH,
  totalResults: 0,
};

const displaySlice = createSlice({
  name: 'display',
  initialState: initialDisplayState,
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
  },
});

export const {
  setDisplayMethod,
  setDisplayCountry,
  setDisplayLanguage,
  setDisplayTotalResults,
} = displaySlice.actions;

export default displaySlice.reducer;
