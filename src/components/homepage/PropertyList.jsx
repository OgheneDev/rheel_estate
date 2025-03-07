import React, { useState, useEffect } from 'react';
import { getProperties } from '../../api/properties/requests';
import PropertyCard from './PropertyCard';
import PropertyCardSkeleton from './PropertyCardSkeleton';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const data = await getProperties();
                console.log('Fetched properties:', data); // Debug log
                setProperties(Array.isArray(data) ? data : []); // Adjust this line based on the actual API response structure
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    if (loading) return (
        <div className='grid grid-cols-1 gap-10'>
            {[1, 2, 3].map((i) => (
                <PropertyCardSkeleton key={i} />
            ))}
        </div>
    );
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
          <div className='grid grid-cols-1 gap-10'>
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </div>
        <div className="flex justify-center">
        <button className='border-[#DB2626] border rounded-full px-3 py-2 text-[14px] mt-10'>
          Load More
        </button>
        </div>
        </div>
    );
};

export default PropertyList;