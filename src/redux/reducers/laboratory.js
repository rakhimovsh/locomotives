import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allLaboratories: [],
  createdLaboratory: null,
  updatedLaboratory: null,
  deletedLaboratory: null,
  totalPages: 1,
  loading: {
    getLaboratories: false,
    createLaboratory: false,
    updateLaboratory: false,
    deleteLaboratory: false,
  },
};

export const laboratorySlice = createSlice({
  name: 'laboratory',
  initialState,
  reducers: {
    setAllLaboratories: (state, action) => {
      state.allLaboratories = action.payload;
    },
    setAllLaboratoriesLoading: (state, action) => {
      state.loading.getLaboratories = action.payload;
    },
    setCreatedLaboratory: (state, action) => {
      state.createdLaboratory = action.payload;
    },
    setCreatedLaboratoryLoading: (state, action) => {
      state.loading.createLaboratory = action.payload;
    },
    setUpdatedLaboratory: (state, action) => {
      state.updatedLaboratory = action.payload;
    },
    setUpdatedLaboratoryLoading: (state, action) => {
      state.loading.updateLaboratory = action.payload;
    },
    setDeletedLaboratory: (state, action) => {
      state.deletedLaboratory = action.payload;
    },
    setDeletedLaboratoryLoading: (state, action) => {
      state.loading.deleteLaboratory = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export default laboratorySlice.reducer;