import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import PropertySort from '../components/properties/PropertySort';
import PropertyFilter from '../components/properties/PropertyFilter';
import PropertyPagination from '../components/properties/PropertyPagination';
import { getProperties } from '../api/properties/requests';
import PropertyCard from '../components/homepage/PropertyCard';
import PropertyCardSkeleton from '../components/homepage/PropertyCardSkeleton';

const PropertiesPage = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth < 768 ? 4 : 12;
    const [sortBy, setSortBy] = useState('default');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedType, setSelectedType] = useState('all');

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const data = await getProperties();
                setProperties(Array.isArray(data) ? data : []); // Fix data assignment
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const totalPages = Math.ceil((properties?.length || 0) / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const sortProperties = (props) => {
        switch(sortBy) {
            case 'price-asc':
                return [...props].sort((a, b) => a.price - b.price);
            case 'price-desc':
                return [...props].sort((a, b) => b.price - a.price);
            case 'newest':
                return [...props].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            default:
                return props;
        }
    };

    const filterProperties = (props) => {
        if (selectedType === 'all') return props;
        return props.filter(property => property.type === selectedType);
    };

    const processedProperties = sortProperties(filterProperties(properties || []));
    const currentItems = processedProperties.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className="bg-[url('/src/assets/images/prop.jpg')] bg-cover bg-center h-[260px] bg-blend-overlay bg-[#185A5199]">
                <Navbar />
                <article className='text-white text-center pt-20'>
                    <h3 className='text-2xl md:mb-3 font-bold'>Properties</h3>
                    <p>Homes/Properties</p>
                </article>
            </div>

            <div className='px-5 md:px-[78px] py-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-4'>
                    <PropertySort 
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        isDropdownOpen={isDropdownOpen}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                    <PropertyFilter 
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}
                    />
                </div>
            </div>

            <div className='p-5 md:px-[75px]'>
                {loading ? (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {Array(itemsPerPage).fill(null).map((_, i) => (
                            <PropertyCardSkeleton key={i} />
                        ))}
                    </div>
                ) : (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-3  gap-10'>
                            {currentItems.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                        
                        {totalPages > 1 && (
                            <PropertyPagination 
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PropertiesPage;