import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { getProperties } from '../api/properties/requests';
import PropertyCard from '../components/homepage/PropertyCard';
import PropertyCardSkeleton from '../components/homepage/PropertyCardSkeleton';
import { Logs, LayoutGrid, ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';

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
                    {/* Sort Section */}
                    <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-2'>
                            <Logs size={20} />
                            <LayoutGrid size={20} />
                            Sort by:
                        </div>
                        <div className='relative'>
                            <button 
                                className='flex items-center gap-2 text-[#6D737A] cursor-pointer'
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Default Order <ChevronDown size={20} />
                            </button>
                            {isDropdownOpen && (
                                <div className='absolute top-12 left-0 bg-white shadow-lg rounded-md z-10 min-w-[200px]'>
                                    {[
                                        { label: 'Default Order', value: 'default' },
                                        { label: 'Price: Low to High', value: 'price-asc' },
                                        { label: 'Price: High to Low', value: 'price-desc' },
                                        { label: 'Newest First', value: 'newest' }
                                    ].map(option => (
                                        <button 
                                            key={option.value}
                                            className='block w-full text-left px-3 py-4 hover:bg-gray-50'
                                            onClick={() => {
                                                setSortBy(option.value);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Filter Buttons */}
                    <div className='flex items-center justify-between md:justify-normal md:gap-8'>
                        {[
                            { label: 'All Properties', value: 'all' },
                            { label: 'For Sale', value: 'Sell' },
                            { label: 'For Rent', value: 'Rent' }
                        ].map(type => (
                            <button
                                key={type.value}
                                onClick={() => setSelectedType(type.value)}
                                className={`text-gray-600 hover:text-gray-900 ${
                                    selectedType === type.value
                                        ? 'font-bold text-gray-900'
                                        : ''
                                }`}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
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
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                            {currentItems.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                        
                        <div className="flex justify-center items-center gap-2 mt-10">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
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
                                    onClick={() => handlePageChange(page)}
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
                                onClick={() => handlePageChange(currentPage + 1)}
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
                    </>
                )}
            </div>
        </div>
    );
};

export default PropertiesPage;