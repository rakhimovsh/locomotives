import React from 'react';
import { useParams } from 'react-router-dom';

const AddLaboratory = () => {
  const { laboratoryId } = useParams();
  return (
    <div>
      {laboratoryId }
    </div>
  );
};

export default AddLaboratory;