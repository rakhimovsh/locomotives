import { createSlice } from '@reduxjs/toolkit';


const permissions = JSON.parse(localStorage.getItem('PERMISSIONS'));
const token = JSON.parse(localStorage.getItem('TOKEN'));


const initialState = {
  authorized: token ? true : false,
  loading: {
    login: false,
    register: false,
  },
  data: {
    loggedUser: null,
    registeredUser: null,
  },
  error: {
    login: null,
    register: null,
  },
  permissions: permissions ? permissions : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorization: (state, action) => {
      state.authorized = action.payload;
    },
    setLoginLoading: (state, action) => {
      state.loading.login = action.payload;
    },
    setLoggedUserData: (state, action) => {
      state.data.loggedUser = action.payload;
    },
    setLoginError: (state, action) => {
      state.error.login = action.payload;
    },
    setPermissions: (state, action) => {
      state.permissions = action.payload;
    },
    setRegisteredUserData: (state, action) => {
      state.data.registeredUser = action.payload;
    },
    setRegisterLoading: (state, action) => {
      state.loading.register = action.payload;
    },
    setRegisterError: (state, action) => {
      state.error.register = action.payload;
    },
  },
});

export default authSlice.reducer;

