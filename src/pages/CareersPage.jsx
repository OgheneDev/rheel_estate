import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CareerCard from '../components/careers/CareerCard';
import CareerFilters from '../components/careers/CareerFilters';
import { getCareers } from '../services/careers';

const CareersPage = () => {
    const [careers, setCareers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortBy, setSortBy] = useState('default');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                case 'department':
                    return a.department.localeCompare(b.department);
                case 'location':
                    return a.location.localeCompare(b.location);
                case 'date':
                    return new Date(b.posted_date) - new Date(a.posted_date);
                default:
                    return 0;
            }
        });
    }, [careers, sortBy]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div className="bg-[url('/src/assets/images/about-banner.png')] bg-cover bg-center h-[260px]">
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
                    {sortedCareers.map(career => (
                        <CareerCard key={career.id} career={career} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareersPage;