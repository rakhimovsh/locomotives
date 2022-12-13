import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: {
    getSubjects: false,
    deleteSubject: false,
    createSubject: false,
    updateSubject: false,
  },
  error: {
    getSubjects: null,
    deleteSubject: null,
    createSubject: null,
    updateSubject: null,
  },
  subjects: [],
  deletedSubject: null,
  createdSubject: null,
  updatedSubject: null,
  totalPages: 1,
};

export const subjectSlice = createSlice({
  name: 'subject',
  initialState,
  reducers: {
    setLoadingGetSubjects: (state, action) => {
      state.loading.getSubjects = action.payload;
    },
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
    setLoadingDeleteSubject: (state, action) => {
      state.loading.deleteSubject = action.payload;
    },
    setDeletedSubject: (state, action) => {
      state.deleteSubject = action.payload;
    },
    setLoadingCreatedSubject: (state, action) => {
      state.loading.createSubject = action.payload;
    },
    setCreatedSubject: (state, action) => {
      state.createSubject = action.payload;
    },
    setUpdateTeacherLoading: (state, action) => {
      state.loading.updateSubject = action.payload;
    },
    setUpdatedSubject: (state, action) => {
      state.updatedSubject = action.payload;
    },
    setGetSubjectError: (state, action) => {
      state.error.getSubjects = action.payload;
    },
    setCreatedSubjectError: (state, action) => {
      state.error.createSubject = action.payload;
    },
    setUpdateSubjectError: (state, action) => {
      state.error.updateSubject = action.payload;
    },
    setDeletedSubjectError: (state, action) => {
      state.error.deleteSubject = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export default subjectSlice.reducer;