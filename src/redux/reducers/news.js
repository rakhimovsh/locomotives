import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: {
    createNews: false,
    getNews: true,
    updateNews: false,
    deleteNews: false,
    singleNews: true,
    newsHomePage: true,
    userAllNews: true,
    userSingleNews: true,
  },
  allNews: [],
  createdNews: null,
  updatedNews: null,
  deletedNews: null,
  singleNews: null,
  totalPages: 1,
  newsHomePage: [],
  userAllNews: [],
  userSingleNews: null,
  userTotalPages: 1,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setAllNews: (state, action) => {
      state.allNews = action.payload;
    },
    setAllNewsLoading: (state, action) => {
      state.loading.getNews = action.payload;
    },
    setCreatedNews: (state, action) => {
      state.createdNews = action.payload;
    },
    setCreatedNewsLoading: (state, action) => {
      state.loading.createNews = action.payload;
    },
    setDeleteNews: (state, action) => {
      state.deletedNews = action.payload;
    },
    setDeleteNewsLoading: (state, action) => {
      state.loading.deleteNews = action.payload;
    },
    setSingleNews: (state, action) => {
      state.singleNews = action.payload;
    },
    setSingleNewsLoading: (state, action) => {
      state.loading.singleNews = action.payload;
    },
    setUpdatedNews: (state, action) => {
      state.updatedNews = action.payload;
    },
    setUpdatedNewsLoading: (state, action) => {
      state.loading.updateNews = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setNewsHomePage: (state, action) => {
      state.newsHomePage = action.payload;
    },
    setNewsHomePageLoading: (state, action) => {
      state.loading.newsHomePage = action.payload;
    },
    setUserAllNews: (state, action) => {
      state.userAllNews = action.payload;
    },
    setUserAllNewsLoading: (state, action) => {
      state.loading.userAllNews = action.payload;
    },
    setUserSingleNews: (state, action) => {
      state.userSingleNews = action.payload;
    },
    setUserSingleNewsLoading: (state, action) => {
      state.loading.userSingleNews = action.payload;
    },
    setUserNewsPages: (state, action) => {
      state.userTotalPages = action.payload;
    },
  },
});

export default newsSlice.reducer;