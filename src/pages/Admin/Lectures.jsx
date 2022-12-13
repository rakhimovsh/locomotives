import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubjectOutlet from '../../components/SubjectOutlet';
import { getSubjects } from '../../redux/actions/subject';


const Lectures = () => {
  const [subjectId, setSubjectId] = useState('');
  const { subjects } = useSelector(state => state.subject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubjects());
  }, []);

  return (
    <>
      <SubjectOutlet subjectOptions={subjects} setSubjectId={setSubjectId} />
    </>
  );
};

export default Lectures;