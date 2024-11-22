'use client'
import React from 'react'

import AppWrapper from '@/components/AppWrapper'
import BlogCard from '@/components/BlogCard'



const index = () => {
  return (
    <AppWrapper isSearchEnabled={true} padding={true} navbarEnable={true}>
        <div className='p-12 w-4/5 shadow-2xl transition-shadow duration-300 flex flex-col gap-8 mt-24'>
            <BlogCard isReadMoreEnabled={false}/>
            
        </div>
    </AppWrapper>
  )
}

export default index