import React from 'react'
import PropertyList from './PropertyList'

const Living = () => {
  return (
    <section className='px-7 py-15'>
        <article className='text-center mb-15'>
            <h2 className='uppercase text-xl mb-4 text-[#004040]'>Elevate</h2>
            <h1 className='text-2xl font-semibold'>Your Living</h1>
        </article>
        <PropertyList />
        
    </section>
  )
}

export default Living