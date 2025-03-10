import React from 'react';
import { Logs, LayoutGrid, ChevronDown } from 'lucide-react';

const PropertySort = ({ sortBy, setSortBy, isDropdownOpen, setIsDropdownOpen }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-2'>
        <Logs size={20} />
        <LayoutGrid size={20} />
        Sort by:
      </div>
      <div className='relative'>
        <button 
          className='flex items-center gap-2 text-[#6D737A] cursor-pointer'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Default Order <ChevronDown size={20} />
        </button>
        {isDropdownOpen && (
          <div className='absolute top-12 left-0 bg-white shadow-lg rounded-md z-10 min-w-[200px]'>
            {[
              { label: 'Default Order', value: 'default' },
              { label: 'Price: Low to High', value: 'price-asc' },
              { label: 'Price: High to Low', value: 'price-desc' },
              { label: 'Newest First', value: 'newest' }
            ].map(option => (
              <button 
                key={option.value}
                className='block w-full text-left px-3 py-4 hover:bg-gray-50'
                onClick={() => {
                  setSortBy(option.value);
                  setIsDropdownOpen(false);
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertySort;
