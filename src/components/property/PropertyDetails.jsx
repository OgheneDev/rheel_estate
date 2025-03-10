import React from 'react';
import { Mail, Stamp } from 'lucide-react';
import { WhatsAppIcon } from '../../pages/PropertyDetailPage';

const PropertyDetails = ({ property, formatPrice, propertyType }) => {
  return (
    <div className='border rounded-[15px] p-3 mb-5'>
      <article className='mb-5'>
        <p className='text-[18px] mb-2'>
          {property.type.toLowerCase() === 'lease' ? 'Rent now for just' : 'Buy now for just'}
        </p>
        <h3 className='text-2xl font-bold'>₦{formatPrice(property.price)}</h3>
      </article>
      <div className='flex items-center justify-between mb-5'>
        <button className='flex items-center gap-2 text-[#0A2F1E] border text-[12px] border-[#0A2F1E] rounded-[15px] px-4 py-2'>
          <Mail size={20} className='text-[#0A2F1E]' />
          Make enquiries
        </button>
        <a 
          href={`https://wa.me/+2348012345678?text=Hello, I'm interested in the ${propertyType} at ${property.location}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className='flex items-center gap-2 text-[white] bg-[#0A2F1E] text-[12px] rounded-[15px] px-4 py-2'
        >
          <WhatsAppIcon />
          Make enquiries
        </a>
      </div>
      <div className="bg-black w-full h-[1px] mb-5"></div>
      <p>Property is for {property.type}</p>
    </div>
  );
};

export default PropertyDetails;
