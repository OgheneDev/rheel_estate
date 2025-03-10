import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Sofa } from 'lucide-react';

const propertyTypes = {
    1: 'Duplex',
    2: 'Terrace',
    3: 'Bungalow',
    4: 'Apartments',
    5: 'Commercial',
    6: 'Carcass',
    7: 'Land',
    8: 'JV Land',
};

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const PropertyCard = ({ property }) => {
    const navigate = useNavigate();

    const handlePropertyClick = () => {
        navigate(`/properties/${property.id}`);
    }
    return (
        <div className="group md:w-[350px]">
            <div className="overflow-hidden rounded-[20px] mb-5">
                <img 
                    src={property.property_images[0]} 
                    alt="Property Image" 
                    className='w-full h-[275px] object-cover cursor-pointer transition-transform duration-700 ease-in-out group-hover:scale-110' 
                />
            </div>
            <h2 className='text-2xl font-bold mb-3'>{propertyTypes[property.property_type_id]}</h2>
            <div className='flex gap-2'>
                <MapPin size={20} className=' border-black' />
                <span className='text-semibold text-[18px]'>{property.location}</span>
            </div>
            <div className='text-[#DB2626] flex justify-between mt-2'>
                <div className='flex gap-1 items-center'>
                    <Bed size={20}  className='text-[#DB2626]' />
                    <span className='text-[14px]'>{property.bedroom} Beds</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <Bath size={20}  className='text-[#DB2626]' />
                    <span className='text-[14px]'>{property.bathroom} Baths</span>
                </div>
                <div className='flex gap-1 items-center'>
                    <Sofa size={20} strokeWidth={1} fill="#DB2626" className='text-white' />
                    <span className='text-[14px]'>{property.living_room} Living Rooms</span>
                </div>
            </div>
            <div className='mt-2 flex justify-between items-center text-[#DB2626]'>
                <p className='text-[18px]'>₦{formatPrice(property.price)}</p>
                <button 
                 onClick={handlePropertyClick}
                 className='border border-black p-2 px-3 rounded-full text-[14px] cursor-pointer'>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
