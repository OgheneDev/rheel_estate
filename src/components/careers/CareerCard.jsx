import React from 'react';

const CareerCard = ({ career }) => {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col">
      <div className="flex gap-2 mb-2">
        {/* Position Tag */}
        <div className="bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded">
          {career.position}
        </div>
        
        {/* Type Tag */}
        <div className="bg-green-800 text-white px-3 py-1 text-sm font-medium rounded">
          {career.type}
        </div>
      </div>
      
      {/* Job Title */}
      <h3 className="text-lg font-medium mt-2 mb-1">{career.title}</h3>
      
      {/* Job Description */}
      <p className="text-gray-600 text-sm mb-3">
        {career.description}
      </p>
      
      {/* Location */}
      <div className="flex items-center text-sm text-gray-500 mb-1">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {career.location}
      </div>
      
      {/* Salary Range */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
        </svg>
        {career.salary}
      </div>
      
      {/* Apply Button */}
      <div className="mt-auto">
        <button className="text-right flex items-center text-sm ml-auto font-medium">
          Apply Now
          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CareerCard;