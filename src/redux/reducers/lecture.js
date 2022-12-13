import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allLectures: [],
  createdLecture: null,
  updatedLecture: null,
  deletedLecture: null,
  totalPages: 1,
  loading: {
    getLectures: true,
    createLectures: false,
    updateLectures: false,
    deleteLectures: false,
  },
};

export const lectureSlice = createSlice({
  name: 'lecture',
  initialState,
  reducers: {
    setAllLectures: (state, action) => {
      state.allLectures = action.payload;
    },
    setAllLecturesLoading: (state, action) => {
      state.loading.getLectures = action.payload;
    },
    setCreatedLecture: (state, action) => {
      state.createdLecture = action.payload;
    },
    setCreatedLectureLoading: (state, action) => {
      state.loading.createLectures = action.payload;
    },
    setUpdatedLecture: (state, action) => {
      state.updatedLecture = action.payload;
    },
    setUpdatedLectureLoading: (state, action) => {
      state.loading.updateLectures = action.payload;
    },
    setDeletedLecture: (state, action) => {
      state.deletedLecture = action.payload;
    },
    setDeletedLectureLoading: (state, action) => {
      state.loading.deletedLecture = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export default lectureSlice.reducer;