import { newsSlice } from '../reducers/news';
import { api } from '../../utils/api';
import { batch } from 'react-redux';
import { httpErrorHandler } from '../../utils/error';
import history from '../../utils/history';
import { message } from 'antd';

export const getAllNews = (page = 1) => (dispatch) => {
  api().get(`/admin/news/all?page=${page}&per_page=10`).then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setAllNews(data?.data));
      dispatch(newsSlice.actions.setAllNewsLoading(false));
      dispatch(newsSlice.actions.setTotalPages(data?.totalPage));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setAllNewsLoading(false));
  });
};
export const getSingleNews = (newsId) => (dispatch) => {
  api().get(`/admin/news/one/?id=${newsId}`).then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setSingleNews(data?.data));
      dispatch(newsSlice.actions.setSingleNewsLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setSingleNewsLoading(false));
  });
};

export const createNews = (title, picture, text) => (dispatch) => {
  dispatch(newsSlice.actions.setCreatedNewsLoading(true));
  const formData = new FormData();
  formData.append('title', title);
  formData.append('picture', picture);
  formData.append('text', text);
  api().post('/admin/news/add', formData).then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setCreatedNewsLoading(false));
      dispatch(newsSlice.actions.setCreatedNews(data?.data));
    });
    history.push('/panel/news');
    message.info('Ma\'lumot qo\'shildi!');
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setCreatedNewsLoading(false));
  });
};

export const deleteNews = (newsId) => (dispatch) => {
  dispatch(newsSlice.actions.setDeleteNewsLoading(true));
  api().delete(`/admin/news/delete?id=${newsId}`).then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setDeleteNews(data?.data));
      dispatch(newsSlice.actions.setDeleteNewsLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setDeleteNewsLoading(false));
  });
};

export const updateNews = (newsId, data) => (dispatch) => {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  dispatch(newsSlice.actions.setUpdatedNewsLoading(true));
  api().put(`/admin/news/update?id=${newsId}`, formData).then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setUpdatedNews(data?.data));
      dispatch(newsSlice.actions.setUpdatedNewsLoading(false));
    });
    history.push('/panel/news');
    message.info('Ma\'lumot yangilandi!');
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setUpdatedNewsLoading(false));
  });
};

export const HomeNews = () => (dispatch) => {
  api().get('/client/news/lenta?per_page=4').then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setNewsHomePage(data?.data));
      dispatch(newsSlice.actions.setNewsHomePageLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setNewsHomePageLoading(false));
  });
};

export const getUserAllNews = (page = 1) => (dispatch) => {
  api().get(`/client/news/all?per_page=10&pege=${page}&sort=1`).then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setUserAllNews(data?.data));
      dispatch(newsSlice.actions.setUserAllNewsLoading(false));
      dispatch(newsSlice.actions.setUserNewsPages(data?.totalItems));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setUpdatedNewsLoading(false));
  });
};

export const getSingleUserNews = (newsId) => (dispatch) => {
  api().get(`/client/news/one?news_id=${newsId}`).then(({ data }) => {
    batch(() => {
      dispatch(newsSlice.actions.setUserSingleNews(data?.data));
      dispatch(newsSlice.actions.setUserSingleNewsLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(newsSlice.actions.setUserSingleNewsLoading(false));
  });
};