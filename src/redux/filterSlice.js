import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filterLocation: '',
  filterEquipment: {
    airConditioner: false,
    automatic: false,
    kitchen: false,
    tv: false,
    shower: false,
    wc: false,
    toilet: false,
  },
  filterType: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setLocationFilterValue(state, action) {
      state.filterLocation = action.payload;
    },
    setEquipmentFilterValue(state, action) {
      state.filterEquipment[action.payload.equipment] = action.payload.value;
    },
    setTypeFilterValue(state, action) {
      state.filterType = action.payload;
    },
  },
});

export const {
  setLocationFilterValue,
  setEquipmentFilterValue,
  setTypeFilterValue,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
