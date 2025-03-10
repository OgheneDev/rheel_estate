import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PropertyHeader from '../components/property/PropertyHeader';
import PropertyImage from '../components/property/PropertyImage';
import PropertyFeatures from '../components/property/PropertyFeatures';
import PropertyDetails from '../components/property/PropertyDetails';
import PropertyImageGallery from '../components/property/PropertyImageGallery';
import PropertyDescription from '../components/property/PropertyDescription';
import PropertyMedia from '../components/property/PropertyMedia';
import VerifiedBadge from '../components/property/VerifiedBadge';
import { getPropertyById } from '../api/properties/requests';

const PropertyDetailPage = () => {
  const {id} = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] =  useState(true);
  const [error, setError] = useState(null);

  const propertyTypes = {
    1: 'Duplex', 2: 'Terrace', 3: 'Bungalow', 4: 'Apartments',
    5: 'Commercial', 6: 'Carcass', 7: 'Land', 8: 'JV Land',
  };

  
  

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await getPropertyById(id);
      if (response?.data) {
        setProperty(response.data);
      } else {
        throw new Error('Property not found');
      }
    } catch (error) {
      setError(error.message || 'Failed to fetch property');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 }).format(price);
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="flex items-center justify-center w-full h-[700px]">
          <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-[#EE7953]"></div>
        </div>
      </div>
    );
 }

  if (error || !property) {
    return (
      <div className="p-4">
        <div className="bg-white rounded-lg p-6 text-center">
          <h2 className="text-xl text-red-600 mb-2">Error</h2>
          <p className="text-gray-600">{error || 'Property not found'}</p>
        </div>
      </div>
    );
  }
  

  return (
    <div>
      <div className="bg-[url('/src/assets/images/propery-banner.png')] bg-cover bg-center">
        <Navbar />
      </div>

      <div className="px-5 py-7 md:py-10 md:px-[78px]">
        <PropertyHeader type={propertyTypes[property.property_type_id]} location={property.location} />
        
        <div className='flex flex-col md:flex-row gap-7 md:gap-0 mb-5'>
          <PropertyImage image={property.property_images[0]} />
          
          <div className="content md:w-[45%]">
            <PropertyFeatures 
              bedroom={property.bedroom}
              bathroom={property.bathroom}
              livingRoom={property.living_room}
            />
            <PropertyDetails 
              property={property}
              formatPrice={formatPrice}
              propertyType={propertyTypes[property.property_type_id]}
            />
            <div className="bg-black w-full h-[1px] mb-5"></div>
            <VerifiedBadge />
          </div>
        </div>

        <div className="bg-black w-full h-[1px] mb-5"></div>
        <PropertyImageGallery images={property.property_images} />
        <div className="bg-black w-full h-[1px] mb-5"></div>
        <PropertyDescription description={property.property_description} amenities={property.amenities} />
        <PropertyMedia floorPlans={property.floor_plan} videoUrl={property.video_upload} />
      </div>
    </div>
  );
};

export default PropertyDetailPage;