import React from 'react';
import { MapPin, Ribbon, ArrowRight } from 'lucide-react';

const CareerCard = ({ career }) => {
    const formatSalary = (salary) => {
        return salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

  return (
    <div className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col h-full border border-gray-100">
      <div className="flex flex-wrap justify-between mb-6">
        <span className="bg-[#207DFF]/10 text-[#207DFF] px-4 py-2 rounded-full text-sm font-medium">
          {career.position}
        </span>
        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
          career.type === 'Full-time' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-blue-100 text-blue-700'
        }`}>
          {career.type}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-gray-900">{career.title}</h3>
      
      <p className="text-gray-600 text-[15px] mb-6 flex-grow break-words">
        {career.description}
      </p>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} className="text-gray-400" />
          <span className="text-sm">{career.location}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Ribbon size={18} className="text-gray-400" />
          <span className="text-sm">₦{formatSalary(career.salary)}</span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <button className="flex items-center cursor-pointer gap-2 text-[#207DFF] font-medium hover:gap-3 transition-all ml-auto group">
          Apply Now
          <ArrowRight size={18} className="group-hover:transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CareerCard;