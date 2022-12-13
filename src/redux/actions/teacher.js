import { batch } from 'react-redux';

import history from '../../utils/history';
import { teacherSlice } from '../reducers/teacher';
import { api } from '../../utils/api';
import { httpErrorHandler } from '../../utils/error';


export const addTeacher = (info, image) => (dispatch) => {
  dispatch(teacherSlice.actions.setLoadingAddTeacher(true));
  const formData = new FormData();
  for (let key in info) {
    if (key == 'subjects') {
      info[key].forEach((subject, index) => {
        formData.append(`subjects[${index}]`, subject);
      });
    } else {
      formData.append(key, info[key]);
    }
  }
  formData.append('picture', image, 'blob.picture.jpeg');
  api().post('/admin/teacher/add', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(({ data }) => {
    history.push('/panel');
  }).catch(err => {
    httpErrorHandler(err);
    dispatch(teacherSlice.actions.setLoadingAddTeacher(false));
  });
};

export const getAllTeachers = (page = 1, search = '') => (dispatch) => {
  dispatch(teacherSlice.actions.setAllTeachersLoading(true));
  api().get(`/admin/teacher/all?per_page=10&page=${page}&search=${search}`).then(({ data }) => {
    batch(() => {
      dispatch(teacherSlice.actions.setAllTeachersLoading(false));
      dispatch(teacherSlice.actions.setAllTeachers(data.data));
      dispatch(teacherSlice.actions.setTotalPages(data.totalPage));
    });
  }).catch(error => {
    httpErrorHandler(error);
  });
};

export const deleteTeacher = (id) => (dispatch) => {
  dispatch(teacherSlice.actions.setDeleteLoading(true));
  api().delete(`/admin/teacher/delete?teacher_id=${id}`).then(({ data }) => {
    dispatch(teacherSlice.actions.setDeleteLoading(false));
  }).catch((err) => {
    httpErrorHandler(err);
    dispatch(teacherSlice.actions.setDeleteLoading(false));
  });
};

export const getSingleTeacher = () => (dispatch) => {
  api().get(`/admin/teacher/one`).then(({ data }) => {
    batch(() => {
      dispatch(teacherSlice.actions.setSingleTeacherLoading(false));
      dispatch(teacherSlice.actions.setSingleTeacher(data.data[0]));
    });

  }).catch(err => {
    const status = httpErrorHandler(err);
    if (status === 400) {
      history.push('panel/teachers/add2');
    }
    dispatch(teacherSlice.actions.setSingleTeacherLoading(false));
  });
};

export const updateTeacher = (info, image) => (dispatch) => {
  dispatch(teacherSlice.actions.setUpdateTeacherLoading(true));
  const formData = new FormData();
  console.log(info);
  for (let key in info) {
    formData.append(key, info[key]);
  }
  if (image) {
    formData.append('picture', image, 'blob.picture.jpeg');
  }
  api().put(`/admin/teacher/update`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(({ data }) => {
    batch(() => {
      dispatch(teacherSlice.actions.setUpdateTeacher(data?.data));
      dispatch(teacherSlice.actions.setUpdateTeacherLoading(false));
    });
  }).catch((err) => {
    if (err.response) {
      dispatch(teacherSlice.actions.setUpdateTeacherError('clientError'));
    } else {
      dispatch(teacherSlice.actions.setUpdateTeacherError('serverError'));
    }
    dispatch(teacherSlice.actions.setUpdateTeacherLoading(false));
  });
};
