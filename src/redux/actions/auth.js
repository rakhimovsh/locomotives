import { batch } from 'react-redux';
import { message } from 'antd';

import { authSlice } from '../reducers/auth';
import { api } from '../../utils/api';
import history from '../../utils/history';
import { httpErrorHandler } from '../../utils/error';


export const signIn = (values) => (dispatch) => {
  dispatch(authSlice.actions.setLoginLoading(true));
  api().post('/auth/login', values).then(({ data }) => {
    if (data?.data) {
      batch(() => {
        dispatch(authSlice.actions.setLoginLoading(false));
        dispatch(authSlice.actions.setAuthorization(true));
        dispatch(authSlice.actions.setLoggedUserData(data?.data));
        dispatch(authSlice.actions.setPermissions(data?.data?.permissions));
      });
      localStorage.setItem('PERMISSIONS', JSON.stringify(data?.data?.permissions));
      localStorage.setItem('TOKEN', JSON.stringify(data?.access_token));
      history.push('/panel/news');
    }
  }).catch((err) => {
    const errorStatus = httpErrorHandler(err);
    if (errorStatus === 400) {
      message.error('Foydalanuvchi ismi yoki parol xato kiritildi!', 5);
    }
    dispatch(authSlice.actions.setLoginLoading(false));
  });
};


export const checkExisting = (token) => (dispatch) => {
  if (token) {
    dispatch(authSlice.actions.setAuthorization(true));
  }
};

export const registerTeacher = (teacherInfo) => (dispatch) => {
  dispatch(authSlice.actions.setRegisterLoading(true));
  api().post('/auth/register', teacherInfo).then(({ data }) => {
    if (data?.data) {
      batch(() => {
        dispatch(authSlice.actions.setRegisterLoading(false));
        dispatch(authSlice.actions.setRegisteredUserData(data.data));
        dispatch(authSlice.actions.setPermissions(data?.permissions));
      });
    }
  }).catch((err) => {
      if (err?.response) {
        dispatch(authSlice.actions.setRegisterError('clientError'));
      } else {
        dispatch(authSlice.actions.setRegisterError('serverError'));
      }
      dispatch(authSlice.actions.setRegisterLoading(false));
    },
  );
};