import React from 'react';
import { MoonLoader } from 'react-spinners';

const Preloader = () => {
  return (
    <div className="preloader">
      <MoonLoader color="#FF7F46" size={150} />
    </div>
  );
};

export default Preloader;
