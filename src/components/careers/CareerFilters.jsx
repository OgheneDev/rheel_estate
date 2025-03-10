import React from 'react';
import { ChevronDown, Logs, LayoutGrid } from 'lucide-react';

const CareerFilters = ({ sortBy, setSortBy, isDropdownOpen, setIsDropdownOpen }) => {
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
                    {sortBy === 'default' ? 'Default Order' : sortBy} <ChevronDown size={20} />
                </button>
                {isDropdownOpen && (
                    <div className='absolute top-12 left-0 bg-white shadow-lg rounded-md z-10 min-w-[200px]'>
                        {[
                            { label: 'Default Order', value: 'default' },
                            { label: 'Title', value: 'title' },
                            { label: 'Location', value: 'location' },
                            { label: 'Salary: Low to High', value: 'salary-asc' },
                            { label: 'Salary: High to Low', value: 'salary-desc' },
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
