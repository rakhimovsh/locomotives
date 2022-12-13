import { batch } from 'react-redux';
import { lectureSlice } from '../reducers/lecture';
import { api } from '../../utils/api';
import { httpErrorHandler } from '../../utils/error';

export const getAllLectures = (subjectId) => (dispatch) => {
  api().get(`/admin/lecture/one?subject_id=${subjectId}`).then(({ data }) => {
    batch(() => {
      dispatch(lectureSlice.actions.setAllLectures(data?.data));
      dispatch(lectureSlice.actions.setAllLecturesLoading(false));
    });
  }).catch(err => {
    const status = httpErrorHandler(err);
    dispatch(lectureSlice.actions.setAllLecturesLoading(false));
  });
};