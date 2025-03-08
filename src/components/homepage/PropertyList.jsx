import React, { useState, useEffect } from 'react';
import { getProperties } from '../../api/properties/requests';
import PropertyCard from './PropertyCard';
import PropertyCardSkeleton from './PropertyCardSkeleton';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);

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

    const displayedProperties = showAll 
        ? properties
        : properties.slice(0, window.innerWidth < 768 ? 2 : 6);

    if (loading) return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <PropertyCardSkeleton key={i} />
            ))}
        </div>
    );
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {displayedProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
            
            <div className="flex justify-center">
                <button 
                    onClick={() => setShowAll(!showAll)}
                    className='border-[#DB2626] border rounded-full px-3 py-2 text-[14px] mt-10'
                >
                    {showAll ? 'Show Less' : 'Load More'}
                </button>
            </div>
        </div>
    );
};

export default PropertyList;