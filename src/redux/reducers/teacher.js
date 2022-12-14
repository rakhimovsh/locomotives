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
  deletedTeacher: null,
  user: {
    allTeachers: [],
    singleTeacher: null,
    allPages: 1,
  },
  userLoading: {
    allTeachers: true,
    singleTeacher: true,
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
    setDeletedTeacher: (state, action) => {
      state.deleteTeacher = action.payload;
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
    setUserAllTeachers: (state, action) => {
      state.user.allTeachers = action.payload;
    },
    setUserAllTeachersLoading: (state, action) => {
      state.userLoading.allTeachers = action.payload;
    },
    setUserAllPages: (state, action) => {
      state.user.allPages = action.payload;
    },
    setUserSingleTeacher: (state, action) => {
      state.user.singleTeacher = action.payload;
    },
    setUserSingleTeacherLoading: (state, action) => {
      state.userLoading.singleTeacher = action.payload;
    },
  },
});

export default teacherSlice.reducer;