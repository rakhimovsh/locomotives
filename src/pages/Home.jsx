import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import NewsSection from '../components/NewsSection';
import TeacherSection from '../components/TeacherSection.jsx';


const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <TeacherSection/>
      <NewsSection />
    </>
  );
};

export default Home;