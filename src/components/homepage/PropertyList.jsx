import React, { useState, useEffect } from 'react';
import { getProperties } from '../../api/properties/requests';
import PropertyCard from './PropertyCard';
import PropertyCardSkeleton from './PropertyCardSkeleton';
import { useSearch } from '../../context/SearchContext';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);
    const { searchParams } = useSearch();

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

    const filterProperties = (props) => {
        // If search hasn't been initiated, return all properties
        if (!searchParams.isSearchActive) {
            return props;
        }

        return props.filter(property => {
            const typeMatch = !searchParams.type || property.type === searchParams.type;
            const locationMatch = !searchParams.location || 
                property.location.toLowerCase().includes(searchParams.location.toLowerCase());
            const propertyTypeMatch = !searchParams.propertyTypeId || 
                property.property_type_id.toString() === searchParams.propertyTypeId;

            return typeMatch && locationMatch && propertyTypeMatch;
        });
    };

    const displayedProperties = showAll 
        ? filterProperties(properties)
        : filterProperties(properties).slice(0, window.innerWidth < 768 ? 2 : 6);

    if (loading) return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <PropertyCardSkeleton key={i} />
            ))}
        </div>
    );
    if (error) return <div>Error: {error}</div>;

    return (
        <div id="property-list">
            {displayedProperties.length === 0 && searchParams.isSearchActive ? (
                <div className="text-center py-10">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
                    <p className="text-gray-500">
                        We couldn't find any properties matching your search criteria.
                        {searchParams.location && (
                            <span className="block mt-1">
                                Try searching in a different location or adjusting your filters.
                            </span>
                        )}
                    </p>
                </div>
            ) : (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:px-[50px]'>
                        {displayedProperties.map(property => (
                            <PropertyCard key={property.id} property={property} />
                        ))}
                    </div>
                    
                    {displayedProperties.length > (window.innerWidth < 768 ? 2 : 6) && (
                        <div className="flex justify-center">
                            <button 
                                onClick={() => setShowAll(!showAll)}
                                className='border-[#DB2626] border rounded-full px-3 py-2 text-[14px] mt-10'
                            >
                                {showAll ? 'Show Less' : 'Load More'}
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default PropertyList;