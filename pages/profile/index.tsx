import AppWrapper from '@/components/AppWrapper'
import Profile from '@/components/Profile'
import React from 'react'



const index = () => {
  return (
  <>
  <AppWrapper navbarEnable={true} isSearchEnabled={true} padding={true}>
    <section className='p-12'>
        <Profile/>
    </section>

  </AppWrapper>
  </>
  )
}

export default index