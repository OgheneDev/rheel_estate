import React from 'react'
import Navbar from '../components/Navbar'
import { getProperties } from '../api/properties/requests'
import PropertyList from '../components/homepage/PropertyList'
import { Logs, LayoutGrid } from 'lucide-react'

const PropertiesPage = () => {
  return (
    <div>
        <div className="bg-[url('/src/assets/images/propery-banner.png')] bg-cover bg-center h-[240px]">
            <Navbar />
            <article className='text-white text-center pt-20'>
                <h3 className='text-xl'>Properties</h3>
                <p>Homes/Properties</p>
            </article>
        </div>

        <div className='px-5 py-8'>
            <div className='flex items-center gap-3 mb-3'>
                <div className='flex items-center gap-2'>
                    <Logs size={20} />
                    <LayoutGrid size={20} />
                </div>
                Sort by:
            </div>
            <div className='flex justify-between items-center'>
                <button>All Properties</button>
                <button>For Sale</button>
                <button>For Rent</button>
            </div>
        </div>

        <div className='px-5'>
        <PropertyList />
        </div>
    </div>
  )
}

export default PropertiesPage