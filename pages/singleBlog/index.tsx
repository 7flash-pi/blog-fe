'use client'
import React from 'react'

import AppWrapper from '@/components/AppWrapper'
import BlogCard from '@/components/BlogCard'



const index = () => {
  return (
    <AppWrapper isSearchEnabled={true} padding={true} navbarEnable={true}>
        <div className='w-full p-8 shadow-2xl transition-shadow duration-300 flex flex-col justify-center items-center gap-8 lg:mt-24 md:mt-18'>
            <BlogCard isReadMoreEnabled={false}/>
            
        </div>
    </AppWrapper>
  )
}

export default index