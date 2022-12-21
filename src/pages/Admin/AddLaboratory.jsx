import React from 'react';
import { useSearchParams } from 'react-router-dom';

const AddLaboratory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const subjectId = searchParams.get('subjectId');
  const laboratoryId = searchParams.get('laboratoryId');
  return (
    <div>

    </div>
  );
};

export default AddLaboratory;