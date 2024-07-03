import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section1 from '../components/sections/Section1';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
        
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
