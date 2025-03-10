import React from 'react';

const PropertyImage = ({ image }) => {
  return (
    <div className="image md:w-[60%]">
      <img src={image} alt="Property" className='rounded-lg md:h-[350px] md:w-[90%]' />
    </div>
  );
};

export default PropertyImage;
