import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { MapPin, Bed, Sofa, Bath, Mail, Stamp } from 'lucide-react'
import { getPropertyById } from '../api/properties/requests'
import Navbar from '../components/Navbar'

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 448 512">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 120.4 54.1 34.8 34.9 56.2 81.2 56.1 120.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-128.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 12.9 10.7-1.6 32.8-12.4 37.4-26.4 4.6-12 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
);

const PropertyDetailPage = () => {
    const {id} = useParams();
    const [property, setProperty] = useState(null);
    const [loading, setLoading] =  useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await getPropertyById(id);
                console.log('Property response:', response); 
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
        fetchProperty();
    }, [id]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-NG', {
          maximumFractionDigits: 0
        }).format(price);
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
    
  return (
    <div>
        <div className="bg-[url('/src/assets/images/propery-banner.png')] bg-cover bg-center">
            <Navbar />
        </div>
        <div className="px-5 py-7">
        <h2 className='text-2xl font-bold'>{propertyTypes[property.property_type_id]}</h2>
        <div className='flex gap-2 mb-5'>
            <MapPin size={20} className=' border-black' />
            <span className='text-semibold'>{property.location}</span>
        </div>
        <div className='flex flex-col gap-7 mb-5'>
            <div className="image">
                <img src={property.property_images[0]} alt="Property Image" className='rounded-lg' />
            </div>
            <div className="content">
                <div className=' flex justify-between mt-2 border rounded-[15px] py-2 px-5 mb-5'>
                    <div className='flex gap-1 items-center'>
                        <Bed size={20} className='text-[#0A2F1E]' />
                        <span className='text-[14px]'>{property.bedroom} Beds</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Bath size={20} className='text-[#0A2F1E]' />
                        <span className='text-[14px]'>{property.bathroom} Baths</span>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Sofa size={20} strokeWidth={1} fill="#0A2F1E" className='text-white' />
                        <span className='text-[14px]'>{property.living_room} Living Rooms</span>
                    </div>
                </div>
                <div className='border rounded-[15px] p-3 mb-5'>
                <article className='mb-5'>
                 <p className='text-[18px] mb-2'>
                    {property.type.toLowerCase() === 'lease' ? 'Rent now for just' : 'Buy now for just'}
                 </p>
                   <h3 className='text-2xl font-bold'>₦{formatPrice(property.price)}</h3>
                </article>
                    <div className='flex items-center justify-between mb-5'>
                        <button className='flex items-center gap-2 text-[#0A2F1E] border text-[12px] border-[#0A2F1E] rounded-[15px] px-4 py-2'>
                            <Mail size={20} className='text-[#0A2F1E]' />
                            Make enquiries
                        </button>
                        <a 
                            href={`https://wa.me/+2348012345678?text=Hello, I'm interested in the ${propertyTypes[property.property_type_id]} at ${property.location}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 text-[white] bg-[#0A2F1E] text-[12px]  rounded-[15px] px-4 py-2'
                        >
                            <WhatsAppIcon />
                            Make enquiries
                        </a>
                    </div>
                    <div className="bg-black w-full h-[1px] mb-5"></div>
                    <p>Property is for {property.type}</p>
                </div>
                <div className="bg-black w-full h-[1px] mb-5"></div>
                <div className='flex justify-between items-center'>
                    <p>Rheel Estate Verified Property</p>
                    <Stamp size={20} />
                </div>
            </div>
        </div>
        <div className="bg-black w-full h-[1px] mb-5"></div>
        <div className='mb-5'>
            <h3 className='text-xl font-bold mb-5'>Other Images</h3>
            <div className='flex gap-5 flex-wrap'>
               {property.property_images.slice(1).map((image, index) => (
                 <div key={index} className="image">
                 <img src={image} alt="Property Image" className='rounded-lg w-[80px]' />
            </div>
            ))}
            </div>
        </div>
        <div className="bg-black w-full h-[1px] mb-5"></div>
        <div className='mb-5'>
            <h3 className='text-xl font-bold mb-5'>Product Description</h3>
            <p>{property.property_description}</p>
        </div>
        <p className='font-bold mb-5'>
           Amenities: {property.amenities.map((amenity, index) => (
           <span key={index}>
            {amenity}{index < property.amenities.length - 1 ? ', ' : ''}
           </span>
          ))}
       </p>
       <div className='flex flex-col gap-7'>
        <div>
            <h3 className='text-xl font-bold mb-5'>Building Plan</h3>
            <div className='flex flex-wrap'>
            {property.floor_plan.map((plan, index) => (
                <img key={index} src={plan} alt="Building Plan" className='rounded-lg w-[50%]' />
            ))}
            </div>
        </div>
        <div>
            <h3 className='text-xl font-bold mb-5'>Video Tour</h3>
            <div className="w-full aspect-video">
            <iframe
              className="w-full h-[300px]"
              src={property.video_upload}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
           </div>
        </div>
       </div>
        </div>
    </div>
  )
}

export default PropertyDetailPage