import React from 'react'
import PropertyList from './PropertyList'

const Living = () => {
  return (
    <section className='px-7 md:py-15 py-10'>
        <article className='text-center mb-15'>
            <h2 className='uppercase text-2xl mb-4 text-[#004040]'>Elevate</h2>
            <h1 className='text-3xl font-semibold'>Your Living</h1>
        </article>
        <PropertyList />
    </section>
  )
}

export default Living