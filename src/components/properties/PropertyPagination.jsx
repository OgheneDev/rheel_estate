import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const PropertyPagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-4 rounded ${
          currentPage === 1
            ? 'bg-[#EDEFF6] text-[#104438]'
            : 'bg-[#104438] text-white'
        }`}
      >
        <ArrowLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-5 py-4 rounded ${
            currentPage === page
              ? 'bg-[#104438] text-white'
              : 'bg-[#EDEFF6] text-[#104438]'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-4 rounded ${
          currentPage === totalPages
            ? 'bg-[#104438] text-white'
            : 'bg-[#104438] text-white'
        }`}
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default PropertyPagination;
