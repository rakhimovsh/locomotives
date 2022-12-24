import { batch } from 'react-redux';
import { subjectSlice } from '../reducers/subject';
import { api } from '../../utils/api';
import { httpErrorHandler } from '../../utils/error';
import { message } from 'antd';


export const getSubjects = (search = '', courseId = 1, page = 1) => (dispatch) => {
  dispatch(subjectSlice.actions.setLoadingGetSubjects(true));
  api().get(`/admin/subject/all?search=${search}&course_id=${courseId}&page=${page}&per_page=20`).then(({ data }) => {
    batch(() => {
      dispatch(subjectSlice.actions.setLoadingGetSubjects(false));
      dispatch(subjectSlice.actions.setSubjects(data?.data));
      dispatch(subjectSlice.actions.setTotalPages(data?.totalPage));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(subjectSlice.actions.setLoadingGetSubjects(false));
  });
};

export const deleteSubject = (id) => (dispatch) => {
  dispatch(subjectSlice.actions.setLoadingDeleteSubject(true));
  api().delete(`/admin/subject/delete?subject_id=${id}`).then(({ data }) => {
    batch(() => {
      dispatch(subjectSlice.actions.setLoadingDeleteSubject(false));
      dispatch(subjectSlice.actions.setDeletedSubject(data?.data));
    });
  }).catch((err) => {
    const status = httpErrorHandler(err);
    dispatch(subjectSlice.actions.setLoadingDeleteSubject(false));
  });
};

export const createSubject = (newSubject) => (dispatch) => {
  dispatch(subjectSlice.actions.setLoadingCreatedSubject(true));
  api().post('/admin/subject/add', newSubject).then(({ data }) => {
    batch(() => {
      dispatch(subjectSlice.actions.setLoadingCreatedSubject(false));
      dispatch(subjectSlice.actions.setCreatedSubject(data?.data));
    });
    if (data?.data) message.info('Fan muvoffaqiyatli qo\'shildi!', 5);
  }).catch((err) => {
    const status = httpErrorHandler(err);
    dispatch(subjectSlice.actions.setLoadingCreatedSubject(false));
  });
};


export const updateSubject = (id, subject) => (dispatch) => {
  dispatch(subjectSlice.actions.setUpdateTeacherLoading(true));
  api().put('/admin/subject/update?subject_id=' + id, subject).then(({ data }) => {
    batch(() => {
      dispatch(subjectSlice.actions.setUpdateTeacherLoading(false));
      dispatch(subjectSlice.actions.setUpdatedSubject(data?.data));
    });
    if (data?.data) message.info('Fan muvoffaqiyatli yangilandi!');
  }).catch((err) => {
    const status = httpErrorHandler(err);
    dispatch(subjectSlice.actions.setUpdateTeacherLoading(false));
  });
};

export const getUserSubjects = (page, courseId) => (dispatch) => {
  api().get(`/client/subject/all?search=&course_id=${courseId}&page=${page}&per_page=10`).then(({ data }) => {
    dispatch(subjectSlice.actions.setUserSubjects(data?.data));
  }).catch(err => {
    const status = httpErrorHandler(err);
  });
};