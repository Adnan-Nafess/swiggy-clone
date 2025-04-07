import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    locationDetails: [
      {
        pincode: 246763,
        area: "Najibabad",
        lat: 18.9486,
        lng: 72.83662,
        district: "Bijnor",
        state: "Uttar Pradesh",
      },
    ],
  },
  reducers: {
    updateLocation: (state, action) => {
      state.locationDetails = action.payload;
    },
  },
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;
