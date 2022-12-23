import { batch } from 'react-redux';
import { laboratorySlice } from '../reducers/laboratory.js';
import { api } from '../../utils/api';
import { httpErrorHandler } from '../../utils/error';

export const getAllLaboratories = (subjectId) => (dispatch) => {
  dispatch(laboratorySlice.actions.setAllLaboratoriesLoading(true));
  api().get(subjectId ? `/admin/lecture/one?subject_id=${subjectId}` : `/admin/lecture/all`).then(({ data }) => {
    let modifiedData = data?.data.map((el) => {
      el.subjectName = el.subjectId.name;
      el.courseId = el.subjectId.course_id;
      el.subjectId = el.subjectId['_id'];
      el.key = el['_id'];
      return el;
    });
    batch(() => {
      dispatch(laboratorySlice.actions.setAllLaboratories(modifiedData));
      dispatch(laboratorySlice.actions.setAllLaboratoriesLoading(false));
    });

  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(laboratorySlice.actions.setAllLaboratoriesLoading(false));
  });
};

export const createLaboratory = (subjectId, data) => (dispatch) => {
  dispatch(laboratorySlice.actions.setCreatedLaboratoryLoading(true));
  api().post('/admin/lecture/add', data).then(({ data }) => {
    batch(() => {
      dispatch(laboratorySlice.actions.setCreatedLaboratory(data?.data));
      dispatch(laboratorySlice.actions.setCreatedLaboratoryLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(laboratorySlice.actions.setCreatedLaboratoryLoading(false));
  });
};

export const updateLaboratory = (laboratoryId, data) => (dispatch) => {
  dispatch(laboratorySlice.actions.setUpdatedLaboratoryLoading(true));
  api().put('/admin/lecture/update?lecture_id=' + laboratoryId, data).then(({ data }) => {
    batch(() => {
      dispatch(laboratorySlice.actions.setUpdatedLaboratory(data?.data));
      dispatch(laboratorySlice.actions.setUpdatedLaboratoryLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(laboratorySlice.actions.setUpdatedLaboratoryLoading(false));
  });
};

export const deleteLaboratory = (laboratoryId) => (dispatch) => {
  dispatch(laboratorySlice.actions.setDeletedLaboratoryLoading(true));
  api().delete('/admin/lecture/delete?lecture_id=' + laboratoryId).then(({ data }) => {
    batch(() => {
      dispatch(laboratorySlice.actions.setDeletedLaboratory(data?.data));
      dispatch(laboratorySlice.actions.setDeletedLaboratoryLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(laboratorySlice.actions.setDeletedLaboratoryLoading(false));
  });
};


export const getUserAllLaboratories = (subjectId) => (dispatch) => {
  dispatch(laboratorySlice.actions.setUserAllLaboratoriesLoading(true));
  api().get(`/client/lecture/all?per_page=10&page=1&subject_id=${subjectId}`).then(({ data }) => {
    batch(() => {
      dispatch(laboratorySlice.actions.setUserAllLaboratories(data?.data));
      dispatch(laboratorySlice.actions.setUserAllLaboratoriesLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(laboratorySlice.actions.setUserAllLaboratoriesLoading(false));
  });
};

