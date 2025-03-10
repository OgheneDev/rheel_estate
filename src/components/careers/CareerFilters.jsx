import React from 'react';
import { ChevronDown } from 'lucide-react';

const CareerFilters = ({ sortBy, setSortBy, isDropdownOpen, setIsDropdownOpen }) => {
    return (
        <div className='flex items-center gap-3'>
            <span className="font-medium">Sort by:</span>
            <div className='relative'>
                <button 
                    className='flex items-center gap-2 text-[#6D737A] cursor-pointer'
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {sortBy === 'default' ? 'Default Order' : sortBy} <ChevronDown size={20} />
                </button>
                {isDropdownOpen && (
                    <div className='absolute top-12 left-0 bg-white shadow-lg rounded-md z-10 min-w-[200px]'>
                        {[
                            { label: 'Default Order', value: 'default' },
                            { label: 'Department', value: 'department' },
                            { label: 'Location', value: 'location' },
                            { label: 'Latest', value: 'date' }
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

export default CareerFilters;
