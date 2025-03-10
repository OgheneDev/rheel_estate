import React from 'react';

const PropertyImageGallery = ({ images }) => {
  return (
    <div className='mb-5'>
      <h3 className='text-xl font-bold mb-5'>Other Images</h3>
      <div className='flex gap-5 flex-wrap'>
        {images.slice(1).map((image, index) => (
          <div key={index} className="image">
            <img src={image} alt="Property" className='rounded-lg w-[80px] md:w-[110px]' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyImageGallery;
