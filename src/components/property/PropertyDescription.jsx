import React from 'react';

const PropertyDescription = ({ description, amenities }) => {
  return (
    <>
      <div className='mb-5 md:mb-7'>
        <h3 className='text-xl font-bold mb-5 md:mb-2'>Product Description</h3>
        <p className='text-[18px]'>{description}</p>
      </div>

      <p className='font-bold mb-5 md:mb-7'>
        Amenities: {amenities.map((amenity, index) => (
          <span key={index}>
            {amenity}{index < amenities.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </>
  );
};

export default PropertyDescription;
