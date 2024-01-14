import React from 'react';

import CoreConcepts from '../../components/CoreConcepts';
import Examples from '../../components/Examples';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
};

export default Home;
