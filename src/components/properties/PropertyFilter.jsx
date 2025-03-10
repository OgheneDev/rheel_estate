import React from 'react';

const PropertyFilter = ({ selectedType, setSelectedType }) => {
  return (
    <div className='flex items-center justify-between md:justify-normal md:gap-8'>
      {[
        { label: 'All Properties', value: 'all' },
        { label: 'For Sale', value: 'Sell' },
        { label: 'For Rent', value: 'Rent' }
      ].map(type => (
        <button
          key={type.value}
          onClick={() => setSelectedType(type.value)}
          className={`text-gray-600 hover:text-gray-900 ${
            selectedType === type.value
              ? 'font-bold text-gray-900'
              : ''
          }`}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
};

export default PropertyFilter;
