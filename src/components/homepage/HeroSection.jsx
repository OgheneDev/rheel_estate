import React, { useState } from 'react';
import { useSearch } from '../../context/SearchContext';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const { setSearchParams } = useSearch();
  const [localLocation, setLocalLocation] = useState('');
  const [localPropertyType, setLocalPropertyType] = useState('');

  const propertyTypes = {
    1: 'Duplex', 2: 'Terrace', 3: 'Bungalow', 4: 'Apartments',
    5: 'Commercial', 6: 'Carcass', 7: 'Land', 8: 'JV Land',
  };

  const handleSearch = () => {
    setSearchParams({
      type: activeTab === 'Buy' ? 'Sell' : 'Lease',
      propertyTypeId: localPropertyType,
      location: localLocation,
      isSearchActive: true // Set to true when search is initiated
    });

    // Scroll to property list
    const propertyList = document.getElementById('property-list');
    if (propertyList) {
      propertyList.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='px-7 md:px-[350px] py-15 md:pt-25 text-white text-center'>
        <h1 className="uppercase text-xl md:text-3xl font-semibold mb-4">
          Buy or Lease Luxury Homes and Apartments in Nigeria with Rheel Estate
        </h1>
        <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto">
          We Offering You A Seamless Blend Of Sophistication, Security, And Value. Whether You're 
          A Resident Or In The Diaspora. Buy With Confidence And Enjoy Exclusive Discounts And 
          Cashback, Direct Access To Home Owners, And Flexible Financing Options All Designed 
          To Make Homeownership Easier And More Rewarding
        </p>
         
        {/* Desktop Search Bar Container */}
        <div className="max-w-4xl mx-auto bg-[#016A5280] rounded-xl p-6 hidden md:block">
          {/* Tabs */}
          <div className="flex gap-2">
            <button 
              className={`px-6 py-2  ${activeTab === 'Buy' ? 'bg-white text-black' : 'bg-[#A2C4BD] text-white'} font-medium rounded-t-md`}
              onClick={() => setActiveTab('Buy')}
            >
              Buy
            </button>
            <button 
              className={`px-6 py-2 ${activeTab === 'Rent' ? 'bg-white text-black' : 'bg-[#A2C4BD] text-white'} font-medium rounded-t-md`}
              onClick={() => setActiveTab('Rent')}
            >
              Rent
            </button>
          </div>
          
          {/* Desktop Search Layout - Matches the new reference image */}
          <div className="bg-white rounded-xl rounded-tl-none p-2 flex items-center">
            <div className="flex-grow flex items-center px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <select 
                value={localPropertyType}
                onChange={(e) => setLocalPropertyType(e.target.value)}
                className="block py-3 text-gray-700 bg-white border-gray-300 focus:outline-none appearance-none pr-8"
              >
                <option value="">Property type</option>
                {Object.entries(propertyTypes).map(([id, type]) => (
                  <option key={id} value={id}>{type}</option>
                ))}
              </select>
              <svg className="w-4 h-4 text-gray-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            
            <div className="flex-grow flex items-center px-2 border-l border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <input 
                type="text" 
                value={localLocation}
                onChange={(e) => setLocalLocation(e.target.value)}
                placeholder="Search by available location" 
                className="block w-full py-3 text-gray-700 bg-white focus:outline-none"
              />
            </div>
            
            <button 
              onClick={handleSearch}
              className="bg-black hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-xl ml-2"
            >
              Search
            </button>
          </div>
        </div>
          
        {/* Mobile Search Layout */}
        <div className="md:hidden ]">
          {/* First row: Buy button and Property type dropdown */}
          <div className="flex mb-2 gap-2">
            <button 
              className={`py-2 px-[22px] rounded-t-md ${activeTab === 'Buy' ? 'bg-white text-black' : 'bg-[#A2C4BD] text-white'} font-medium`}
              onClick={() => setActiveTab('Buy')}
            >
              Buy
            </button>
            
            <div className="flex-1 relative bg-white rounded-md">
              <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <select 
                value={localPropertyType}
                onChange={(e) => setLocalPropertyType(e.target.value)}
                className="block w-full pl-8 pr-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none appearance-none text-sm"
              >
                <option value="">Property type</option>
                {Object.entries(propertyTypes).map(([id, type]) => (
                  <option key={id} value={id}>{type}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-1 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Second row: Rent button and search input */}
          <div className="flex mb-2 gap-2">
            <button 
              className={`py-2 px-5 rounded-t-md ${activeTab === 'Rent' ? 'bg-white text-black' : 'bg-[#A2C4BD] text-white'} font-medium`}
              onClick={() => setActiveTab('Rent')}
            >
              Rent
            </button>
            
            <div className="flex-1 relative bg-white rounded-md">
              <div className="absolute inset-y-0 left-1 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input 
                type="text" 
                value={localLocation}
                onChange={(e) => setLocalLocation(e.target.value)}
                placeholder="Search by available location" 
                className="block w-full pl-8 pr-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none text-sm"
              />
            </div>
          </div>
          
          {/* Search Button */}
          <div className="flex justify-end">
            <button 
              onClick={handleSearch}
              className=" bg-black hover:bg-gray-900 text-white font-medium py-2 px-8 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
    </div>
  )
}

export default HeroSection