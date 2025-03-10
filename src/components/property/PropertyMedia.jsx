import React from 'react';

const PropertyMedia = ({ floorPlans, videoUrl }) => {
  return (
    <div className='flex flex-col md:flex-row gap-10 md:gap-16 border rounded-[15px] p-5 md:py-10'>
      <div className='flex-1'>
        <h3 className='text-xl font-bold mb-6'>Building Plan</h3>
        <div className='grid grid-cols-2 gap-4'>
          {floorPlans.map((plan, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <img 
                src={plan} 
                alt={`Building Plan ${index + 1}`} 
                className='w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110' 
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">View Plan {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className='flex-1'>
        <h3 className='text-xl font-bold mb-6'>Video Tour</h3>
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src={videoUrl}
              title="Property Video Tour"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 pointer-events-none border border-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMedia;
