import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CareerCard from '../components/careers/CareerCard';
import CareerFilters from '../components/careers/CareerFilters';
import { getCareers } from '../services/careers';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CareerSkeleton from '../components/careers/CareerSkeleton';

const CareersPage = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState('default');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const data = await getCareers();
                setCareers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCareers();
    }, []);

    const sortedCareers = React.useMemo(() => {
        if (sortBy === 'default') return careers;
        
        return [...careers].sort((a, b) => {
            switch (sortBy) {
                case 'title':
                    return a.title.localeCompare(b.title);
                case 'location':
                    return a.location.localeCompare(b.location);
                case 'salary-asc':
                    return a.salary - b.salary;
                case 'salary-desc':
                    return b.salary - a.salary;
                case 'date':
                    return new Date(b.posted_date) - new Date(a.posted_date);
                default:
                    return 0;
            }
        });
    }, [careers, sortBy]);

    const totalPages = Math.ceil(sortedCareers.length / itemsPerPage);
    const currentCareers = sortedCareers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="bg-[url('/src/assets/images/about-banner.png')] bg-cover bg-center h-[260px] bg-blend-overlay bg-[#185A5199]">
                <Navbar />
                <article className='text-white text-center pt-20'>
                    <h3 className='text-2xl md:mb-3 font-bold'>Careers</h3>
                    <p>Join Our Team</p>
                </article>
            </div>

            <div className="px-5 md:px-[78px] py-8">
                <CareerFilters 
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {loading ? (
                        Array(6).fill(null).map((_, index) => (
                            <CareerSkeleton key={index} />
                        ))
                    ) : (
                        currentCareers.map(career => (
                            <CareerCard key={career.id} career={career} />
                        ))
                    )}
                </div>

                {!loading && totalPages > 1 && (
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

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-5 py-4 rounded ${
                                    currentPage === i + 1
                                        ? 'bg-[#104438] text-white'
                                        : 'bg-[#EDEFF6] text-[#104438]'
                                }`}
                            >
                                {i + 1}
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
                )}
            </div>
        </div>
    );
};

export default CareersPage;