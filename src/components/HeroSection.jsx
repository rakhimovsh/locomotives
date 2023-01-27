import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';

import Container from './Container';

import bg1 from '../assets/images/mock_bg-1.jpeg';
import bg2 from '../assets/images/mock_bg-2.jpg';
import bg3 from '../assets/images/mock_bg-3.jpg';

const HeroSection = styled.section`
img{
  width: 100%;
}
`;




const Hero = () => {
  return (<HeroSection>
      <Container>
        <Carousel autoplay draggable>
          <div>
            <img src={bg1} alt="" height={500} />
          </div>
          <div>
            <img src={bg2} alt="" />
          </div>
          <div>
            <img src={bg3} alt="" />
          </div>
        </Carousel>
      </Container>
    </HeroSection>
  );
};

export default Hero;