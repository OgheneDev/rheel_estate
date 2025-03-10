import React from 'react';
import { MapPin } from 'lucide-react';

const PropertyHeader = ({ type, location }) => {
  return (
    <>
      <h2 className='text-2xl font-bold'>{type}</h2>
      <div className='flex gap-2 mb-5'>
        <MapPin size={20} className='border-black' />
        <span className='text-semibold'>{location}</span>
      </div>
    </>
  );
};

export default PropertyHeader;
