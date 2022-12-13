import React from 'react';
import { GridLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <GridLoader color="#89CFF0" size={25} />
    </LoaderWrapper>
  );
};

export default Loader;