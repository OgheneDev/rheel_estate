import React from 'react';
import { Bed, Bath, Sofa } from 'lucide-react';

const PropertyFeatures = ({ bedroom, bathroom, livingRoom }) => {
  return (
    <div className='flex justify-between mt-2 border rounded-[15px] py-2 px-5 mb-5'>
      <div className='flex gap-1 items-center'>
        <Bed size={20} className='text-[#0A2F1E]' />
        <span className='text-[14px] md:text-[18px]'>{bedroom} Beds</span>
      </div>
      <div className='flex gap-1 items-center'>
        <Bath size={20} className='text-[#0A2F1E]' />
        <span className='text-[14px] md:text-[18px]'>{bathroom} Baths</span>
      </div>
      <div className='flex gap-1 items-center'>
        <Sofa size={20} strokeWidth={1} fill="#0A2F1E" className='text-white' />
        <span className='text-[14px] md:text-[18px]'>{livingRoom} Living Rooms</span>
      </div>
    </div>
  );
};

export default PropertyFeatures;
