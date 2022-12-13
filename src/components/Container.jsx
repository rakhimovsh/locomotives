import React from 'react';
import styled from 'styled-components';


const ContainerEl = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Container = ({ children }) => {
  return (
    <ContainerEl>
      {children}
    </ContainerEl>
  );
};

export default Container;