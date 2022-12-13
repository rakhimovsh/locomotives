import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  loading: {
    addTeacher: false,
    getAllTeacher: false,
    deleteTeacher: false,
    singleTeacher: true,
    updateTeacher: false,
  },
  allTeachers: [],
  totalPages: null,
  singleTeacherInfo: null,
  updatedTeacher: null,
  error: {
    addTeacher: null,
    getAllTeacher: null,
    deleteTeacher: null,
    singleTeacher: null,
    updateTeacher: null,
  },
};

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    setLoadingAddTeacher: (state, action) => {
      state.loading.addTeacher = action.payload;
    },
    setAllTeachers: (state, action) => {
      state.allTeachers = action.payload;
    },
    setAllTeachersLoading: (state, action) => {
      state.loading.getAllTeacher = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setDeleteLoading: (state, action) => {
      state.loading.deleteTeacher = action.payload;
    },
    setSingleTeacher: (state, action) => {
      state.singleTeacherInfo = action.payload;
    },
    setSingleTeacherLoading: (state, action) => {
      state.loading.singleTeacher = action.payload;
    },
    setUpdateTeacher: (state, action) => {
      state.updatedTeacher = action.payload;
    },
    setUpdateTeacherLoading: (state, action) => {
      state.loading.updateTeacher = action.payload;
    },
    setAllTeachersError: (state, action) => {
      state.error.getAllTeacher = action.payload;
    },
    setAddTeacherError: (state, action) => {
      state.error.addTeacher = action.payload;
    },
    setUpdateTeacherError: (state, action) => {
      state.error.updateTeacher = action.payload;
    },
    setSingleTeacherError: (state, action) => {
      state.error.singleTeacher = action.payload;
    },
    setDeleteTeacherError: (state, action) => {
      state.error.deleteTeacher = action.payload;
    },
  },
});

export default teacherSlice.reducer;